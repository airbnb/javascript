GitBook Plugin: Edit Link
======================================

This GitBook Plugin adds "Edit This Page" link on every page.

Link target will be that page's source file on Github or Gitlab or any repo.

## Screenshot

![gitbook-plugin-edit-link](https://cloud.githubusercontent.com/assets/4115/5695161/f5b79002-99b8-11e4-821a-d2af6c729348.png)

## Usage

### Step #1 - Update `book.json` file

1. In you gitbook's `book.json` file, add `edit-link` to `plugins` list.
2. In `pluginsConfig`, Set `base` value which is base path to your github or gitlab or other code repo. Trailing slash is NOT required.
3. By default link label will be "Edit This Page". You can change it using plugin config `label`.

#### Sample `book.json` file for gitbook version 2.0.1 and above

```
{
    "gitbook": "2.0.1",
    "plugins": ["edit-link"],
    "pluginsConfig": {
            "edit-link": {
                "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
                "label": "Edit This Page"
            }
    }
}
```

#### Sample `book.json` file for gitbook version 2.0.1+ and multilingual labels

```
{
    "gitbook": "2.0.1",
    "plugins": ["edit-link"],
    "pluginsConfig": {
            "edit-link": {
                "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
                "label": {
                    "en": "Edit This Page",
                    "de": "Seite bearbeiten"
                }
            }
    }
}
```

#### Sample `book.json` file for older gitbook versions <= 1.5.0

```
{
    "gitbook": "1.5.0",
    "plugins": ["edit-link@1.1.0"],
    "pluginsConfig": {
            "edit-link": {
                "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
                "label": "Edit This Page"
            }
    }
}
```

**Note**: Above snippet can be used as complete `book.json` file, if your book doesn't have one yet.

**Github/Gitlab**: In string `...REPO/edit/BRANCH...`, you may replace `edit` with `tree` if you want source file to open in read-mode, rather than edit-mode directly on github/gitlab.

### Step #2 - gitbook commands

1. Run `gitbook install`. It will automatically install `edit-link` gitbook plugin for your book. This is needed only once.
2. Build your book (`gitbook build`) or serve (`gitbook serve`) as usual.

## Troubleshooting

1. If you are not seeing the "Edit this page" link, check if your `book.json` is valid. You can use this online tool - [http://json.parser.online.fr/beta/](http://json.parser.online.fr/beta/)
2. Check if you are using default gitbook theme. It is NOT recommended to modify gitbook themes directly.

## Known Issue

Gitbook 2.0.1 has removed `page:after` hook which this plugin needs. An issue has been reported here - https://github.com/GitbookIO/gitbook/issues/724 but meanwhile this plugin is using workaround added by this pull request - https://github.com/rtCamp/gitbook-plugin-edit-link/pull/4

So when using Gitbook 2.0.1, you may see following warning in console at the time of running build:

> warn: hook 'page' used by plugin 'gitbook-plugin-edit-link' is deprecated, and will be remove in the coming versions

You can safely ignore above warning for now.

## How this work?

This plugin simply looks for HTML comment `<!-- Actions Right -->` in parsed page content and insert "edit link" HTML just before `<!-- Actions Right -->`.

This means if that HTML comment changes, this plugin will break but I hope to fix it easily whenever that happen.

## Changelog

**1.3 - 28 April 2015**

- Gitbook 2.0.1 compatibility added by [@todvora](https://github.com/rtCamp/gitbook-plugin-edit-link/pull/4). Please see known-issues for more details.

**1.2 - 03 April 2015**

- Multiligual gitbook support added by [@aniav](https://github.com/aniav) ([#2](https://github.com/rtCamp/gitbook-plugin-edit-link/pull/2))

**1.1.3 - 11 Jan 2015**

- Initial release
