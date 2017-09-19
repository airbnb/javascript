var Prism = require('prismjs');
var languages = require('prismjs').languages;
var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');
var mkdirp = require('mkdirp');

var DEFAULT_LANGUAGE = 'markup';
var MAP_LANGUAGES = {
  'py': 'python',
  'js': 'javascript',
  'rb': 'ruby',
  'cs': 'csharp',
  'sh': 'bash',
  'html': 'markup'
};

// Base languages syntaxes (as of prism@1.6.0), extended by other syntaxes.
// They need to be required before the others.
var PRELUDE = [
  'clike', 'javascript', 'markup', 'c', 'ruby', 'css',
  // The following depends on previous ones
  'java', 'php'
];
PRELUDE.map(requireSyntax);

/**
 * Load the syntax definition for a language id
 */
function requireSyntax(lang) {
  require('prismjs/components/prism-' + lang + '.js');
}

function getConfig(context, property, defaultValue) {
  var config = context.config ? /* 3.x */ context.config : /* 2.x */ context.book.config;
  return config.get(property, defaultValue);
}

function isEbook(book) {
  // 2.x
  if (book.options && book.options.generator) {
    return book.options.generator === 'ebook';
  }

  // 3.x
  return book.output.name === 'ebook';
}

function getAssets() {

  var cssFiles = getConfig(this, 'pluginsConfig.prism.css', []);
  var cssFolder = null;
  var cssNames = [];
  var cssName = null;

  if (cssFiles.length === 0) {
    cssFiles.push('prismjs/themes/prism.css');
  }

  cssFiles.forEach(function(cssFile) {
    var cssPath = require.resolve(cssFile);
    cssFolder = path.dirname(cssPath);
    cssName = path.basename(cssPath);
    cssNames.push(cssName);
  });

  return {
    assets: cssFolder,
    css: cssNames
  };
}

module.exports = {
  book: getAssets,
  ebook: function() {

    // Adding prism-ebook.css to the CSS collection forces Gitbook
    // reference to it in the html markup that is converted into a PDF.
    var assets = getAssets.call(this);
    assets.css.push('prism-ebook.css');
    return assets;

  },
  blocks: {
    code: function(block) {

      var highlighted = '';
      var userDefined = getConfig(this, 'pluginsConfig.prism.lang', {});
      var userIgnored = getConfig(this, 'pluginsConfig.prism.ignore', []);

      // Normalize language id
      var lang = block.kwargs.language || DEFAULT_LANGUAGE;
      lang = userDefined[lang] || MAP_LANGUAGES[lang] || lang;

      // Check to see if the lang is ignored
      if (userIgnored.indexOf(lang) > -1) {
        return block.body;
      }

      // Try and find the language definition in components folder
      if (!languages[lang]) {
        try {
          requireSyntax(lang);
        } catch (e) {
          console.warn('Failed to load prism syntax: ' + lang);
          console.warn(e);
        }
      }

      if (!languages[lang]) lang = DEFAULT_LANGUAGE;

      // Check against html, prism "markup" works for this
      if (lang === 'html') {
        lang = 'markup';
      }

      try {
        // The process can fail (failed to parse)
        highlighted = Prism.highlight(block.body, languages[lang]);
      } catch (e) {
        console.warn('Failed to highlight:');
        console.warn(e);
        highlighted = block.body;
      }

      return highlighted;

    }
  },
  hooks: {

    // Manually copy prism-ebook.css into the temporary directory that Gitbook uses for inlining
    // styles from this plugin. The getAssets() (above) function can't be leveraged because
    // ebook-prism.css lives outside the folder referenced by this plugin's config.
    //
    // @Inspiration https://github.com/GitbookIO/plugin-styles-less/blob/master/index.js#L8
    init: function() {

      var book = this;

      if (!isEbook(book)) {
        return;
      }

      var outputDirectory = path.join(book.output.root(), '/gitbook/gitbook-plugin-prism');
      var outputFile = path.resolve(outputDirectory, 'prism-ebook.css');
      var inputFile = path.resolve(__dirname, './prism-ebook.css');
      mkdirp.sync(outputDirectory);

      try {
        fs.writeFileSync(outputFile, fs.readFileSync(inputFile));
      } catch (e) {
        console.warn('Failed to write prism-ebook.css. See https://git.io/v1LHY for side effects.');
        console.warn(e);
      }

    },
    page: function(page) {

      var highlighted = false;

      var $ = cheerio.load(page.content);

      // Prism css styles target the <code> and <pre> blocks using
      // a substring CSS selector:
      //
      //    code[class*="language-"], pre[class*="language-"]
      //
      // Adding "language-" to <pre> element should be sufficient to trigger
      // correct color theme.
      $('pre').each(function() {
        highlighted = true;
        const $this = $(this);
        $this.addClass('language-');
      });

      if (highlighted) {
        page.content = $.html();
      }

      return page;
    }
  }
};
