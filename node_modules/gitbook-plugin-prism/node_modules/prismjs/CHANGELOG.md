# Prism Changelog

## 1.6 (2016-12-03)

### New components

* __.properties__ ([#980](https://github.com/PrismJS/prism/issues/980)) [[`be6219a`](https://github.com/PrismJS/prism/commit/be6219a)]
* __Ada__ ([#949](https://github.com/PrismJS/prism/issues/949)) [[`65619f7`](https://github.com/PrismJS/prism/commit/65619f7)]
* __GraphQL__ ([#971](https://github.com/PrismJS/prism/issues/971)) [[`e018087`](https://github.com/PrismJS/prism/commit/e018087)]
* __Jolie__ ([#1014](https://github.com/PrismJS/prism/issues/1014)) [[`dfc1941`](https://github.com/PrismJS/prism/commit/dfc1941)]
* __LiveScript__ ([#982](https://github.com/PrismJS/prism/issues/982)) [[`62e258c`](https://github.com/PrismJS/prism/commit/62e258c)]
* __Reason__ (Fixes [#1046](https://github.com/PrismJS/prism/issues/1046)) [[`3cae6ce`](https://github.com/PrismJS/prism/commit/3cae6ce)]
* __Xojo__ ([#994](https://github.com/PrismJS/prism/issues/994)) [[`0224b7c`](https://github.com/PrismJS/prism/commit/0224b7c)]

### Updated components

* __APL__:
	* Add iota underbar ([#1024](https://github.com/PrismJS/prism/issues/1024)) [[`3c5c89a`](https://github.com/PrismJS/prism/commit/3c5c89a), [`ac21d33`](https://github.com/PrismJS/prism/commit/ac21d33)]
* __AsciiDoc__:
	* Optimized block regexps to prevent struggling on large files. Fixes [#1001](https://github.com/PrismJS/prism/issues/1001). [[`1a86d34`](https://github.com/PrismJS/prism/commit/1a86d34)]
* __Bash__:
	* Add `npm` to function list ([#969](https://github.com/PrismJS/prism/issues/969)) [[`912bdfe`](https://github.com/PrismJS/prism/commit/912bdfe)]
* __CSS__:
	* Make CSS strings greedy. Fix [#1013](https://github.com/PrismJS/prism/issues/1013). [[`e57e26d`](https://github.com/PrismJS/prism/commit/e57e26d)]
* __CSS Extras__:
	* Match attribute inside selectors [[`13fed76`](https://github.com/PrismJS/prism/commit/13fed76)]
* _Groovy__:
	* Fix order of decoding entities in groovy. Fixes [#1049](https://github.com/PrismJS/prism/issues/1049) ([#1050](https://github.com/PrismJS/prism/issues/1050)) [[`d75da8e`](https://github.com/PrismJS/prism/commit/d75da8e)]
* __Ini__:
	* Remove important token in ini definition ([#1047](https://github.com/PrismJS/prism/issues/1047)) [[`fe8ad8b`](https://github.com/PrismJS/prism/commit/fe8ad8b)]
* __JavaScript__:
	* Add exponentiation & spread/rest operator ([#991](https://github.com/PrismJS/prism/issues/991)) [[`b2de65a`](https://github.com/PrismJS/prism/commit/b2de65a), [`268d01e`](https://github.com/PrismJS/prism/commit/268d01e)]
* __JSON_:
	* JSON: Fixed issues with properties and strings + added tests. Fix [#1025](https://github.com/PrismJS/prism/issues/1025) [[`25a541d`](https://github.com/PrismJS/prism/commit/25a541d)]
* __Markup__:
	* Allow for dots in Markup tag names, but not in HTML tags included in Textile. Fixes [#888](https://github.com/PrismJS/prism/issues/888). [[`31ea66b`](https://github.com/PrismJS/prism/commit/31ea66b)]
	* Make doctype case-insensitive ([#1009](https://github.com/PrismJS/prism/issues/1009)) [[`3dd7219`](https://github.com/PrismJS/prism/commit/3dd7219)]
* __NSIS__:
	* Updated patterns ([#1032](https://github.com/PrismJS/prism/issues/1032)) [[`76ba1b8`](https://github.com/PrismJS/prism/commit/76ba1b8)]
* __PHP__:
	* Make comments greedy. Fix [#197](https://github.com/PrismJS/prism/issues/197) [[`318aab3`](https://github.com/PrismJS/prism/commit/318aab3)]
* __PowerShell__:
	* Fix highlighting of empty comments ([#977](https://github.com/PrismJS/prism/issues/977)) [[`4fda477`](https://github.com/PrismJS/prism/commit/4fda477)]
* __Puppet__:
	* Fix over-greedy regexp detection ([#978](https://github.com/PrismJS/prism/issues/978)) [[`105be25`](https://github.com/PrismJS/prism/commit/105be25)]
* __Ruby__:
	* Fix typo `Fload` to `Float` in prism-ruby.js ([#1023](https://github.com/PrismJS/prism/issues/1023)) [[`22cb018`](https://github.com/PrismJS/prism/commit/22cb018)]
	* Make strings greedy. Fixes [#1048](https://github.com/PrismJS/prism/issues/1048) [[`8b0520a`](https://github.com/PrismJS/prism/commit/8b0520a)]
* __SCSS__:
	* Alias statement as keyword. Fix [#246](https://github.com/PrismJS/prism/issues/246) [[`fd09391`](https://github.com/PrismJS/prism/commit/fd09391)]
	* Highlight variables inside selectors and properties. [[`d6b5c2f`](https://github.com/PrismJS/prism/commit/d6b5c2f)]
	* Highlight parent selector [[`8f5f1fa`](https://github.com/PrismJS/prism/commit/8f5f1fa)]
* __TypeScript__:
	* Add missing `from` keyword to typescript & set `ts` as alias. ([#1042](https://github.com/PrismJS/prism/issues/1042)) [[`cba78f3`](https://github.com/PrismJS/prism/commit/cba78f3)]

### New plugins

* __Copy to Clipboard__ ([#891](https://github.com/PrismJS/prism/issues/891)) [[`07b81ac`](https://github.com/PrismJS/prism/commit/07b81ac)]
* __Custom Class__ ([#950](https://github.com/PrismJS/prism/issues/950)) [[`a0bd686`](https://github.com/PrismJS/prism/commit/a0bd686)]
* __Data-URI Highlight__ ([#996](https://github.com/PrismJS/prism/issues/996)) [[`bdca61b`](https://github.com/PrismJS/prism/commit/bdca61b)]
* __Toolbar__ ([#891](https://github.com/PrismJS/prism/issues/891)) [[`07b81ac`](https://github.com/PrismJS/prism/commit/07b81ac)]

### Updated plugins

* __Autoloader__:
	* Updated documentation for Autoloader plugin [[`b4f3423`](https://github.com/PrismJS/prism/commit/b4f3423)]
    * Download all grammars as a zip from Autoloader plugin page ([#981](https://github.com/PrismJS/prism/issues/981)) [[`0d0a007`](https://github.com/PrismJS/prism/commit/0d0a007), [`5c815d3`](https://github.com/PrismJS/prism/commit/5c815d3)]
    * Removed duplicated script on Autoloader plugin page [[`9671996`](https://github.com/PrismJS/prism/commit/9671996)]
    * Don't try to load "none" component. Fix [#1000](https://github.com/PrismJS/prism/issues/1000) [[`f89b0b9`](https://github.com/PrismJS/prism/commit/f89b0b9)]
* __WPD__:
	* Fix at-rule detection + don't process if language is not handled [[`2626728`](https://github.com/PrismJS/prism/commit/2626728)]

### Other changes

* Improvement to greedy-flag ([#967](https://github.com/PrismJS/prism/issues/967)) [[`500121b`](https://github.com/PrismJS/prism/commit/500121b), [`9893489`](https://github.com/PrismJS/prism/commit/9893489)]
* Add setTimeout fallback for requestAnimationFrame. Fixes [#987](https://github.com/PrismJS/prism/issues/987). ([#988](https://github.com/PrismJS/prism/issues/988)) [[`c9bdcd3`](https://github.com/PrismJS/prism/commit/c9bdcd3)]
* Added aria-hidden attributes on elements created by the Line Highlight and Line Numbers plugins. Fixes [#574](https://github.com/PrismJS/prism/issues/574). [[`e5587a7`](https://github.com/PrismJS/prism/commit/e5587a7)]
* Don't insert space before ">" when there is no attributes [[`3dc8c9e`](https://github.com/PrismJS/prism/commit/3dc8c9e)]
* Added missing hooks-related tests for AsciiDoc, Groovy, Handlebars, Markup, PHP and Smarty [[`c1a0c1b`](https://github.com/PrismJS/prism/commit/c1a0c1b)]
* Fix issue when using Line numbers plugin and Normalise whitespace plugin together with Handlebars, PHP or Smarty. Fix [#1018](https://github.com/PrismJS/prism/issues/1018), [#997](https://github.com/PrismJS/prism/issues/997), [#935](https://github.com/PrismJS/prism/issues/935). Revert [#998](https://github.com/PrismJS/prism/issues/998). [[`86aa3d2`](https://github.com/PrismJS/prism/commit/86aa3d2)]
* Optimized logo ([#990](https://github.com/PrismJS/prism/issues/990)) ([#1002](https://github.com/PrismJS/prism/issues/1002)) [[`f69e570`](https://github.com/PrismJS/prism/commit/f69e570), [`218fd25`](https://github.com/PrismJS/prism/commit/218fd25)]
* Remove unneeded prefixed CSS ([#989](https://github.com/PrismJS/prism/issues/989)) [[`5e56833`](https://github.com/PrismJS/prism/commit/5e56833)]
* Optimize images ([#1007](https://github.com/PrismJS/prism/issues/1007)) [[`b2fa6d5`](https://github.com/PrismJS/prism/commit/b2fa6d5)]
* Add yarn.lock to .gitignore ([#1035](https://github.com/PrismJS/prism/issues/1035)) [[`03ecf74`](https://github.com/PrismJS/prism/commit/03ecf74)]
* Fix greedy flag bug. Fixes [#1039](https://github.com/PrismJS/prism/issues/1039) [[`32cd99f`](https://github.com/PrismJS/prism/commit/32cd99f)]
* Ruby: Fix test after [#1023](https://github.com/PrismJS/prism/issues/1023) [[`b15d43b`](https://github.com/PrismJS/prism/commit/b15d43b)]
* Ini: Fix test after [#1047](https://github.com/PrismJS/prism/issues/1047) [[`25cdd3f`](https://github.com/PrismJS/prism/commit/25cdd3f)]
* Reduce risk of XSS ([#1051](https://github.com/PrismJS/prism/issues/1051)) [[`17e33bc`](https://github.com/PrismJS/prism/commit/17e33bc)]
* env.code can be modified by before-sanity-check hook even when using language-none. Fix [#1066](https://github.com/PrismJS/prism/issues/1066) [[`83bafbd`](https://github.com/PrismJS/prism/commit/83bafbd)]


## 1.5.1 (2016-06-05)

### Updated components

* __Normalize Whitespace__:
	* Add class that disables the normalize whitespace plugin [[`9385c54`](https://github.com/PrismJS/prism/commit/9385c54)]
* __JavaScript Language__:
	* Rearrange the `string` and `template-string` token in JavaScript [[`1158e46`](https://github.com/PrismJS/prism/commit/1158e46)]
* __SQL Language__:
	* add delimeter and delimeters keywords to sql ([#958](https://github.com/PrismJS/prism/pull/958)) [[`a9ef24e`](https://github.com/PrismJS/prism/commit/a9ef24e)]
	* add AUTO_INCREMENT and DATE keywords to sql ([#954](https://github.com/PrismJS/prism/pull/954)) [[`caea2af`](https://github.com/PrismJS/prism/commit/caea2af)]
* __Diff Language__:
	* Highlight diff lines with only + or - ([#952](https://github.com/PrismJS/prism/pull/952)) [[`4d0526f`](https://github.com/PrismJS/prism/commit/4d0526f)]

### Other changes

* Allow for asynchronous loading of prism.js ([#959](https://github.com/PrismJS/prism/pull/959))
* Use toLowerCase on language names ([#957](https://github.com/PrismJS/prism/pull/957)) [[`acd9508`](https://github.com/PrismJS/prism/commit/acd9508)]
* link to index for basic usage - fixes [#945](https://github.com/PrismJS/prism/issues/945) ([#946](https://github.com/PrismJS/prism/pull/946)) [[`6c772d8`](https://github.com/PrismJS/prism/commit/6c772d8)]
* Fixed monospace typo ([#953](https://github.com/PrismJS/prism/pull/953)) [[`e6c3498`](https://github.com/PrismJS/prism/commit/e6c3498)]

## 1.5.0 (2016-05-01)

### New components

* __Bro Language__ ([#925](https://github.com/PrismJS/prism/pull/925))
* __Protocol Buffers Language__ ([#938](https://github.com/PrismJS/prism/pull/938)) [[`ae4a4f2`](https://github.com/PrismJS/prism/commit/ae4a4f2)]

### Updated components

* __Keep Markup__:
	* Fix Keep Markup plugin incorrect highlighting ([#880](https://github.com/PrismJS/prism/pull/880)) [[`24841ef`](https://github.com/PrismJS/prism/commit/24841ef)]
* __Groovy Language__:
	* Fix double HTML-encoding bug in Groovy language [[`24a0936`](https://github.com/PrismJS/prism/commit/24a0936)]
* __Java Language__:
	* Adding annotation token for Java ([#905](https://github.com/PrismJS/prism/pull/905)) [[`367ace6`](https://github.com/PrismJS/prism/commit/367ace6)]
* __SAS Language__:
	* Add missing keywords for SAS ([#922](https://github.com/PrismJS/prism/pull/922))
* __YAML Language__:
	* fix hilighting of YAML keys on first line of code block ([#943](https://github.com/PrismJS/prism/pull/943)) [[`f19db81`](https://github.com/PrismJS/prism/commit/f19db81)]
* __C# Language__:
	* Support for generic methods in csharp [[`6f75735`](https://github.com/PrismJS/prism/commit/6f75735)]

### New plugins

* __Unescaped Markup__ [[`07d77e5`](https://github.com/PrismJS/prism/commit/07d77e5)]
* __Normalize Whitespace__ ([#847](https://github.com/PrismJS/prism/pull/847)) [[`e86ec01`](https://github.com/PrismJS/prism/commit/e86ec01)]

### Other changes

* Add JSPM support [[`ad048ab`](https://github.com/PrismJS/prism/commit/ad048ab)]
* update linear-gradient syntax from `left` to `to right` [[`cd234dc`](https://github.com/PrismJS/prism/commit/cd234dc)]
* Add after-property to allow ordering of plugins [[`224b7a1`](https://github.com/PrismJS/prism/commit/224b7a1)]
* Partial solution for the "Comment-like substrings"-problem [[`2705c50`](https://github.com/PrismJS/prism/commit/2705c50)]
* Add property 'aliasTitles' to components.js [[`54400fb`](https://github.com/PrismJS/prism/commit/54400fb)]
* Add before-highlightall hook [[`70a8602`](https://github.com/PrismJS/prism/commit/70a8602)]
* Fix catastrophic backtracking regex issues in JavaScript [[`ab65be2`](https://github.com/PrismJS/prism/commit/ab65be2)]

## 1.4.1 (2016-02-03)

### Other changes

* Fix DFS bug in Prism core [[`b86c727`](https://github.com/PrismJS/prism/commit/b86c727)]

## 1.4.0 (2016-02-03)

### New components

* __Solarized Light__ ([#855](https://github.com/PrismJS/prism/pull/855)) [[`70846ba`](https://github.com/PrismJS/prism/commit/70846ba)]
* __JSON__ ([#370](https://github.com/PrismJS/prism/pull/370)) [[`ad2fcd0`](https://github.com/PrismJS/prism/commit/ad2fcd0)]

### Updated components

* __Show Language__:
	* Remove data-language attribute ([#840](https://github.com/PrismJS/prism/pull/840)) [[`eb9a83c`](https://github.com/PrismJS/prism/commit/eb9a83c)]
	* Allow custom label without a language mapping ([#837](https://github.com/PrismJS/prism/pull/837)) [[`7e74aef`](https://github.com/PrismJS/prism/commit/7e74aef)]
* __JSX__:
	* Better Nesting in JSX attributes ([#842](https://github.com/PrismJS/prism/pull/842)) [[`971dda7`](https://github.com/PrismJS/prism/commit/971dda7)]
* __File Highlight__:
	* Defer File Highlight until the full DOM has loaded. ([#844](https://github.com/PrismJS/prism/pull/844)) [[`6f995ef`](https://github.com/PrismJS/prism/commit/6f995ef)]
* __Coy Theme__:
	* Fix coy theme shadows ([#865](https://github.com/PrismJS/prism/pull/865)) [[`58d2337`](https://github.com/PrismJS/prism/commit/58d2337)]
* __Show Invisibles__:
	* Ensure show-invisibles compat with autoloader ([#874](https://github.com/PrismJS/prism/pull/874)) [[`c3cfb1f`](https://github.com/PrismJS/prism/commit/c3cfb1f)]
	* Add support for the space character for the show-invisibles plugin ([#876](https://github.com/PrismJS/prism/pull/876)) [[`05442d3`](https://github.com/PrismJS/prism/commit/05442d3)]

### New plugins

* __Command Line__ ([#831](https://github.com/PrismJS/prism/pull/831)) [[`8378906`](https://github.com/PrismJS/prism/commit/8378906)]

### Other changes

* Use document.currentScript instead of document.getElementsByTagName() [[`fa98743`](https://github.com/PrismJS/prism/commit/fa98743)]
* Add prefix for Firefox selection and move prefixed rule first [[`6d54717`](https://github.com/PrismJS/prism/commit/6d54717)]
* No background for `<code>` in `<pre>` [[`8c310bc`](https://github.com/PrismJS/prism/commit/8c310bc)]
* Fixing to initial copyright year [[`69cbf7a`](https://github.com/PrismJS/prism/commit/69cbf7a)]
* Simplify the “lang” regex [[`417f54a`](https://github.com/PrismJS/prism/commit/417f54a)]
* Fix broken heading links [[`a7f9e62`](https://github.com/PrismJS/prism/commit/a7f9e62)]
* Prevent infinite recursion in DFS [[`02894e1`](https://github.com/PrismJS/prism/commit/02894e1)]
* Fix incorrect page title [[`544b56f`](https://github.com/PrismJS/prism/commit/544b56f)]
* Link scss to webplatform wiki [[`08d979a`](https://github.com/PrismJS/prism/commit/08d979a)]
* Revert white-space to normal when code is inline instead of in a pre [[`1a971b5`](https://github.com/PrismJS/prism/commit/1a971b5)]

## 1.3.0 (2015-10-26)

### New components

* __AsciiDoc__ ([#800](https://github.com/PrismJS/prism/issues/800)) [[`6803ca0`](https://github.com/PrismJS/prism/commit/6803ca0)]
* __Haxe__ ([#811](https://github.com/PrismJS/prism/issues/811)) [[`bd44341`](https://github.com/PrismJS/prism/commit/bd44341)]
* __Icon__ ([#803](https://github.com/PrismJS/prism/issues/803)) [[`b43c5f3`](https://github.com/PrismJS/prism/commit/b43c5f3)]
* __Kotlin ([#814](https://github.com/PrismJS/prism/issues/814)) [[`e8a31a5`](https://github.com/PrismJS/prism/commit/e8a31a5)]
* __Lua__ ([#804](https://github.com/PrismJS/prism/issues/804)) [[`a36bc4a`](https://github.com/PrismJS/prism/commit/a36bc4a)]
* __Nix__ ([#795](https://github.com/PrismJS/prism/issues/795)) [[`9b275c8`](https://github.com/PrismJS/prism/commit/9b275c8)]
* __Oz__ ([#805](https://github.com/PrismJS/prism/issues/805)) [[`388c53f`](https://github.com/PrismJS/prism/commit/388c53f)]
* __PARI/GP__ ([#802](https://github.com/PrismJS/prism/issues/802)) [[`253c035`](https://github.com/PrismJS/prism/commit/253c035)]
* __Parser__ ([#808](https://github.com/PrismJS/prism/issues/808)) [[`a953b3a`](https://github.com/PrismJS/prism/commit/a953b3a)]
* __Puppet__ ([#813](https://github.com/PrismJS/prism/issues/813)) [[`81933ee`](https://github.com/PrismJS/prism/commit/81933ee)]
* __Roboconf__ ([#812](https://github.com/PrismJS/prism/issues/812)) [[`f5db346`](https://github.com/PrismJS/prism/commit/f5db346)]

### Updated components

* __C__:
	* Highlight directives in preprocessor lines ([#801](https://github.com/PrismJS/prism/issues/801)) [[`ad316a3`](https://github.com/PrismJS/prism/commit/ad316a3)]
* __C#__:
	* Highlight directives in preprocessor lines ([#801](https://github.com/PrismJS/prism/issues/801)) [[`ad316a3`](https://github.com/PrismJS/prism/commit/ad316a3)]
	* Fix detection of float numbers ([#806](https://github.com/PrismJS/prism/issues/806)) [[`1dae72b`](https://github.com/PrismJS/prism/commit/1dae72b)]
* __F#__:
	* Highlight directives in preprocessor lines ([#801](https://github.com/PrismJS/prism/issues/801)) [[`ad316a3`](https://github.com/PrismJS/prism/commit/ad316a3)]
* __JavaScript__:
	* Highlight true and false as booleans ([#801](https://github.com/PrismJS/prism/issues/801)) [[`ad316a3`](https://github.com/PrismJS/prism/commit/ad316a3)]
* __Python__:
	* Highlight triple-quoted strings before comments. Fix [#815](https://github.com/PrismJS/prism/issues/815) [[`90fbf0b`](https://github.com/PrismJS/prism/commit/90fbf0b)]

### New plugins

* __Previewer: Time__ ([#790](https://github.com/PrismJS/prism/issues/790)) [[`88173de`](https://github.com/PrismJS/prism/commit/88173de)]
* __Previewer: Angle__ ([#791](https://github.com/PrismJS/prism/issues/791)) [[`a434c86`](https://github.com/PrismJS/prism/commit/a434c86)]

### Other changes

* Increase mocha's timeout [[`f1c41db`](https://github.com/PrismJS/prism/commit/f1c41db)]
* Prevent most errors in IE8. Fix [#9](https://github.com/PrismJS/prism/issues/9) [[`9652d75`](https://github.com/PrismJS/prism/commit/9652d75)]
* Add U.S. Web Design Standards on homepage. Fix [#785](https://github.com/PrismJS/prism/issues/785) [[`e10d48b`](https://github.com/PrismJS/prism/commit/e10d48b), [`79ebbf8`](https://github.com/PrismJS/prism/commit/79ebbf8), [`2f7088d`](https://github.com/PrismJS/prism/commit/2f7088d)]
* Added gulp task to autolink PRs and commits in changelog [[`5ec4e4d`](https://github.com/PrismJS/prism/commit/5ec4e4d)]
* Use child processes to run each set of tests, in order to deal with the memory leak in vm.runInNewContext() [[`9a4b6fa`](https://github.com/PrismJS/prism/commit/9a4b6fa)]

## 1.2.0 (2015-10-07)

### New components

* __Batch__ ([#781](https://github.com/PrismJS/prism/issues/781)) [[`eab5b06`](https://github.com/PrismJS/prism/commit/eab5b06)]

### Updated components

* __ASP.NET__:
	* Simplified pattern for `<script>` [[`29643f4`](https://github.com/PrismJS/prism/issues/29643f4)]
* __Bash__:
	* Fix regression in strings ([#792](https://github.com/PrismJS/prism/issues/792)) [[`bd275c2`](https://github.com/PrismJS/prism/commit/bd275c2)]
	* Substantially reduce wrongly highlighted stuff ([#793](https://github.com/PrismJS/prism/issues/793)) [[`ac6fe2e`](https://github.com/PrismJS/prism/commit/ac6fe2e)]
* __CSS__:
	* Simplified pattern for `<style>` [[`29643f4`](https://github.com/PrismJS/prism/issues/29643f4)]
* __JavaScript__:
	* Simplified pattern for `<script>` [[`29643f4`](https://github.com/PrismJS/prism/issues/29643f4)]

### New plugins

* __Previewer: Gradient__ ([#783](https://github.com/PrismJS/prism/issues/783)) [[`9a63483`](https://github.com/PrismJS/prism/commit/9a63483)]

### Updated plugins

* __Previewer: Color__
	* Add support for Sass variables [[`3a1fb04`](https://github.com/PrismJS/prism/commit/3a1fb04)]

* __Previewer: Easing__
	* Add support for Sass variables [[`7c7ab4e`](https://github.com/PrismJS/prism/commit/7c7ab4e)]

### Other changes

* Test runner: Allow to run tests for only some languages [[`5ade8a5`](https://github.com/PrismJS/prism/issues/5ade8a5)]
* Download page: Fixed wrong components order raising error in generated file ([#797](https://github.com/PrismJS/prism/issues/787)) [[`7a6aed8`](https://github.com/PrismJS/prism/commit/7a6aed8)]

## 1.1.0 (2015-10-04)

### New components

* __ABAP__ ([#636](https://github.com/PrismJS/prism/issues/636)) [[`75b0328`](https://github.com/PrismJS/prism/commit/75b0328), [`0749129`](https://github.com/PrismJS/prism/commit/0749129)]
* __APL__ ([#308](https://github.com/PrismJS/prism/issues/308)) [[`1f45942`](https://github.com/PrismJS/prism/commit/1f45942), [`33a295f`](https://github.com/PrismJS/prism/commit/33a295f)]
* __AutoIt__ ([#771](https://github.com/PrismJS/prism/issues/771)) [[`211a41c`](https://github.com/PrismJS/prism/commit/211a41c)]
* __BASIC__ ([#620](https://github.com/PrismJS/prism/issues/620)) [[`805a0ce`](https://github.com/PrismJS/prism/commit/805a0ce)]
* __Bison__ ([#764](https://github.com/PrismJS/prism/issues/764)) [[`7feb135`](https://github.com/PrismJS/prism/commit/7feb135)]
* __Crystal__ ([#780](https://github.com/PrismJS/prism/issues/780)) [[`5b473de`](https://github.com/PrismJS/prism/commit/5b473de), [`414848d`](https://github.com/PrismJS/prism/commit/414848d)]
* __D__ ([#613](https://github.com/PrismJS/prism/issues/613)) [[`b5e741c`](https://github.com/PrismJS/prism/commit/b5e741c)]
* __Diff__ ([#450](https://github.com/PrismJS/prism/issues/450)) [[`ef41c74`](https://github.com/PrismJS/prism/commit/ef41c74)]
* __Docker__ ([#576](https://github.com/PrismJS/prism/issues/576)) [[`e808352`](https://github.com/PrismJS/prism/commit/e808352)]
* __Elixir__ ([#614](https://github.com/PrismJS/prism/issues/614)) [[`a1c028c`](https://github.com/PrismJS/prism/commit/a1c028c), [`c451611`](https://github.com/PrismJS/prism/commit/c451611), [`2e637f0`](https://github.com/PrismJS/prism/commit/2e637f0), [`ccb6566`](https://github.com/PrismJS/prism/commit/ccb6566)]
* __GLSL__ ([#615](https://github.com/PrismJS/prism/issues/615)) [[`247da05`](https://github.com/PrismJS/prism/commit/247da05)]
* __Inform 7__ ([#616](https://github.com/PrismJS/prism/issues/616)) [[`d2595b4`](https://github.com/PrismJS/prism/commit/d2595b4)]
* __J__ ([#623](https://github.com/PrismJS/prism/issues/623)) [[`0cc50b2`](https://github.com/PrismJS/prism/commit/0cc50b2)]
* __MEL__ ([#618](https://github.com/PrismJS/prism/issues/618)) [[`8496c14`](https://github.com/PrismJS/prism/commit/8496c14)]
* __Mizar__ ([#619](https://github.com/PrismJS/prism/issues/619)) [[`efde61d`](https://github.com/PrismJS/prism/commit/efde61d)]
* __Monkey__ ([#621](https://github.com/PrismJS/prism/issues/621)) [[`fdd4a3c`](https://github.com/PrismJS/prism/commit/fdd4a3c)]
* __nginx__ ([#776](https://github.com/PrismJS/prism/issues/776)) [[`dc4fc19`](https://github.com/PrismJS/prism/commit/dc4fc19), [`e62c88e`](https://github.com/PrismJS/prism/commit/e62c88e)]
* __Nim__ ([#622](https://github.com/PrismJS/prism/issues/622)) [[`af9c49a`](https://github.com/PrismJS/prism/commit/af9c49a)]
* __OCaml__ ([#628](https://github.com/PrismJS/prism/issues/628)) [[`556c04d`](https://github.com/PrismJS/prism/commit/556c04d)]
* __Processing__ ([#629](https://github.com/PrismJS/prism/issues/629)) [[`e47087b`](https://github.com/PrismJS/prism/commit/e47087b)]
* __Prolog__ ([#630](https://github.com/PrismJS/prism/issues/630)) [[`dd04c32`](https://github.com/PrismJS/prism/commit/dd04c32)]
* __Pure__ ([#626](https://github.com/PrismJS/prism/issues/626)) [[`9c276ab`](https://github.com/PrismJS/prism/commit/9c276ab)]
* __Q__ ([#624](https://github.com/PrismJS/prism/issues/624)) [[`c053c9e`](https://github.com/PrismJS/prism/commit/c053c9e)]
* __Qore__ [[`125e91f`](https://github.com/PrismJS/prism/commit/125e91f)]
* __Tcl__ [[`a3e751a`](https://github.com/PrismJS/prism/commit/a3e751a), [`11ff829`](https://github.com/PrismJS/prism/commit/11ff829)]
* __Textile__ ([#544](https://github.com/PrismJS/prism/issues/544)) [[`d0c6764`](https://github.com/PrismJS/prism/commit/d0c6764)]
* __Verilog__ ([#640](https://github.com/PrismJS/prism/issues/640)) [[`44a11c2`](https://github.com/PrismJS/prism/commit/44a11c2), [`795eb99`](https://github.com/PrismJS/prism/commit/795eb99)]
* __Vim__ [[`69ea994`](https://github.com/PrismJS/prism/commit/69ea994)]

### Updated components

* __Bash__:
	* Add support for Here-Documents ([#787](https://github.com/PrismJS/prism/issues/787)) [[`b57a096`](https://github.com/PrismJS/prism/commit/b57a096)]
	* Remove C-like dependency ([#789](https://github.com/PrismJS/prism/issues/789)) [[`1ab4619`](https://github.com/PrismJS/prism/commit/1ab4619)]
* __C__:
	* Fixed numbers [[`4d64d07`](https://github.com/PrismJS/prism/commit/4d64d07), [`071c3dd`](https://github.com/PrismJS/prism/commit/071c3dd)]
* __C-like__:
	* Add word boundary before class-name prefixes [[`aa757f6`](https://github.com/PrismJS/prism/commit/aa757f6)]
	* Improved operator regex + add != and !== [[`135ee9d`](https://github.com/PrismJS/prism/commit/135ee9d)]
	* Optimized string regexp [[`792e35c`](https://github.com/PrismJS/prism/commit/792e35c)]
* __F#__:
	* Fixed keywords containing exclamation mark [[`09f2005`](https://github.com/PrismJS/prism/commit/09f2005)]
	* Improved string pattern [[`0101c89`](https://github.com/PrismJS/prism/commit/0101c89)]
	* Insert preprocessor before keyword + don't allow line feeds before # [[`fdc9477`](https://github.com/PrismJS/prism/commit/fdc9477)]
	* Fixed numbers [[`0aa0791`](https://github.com/PrismJS/prism/commit/0aa0791)]
* __Gherkin__:
	* Don't allow spaces in tags [[`48ff8b7`](https://github.com/PrismJS/prism/commit/48ff8b7)]
	* Handle \r\n and \r + allow feature alone + don't match blank td/th [[`ce1ec3b`](https://github.com/PrismJS/prism/commit/ce1ec3b)]
* __Git__:
	* Added more examples ([#652](https://github.com/PrismJS/prism/issues/652)) [[`95dc102`](https://github.com/PrismJS/prism/commit/95dc102)]
	* Add support for unified diff. Fixes [#769](https://github.com/PrismJS/prism/issues/769), fixes [#357](https://github.com/PrismJS/prism/issues/357), closes [#401](https://github.com/PrismJS/prism/issues/401) [[`3aadd5d`](https://github.com/PrismJS/prism/commit/3aadd5d)]
* __Go__:
	* Improved operator regexp + removed punctuation from it [[`776ab90`](https://github.com/PrismJS/prism/commit/776ab90)]
* __Haml__:
	* Combine both multiline-comment regexps + handle \r\n and \r [[`f77b40b`](https://github.com/PrismJS/prism/commit/f77b40b)]
	* Handle \r\n and \r in filter regex [[`bbe68ac`](https://github.com/PrismJS/prism/commit/bbe68ac)]
* __Handlebars__:
	* Fix empty strings, add plus sign in exponential notation, improve block pattern and variable pattern [[`c477f9a`](https://github.com/PrismJS/prism/commit/c477f9a)]
	* Properly escape special replacement patterns ($) in Handlebars, PHP and Smarty. Fix [#772](https://github.com/PrismJS/prism/issues/772) [[`895bf46`](https://github.com/PrismJS/prism/commit/895bf46)]
* __Haskell__:
	* Removed useless backslashes and parentheses + handle \r\n and \r + simplify number regexp + fix operator regexp [[`1cc8d8e`](https://github.com/PrismJS/prism/commit/1cc8d8e)]
* __HTTP__:
	* Fix indentation + Add multiline flag for more flexibility + Fix response status + Handle \r\n and \r [[`aaa90f1`](https://github.com/PrismJS/prism/commit/aaa90f1)]
* __Ini__:
	* Fix some regexps + remove unused flags [[`53d5839`](https://github.com/PrismJS/prism/commit/53d5839)]
* __Jade__:
	* Add todo list + remove single-line comment pattern + simplified most patterns with m flag + handle \r\n and \r [[`a79e838`](https://github.com/PrismJS/prism/commit/a79e838)]
* __Java__:
	* Fix number regexp + simplified number regexp and optimized operator regexp [[`21e20b9`](https://github.com/PrismJS/prism/commit/21e20b9)]
* __JavaScript__:
	* JavaScript: Allow for all non-ASCII characters in function names. Fix [#400](https://github.com/PrismJS/prism/issues/400) [[`29e26dc`](https://github.com/PrismJS/prism/commit/29e26dc)]
* __JSX__:
	* Allow for one level of nesting in scripts (Fix [#717](https://github.com/PrismJS/prism/issues/717)) [[`90c75d5`](https://github.com/PrismJS/prism/commit/90c75d5)]
* __Julia__:
	* Simplify comment regexp + improved number regexp + improved operator regexp [[`bcac7d4`](https://github.com/PrismJS/prism/commit/bcac7d4)]
* __Keyman__:
	* Move header statements above keywords [[`23a444c`](https://github.com/PrismJS/prism/commit/23a444c)]
* __LaTeX__:
	* Simplify comment regexp [[`132b41a`](https://github.com/PrismJS/prism/commit/132b41a)]
	* Extend support [[`942a6ec`](https://github.com/PrismJS/prism/commit/942a6ec)]
* __Less__:
	* Remove useless part in property regexp [[`80d8260`](https://github.com/PrismJS/prism/commit/80d8260)]
* __LOLCODE__:
	* Removed useless parentheses [[`8147c9b`](https://github.com/PrismJS/prism/commit/8147c9b)]
* __Makefile__:
	* Add known failures in example [[`e0f8984`](https://github.com/PrismJS/prism/commit/e0f8984)]
	* Handle \r\n in comments and strings + fix "-include" keyword
* __Markup__:
	* Simplify patterns + handle \r\n and \r [[`4c551e8`](https://github.com/PrismJS/prism/commit/4c551e8)]
	* Don't allow = to appear in tag name [[`85d8a55`](https://github.com/PrismJS/prism/commit/85d8a55)]
	* Don't allow dot inside tag name [[`283691e`](https://github.com/PrismJS/prism/commit/283691e)]
* __MATLAB__:
	* Simplify string pattern to remove lookbehind [[`a3cbecc`](https://github.com/PrismJS/prism/commit/a3cbecc)]
* __NASM__:
	* Converted indents to tabs, removed uneeded escapes, added lookbehinds [[`a92e4bd`](https://github.com/PrismJS/prism/commit/a92e4bd)]
* __NSIS__:
	* Simplified patterns [[`bbd83d4`](https://github.com/PrismJS/prism/commit/bbd83d4)]
	* Fix operator regexp [[`44ad8dc`](https://github.com/PrismJS/prism/commit/44ad8dc)]
* __Objective-C__:
	* Simplified regexps + fix strings + handle \r [[`1d33147`](https://github.com/PrismJS/prism/commit/1d33147)]
	* Fix operator regexp [[`e9d382e`](https://github.com/PrismJS/prism/commit/e9d382e)]
* __Pascal__:
	* Simplified regexps [[`c03c8a4`](https://github.com/PrismJS/prism/commit/c03c8a4)]
* __Perl__:
	* Simplified regexps + Made most string and regexp patterns multi-line + Added support for regexp's n flag + Added missing operators [[`71b00cc`](https://github.com/PrismJS/prism/commit/71b00cc)]
* __PHP__:
	* Simplified patterns [[`f9d9452`](https://github.com/PrismJS/prism/commit/f9d9452)]
	* Properly escape special replacement patterns ($) in Handlebars, PHP and Smarty. Fix [#772](https://github.com/PrismJS/prism/issues/772) [[`895bf46`](https://github.com/PrismJS/prism/commit/895bf46)]
* __PHP Extras__:
	* Fix $this regexp + improve global regexp [[`781fdad`](https://github.com/PrismJS/prism/commit/781fdad)]
* __PowerShell__:
	* Update definitions for command/alias/operators [[`14da55c`](https://github.com/PrismJS/prism/commit/14da55c)]
* __Python__:
	* Added async/await and @ operator ([#656](https://github.com/PrismJS/prism/issues/656)) [[`7f1ae75`](https://github.com/PrismJS/prism/commit/7f1ae75)]
	* Added 'self' keyword and support for class names ([#677](https://github.com/PrismJS/prism/issues/677)) [[`d9d4ab2`](https://github.com/PrismJS/prism/commit/d9d4ab2)]
	* Simplified regexps + don't capture where unneeded + fixed operators [[`530f5f0`](https://github.com/PrismJS/prism/commit/530f5f0)]
* __R__:
	* Fixed and simplified patterns [[`c20c3ec`](https://github.com/PrismJS/prism/commit/c20c3ec)]
* __reST__:
	* Simplified some patterns, fixed others, prevented blank comments to match, moved list-bullet down to prevent breaking quotes [[`e6c6b85`](https://github.com/PrismJS/prism/commit/e6c6b85)]
* __Rip__:
	* Fixed some regexp + moved down numbers [[`1093f7d`](https://github.com/PrismJS/prism/commit/1093f7d)]
* __Ruby__:
	* Code cleaning, handle \r\n and \r, fix some regexps [[`dd4989f`](https://github.com/PrismJS/prism/commit/dd4989f)]
	* Add % notations for strings and regexps. Fix [#590](https://github.com/PrismJS/prism/issues/590) [[`2d37800`](https://github.com/PrismJS/prism/commit/2d37800)]
* __Rust__:
	* Simplified patterns and fixed operators [[`6c8494f`](https://github.com/PrismJS/prism/commit/6c8494f)]
* __SAS__:
	* Simplified datalines and optimized operator patterns [[`6ebb96f`](https://github.com/PrismJS/prism/commit/6ebb96f)]
* __Sass__:
	* Add missing require in components [[`35b8c50`](https://github.com/PrismJS/prism/commit/35b8c50)]
	* Fix comments, operators and selectors and simplified patterns [[`28759d0`](https://github.com/PrismJS/prism/commit/28759d0)]
	* Highlight "-" as operator only if surrounded by spaces, in order to not break hyphenated values (e.g. "ease-in-out") [[`b2763e7`](https://github.com/PrismJS/prism/commit/b2763e7)]
* __Scala__:
	* Simplified patterns [[`daf2597`](https://github.com/PrismJS/prism/commit/daf2597)]
* __Scheme__:
	* Add missing lookbehind on number pattern. Fix [#702](https://github.com/PrismJS/prism/issues/702) [[`3120ff7`](https://github.com/PrismJS/prism/commit/3120ff7)]
	* Fixes and simplifications [[`068704a`](https://github.com/PrismJS/prism/commit/068704a)]
	* Don't match content of symbols starting with a parenthesis [[`fa7df08`](https://github.com/PrismJS/prism/commit/fa7df08)]
* __Scss__:
	* Simplified patterns + fixed operators + don't match empty selectors [[`672c167`](https://github.com/PrismJS/prism/commit/672c167)]
* __Smalltalk__:
	* Simplified patterns [[`d896622`](https://github.com/PrismJS/prism/commit/d896622)]
* __Smarty__:
	* Optimized regexps + fixed punctuation and operators [[`1446700`](https://github.com/PrismJS/prism/commit/1446700)]
	* Properly escape special replacement patterns ($) in Handlebars, PHP and Smarty. Fix [#772](https://github.com/PrismJS/prism/issues/772) [[`895bf46`](https://github.com/PrismJS/prism/commit/895bf46)]
* __SQL__:
	* Simplified regexp + fixed keywords and operators + add CHARSET keyword [[`d49fec0`](https://github.com/PrismJS/prism/commit/d49fec0)]
* __Stylus__:
	* Rewrote the component entirely [[`7729728`](https://github.com/PrismJS/prism/commit/7729728)]
* __Swift__:
	* Optimized keywords lists and removed duplicates [[`936e429`](https://github.com/PrismJS/prism/commit/936e429)]
	* Add support for string interpolation. Fix [#448](https://github.com/PrismJS/prism/issues/448) [[`89cd5d0`](https://github.com/PrismJS/prism/commit/89cd5d0)]
* __Twig__:
	* Prevent "other" pattern from matching blank strings [[`cae2cef`](https://github.com/PrismJS/prism/commit/cae2cef)]
	* Optimized regexps + fixed operators + added missing operators/keywords [[`2d8271f`](https://github.com/PrismJS/prism/commit/2d8271f)]
* __VHDL__:
	* Move operator overloading before strings, don't capture if not needed, handle \r\n and \r, fix numbers [[`4533f17`](https://github.com/PrismJS/prism/commit/4533f17)]
* __Wiki markup__:
	* Fixed emphasis + merged some url patterns + added TODOs [[`8cf9e6a`](https://github.com/PrismJS/prism/commit/8cf9e6a)]
* __YAML__:
	* Handled \r\n and \r, simplified some patterns, fixed "---" [[`9e33e0a`](https://github.com/PrismJS/prism/commit/9e33e0a)]

### New plugins

* __Autoloader__ ([#766](https://github.com/PrismJS/prism/issues/766)) [[`ed4ccfe`](https://github.com/PrismJS/prism/commit/ed4ccfe)]
* __JSONP Highlight__ [[`b2f14d9`](https://github.com/PrismJS/prism/commit/b2f14d9)]
* __Keep Markup__ ([#770](https://github.com/PrismJS/prism/issues/770)) [[`bd3e9ea`](https://github.com/PrismJS/prism/commit/bd3e9ea)]
* __Previewer: Base__ ([#767](https://github.com/PrismJS/prism/issues/767)) [[`cf764c0`](https://github.com/PrismJS/prism/commit/cf764c0)]
* __Previewer: Color__ ([#767](https://github.com/PrismJS/prism/issues/767)) [[`cf764c0`](https://github.com/PrismJS/prism/commit/cf764c0)]
* __Previewer: Easing__ ([#773](https://github.com/PrismJS/prism/issues/773)) [[`513137c`](https://github.com/PrismJS/prism/commit/513137c), [`9207258`](https://github.com/PrismJS/prism/commit/9207258), [`4303c94`](https://github.com/PrismJS/prism/commit/4303c94)]
* __Remove initial line feed__ [[`ed9f2b2`](https://github.com/PrismJS/prism/commit/ed9f2b2), [`b8d098e`](https://github.com/PrismJS/prism/commit/b8d098e)]

### Updated plugins

* __Autolinker__:
	* Don't process all grammars on load, process each one in before-highlight. Should fix [#760](https://github.com/PrismJS/prism/issues/760) [[`a572495`](https://github.com/PrismJS/prism/commit/a572495)]
* __Line Highlight__:
	* Run in `complete` hook [[`f237e67`](https://github.com/PrismJS/prism/commit/f237e67)]
	* Fixed position when font-size is odd ([#668](https://github.com/PrismJS/prism/issues/668)) [[`86bbd4c`](https://github.com/PrismJS/prism/commit/86bbd4c), [`8ed7ce3`](https://github.com/PrismJS/prism/commit/8ed7ce3)]
* __Line Numbers__:
	* Run in `complete` hook [[`3f4d918`](https://github.com/PrismJS/prism/commit/3f4d918)]
	* Don't run if already exists [[`c89bbdb`](https://github.com/PrismJS/prism/commit/c89bbdb)]
	* Don't run if block is empty. Fix [#669](https://github.com/PrismJS/prism/issues/669) [[`ee463e8`](https://github.com/PrismJS/prism/commit/ee463e8)]
	* Correct calculation for number of lines (fix [#385](https://github.com/PrismJS/prism/issues/385)) [[`14f3f80`](https://github.com/PrismJS/prism/commit/14f3f80)]
	* Fix computation of line numbers for single-line code blocks. Fix [#721](https://github.com/PrismJS/prism/issues/721) [[`02b220e`](https://github.com/PrismJS/prism/commit/02b220e)]
	* Fixing word wrap on long code lines [[`56b3d29`](https://github.com/PrismJS/prism/commit/56b3d29)]
	* Fixing coy theme + line numbers plugin overflowing on long blocks of text ([#762](https://github.com/PrismJS/prism/issues/762)) [[`a0127eb`](https://github.com/PrismJS/prism/commit/a0127eb)]
* __Show Language__:
	* Add gulp task to build languages map in Show language plugin (Fix [#671](https://github.com/PrismJS/prism/issues/671)) [[`39bd827`](https://github.com/PrismJS/prism/commit/39bd827)]
	* Add reset styles to prevent bug in Coy theme ([#703](https://github.com/PrismJS/prism/issues/703)) [[`08dd500`](https://github.com/PrismJS/prism/commit/08dd500)]

### Other changes

* Fixed link to David Peach article ([#647](https://github.com/PrismJS/prism/issues/647)) [[`3f679f8`](https://github.com/PrismJS/prism/commit/3f679f8)]
* Added `complete` hook, which runs even when no grammar is found [[`e58b6c0`](https://github.com/PrismJS/prism/commit/e58b6c0), [`fd54995`](https://github.com/PrismJS/prism/commit/fd54995)]
* Added test suite runner ([#588](https://github.com/PrismJS/prism/issues/588)) [[`956cd85`](https://github.com/PrismJS/prism/commit/956cd85)]
* Added tests for every components
* Added `.gitattributes` to prevent line ending changes in test files [[`45ca8c8`](https://github.com/PrismJS/prism/commit/45ca8c8)]
* Split plugins into 3 columns on Download page [[`a88936a`](https://github.com/PrismJS/prism/commit/a88936a)]
* Removed comment in components.js to make it easier to parse as JSON ([#679](https://github.com/PrismJS/prism/issues/679)) [[`2cb1326`](https://github.com/PrismJS/prism/commit/2cb1326)]
* Updated README.md [[`1388256`](https://github.com/PrismJS/prism/commit/1388256)]
* Updated documentation since the example was not relevant any more [[`80aedb2`](https://github.com/PrismJS/prism/commit/80aedb2)]
* Fixed inline style for Coy theme [[`52829b3`](https://github.com/PrismJS/prism/commit/52829b3)]
* Prevent errors in nodeJS ([#754](https://github.com/PrismJS/prism/issues/754)) [[`9f5c93c`](https://github.com/PrismJS/prism/commit/9f5c93c), [`0356c58`](https://github.com/PrismJS/prism/commit/0356c58)]
* Explicitly make the Worker close itself after highlighting, so that users have control on this behaviour when directly using Prism inside a Worker. Fix [#492](https://github.com/PrismJS/prism/issues/492) [[`e42a228`](https://github.com/PrismJS/prism/commit/e42a228)]
* Added some language aliases: js for javascript, xml, html, mathml and svg for markup [[`2f9fe1e`](https://github.com/PrismJS/prism/commit/2f9fe1e)]
* Download page: Add a "Select all" checkbox ([#561](https://github.com/PrismJS/prism/issues/561)) [[`9a9020b`](https://github.com/PrismJS/prism/commit/9a9020b)]
* Download page: Don't add semicolon unless needed in generated code. Fix [#273](https://github.com/PrismJS/prism/issues/273) [[`5a5eec5`](https://github.com/PrismJS/prism/commit/5a5eec5)]
* Add language counter on homepage [[`889cda5`](https://github.com/PrismJS/prism/commit/889cda5)]
* Improve performance by doing more work in the worker [[`1316abc`](https://github.com/PrismJS/prism/commit/1316abc)]
* Replace Typeplate with SitePoint on homepage. Fix [#774](https://github.com/PrismJS/prism/issues/774) [[`0c54308`](https://github.com/PrismJS/prism/commit/0c54308)]
* Added basic `.editorconfig` [[`c48f55d`](https://github.com/PrismJS/prism/commit/c48f55d)]

---

## 1.0.1 (2015-07-26)

### New components

* __Brainfuck__ ([#611](https://github.com/PrismJS/prism/issues/611)) [[`3ede718`](https://github.com/PrismJS/prism/commit/3ede718)]
* __Keyman__ ([#609](https://github.com/PrismJS/prism/issues/609)) [[`2698f82`](https://github.com/PrismJS/prism/commit/2698f82), [`e9936c6`](https://github.com/PrismJS/prism/commit/e9936c6)]
* __Makefile__ ([#610](https://github.com/PrismJS/prism/issues/610)) [[`3baa61c`](https://github.com/PrismJS/prism/commit/3baa61c)]
* __Sass (Sass)__ (fix [#199](https://github.com/PrismJS/prism/issues/199)) [[`b081804`](https://github.com/PrismJS/prism/commit/b081804)]
* __VHDL__ ([#595](https://github.com/PrismJS/prism/issues/595)) [[`43e6157`](https://github.com/PrismJS/prism/commit/43e6157)]

### Updated components

* __ActionScript__:
	* Fix ! operator and add ++ and -- as whole operators [[`6bf0794`](https://github.com/PrismJS/prism/commit/6bf0794)]
	* Fix XML highlighting [[`90257b0`](https://github.com/PrismJS/prism/commit/90257b0)]
	* Update examples to add inline XML [[`2c1626a`](https://github.com/PrismJS/prism/commit/2c1626a), [`3987711`](https://github.com/PrismJS/prism/commit/3987711)]
* __Apache Configuration__:
	* Don't include the spaces in directive-inline [[`e87efd8`](https://github.com/PrismJS/prism/commit/e87efd8)]
* __AppleScript__:
	* Allow one level of nesting in block comments [[`65894c5`](https://github.com/PrismJS/prism/commit/65894c5)]
	* Removed duplicates between operators and keywords [[`1ec5a81`](https://github.com/PrismJS/prism/commit/1ec5a81)]
	* Removed duplicates between keywords and classes [[`e8d09f6`](https://github.com/PrismJS/prism/commit/e8d09f6)]
	* Move numbers up so they are not broken by operator pattern [[`66dac31`](https://github.com/PrismJS/prism/commit/66dac31)]
* __ASP.NET__:
	* Prevent Markup tags from breaking ASP tags + fix MasterType directive [[`1f0a336`](https://github.com/PrismJS/prism/commit/1f0a336)]
* __AutoHotkey__:
	* Allow tags (labels) to be highlighted at the end of the code [[`0a1fc4b`](https://github.com/PrismJS/prism/commit/0a1fc4b)]
	* Match all operators + add comma to punctuation [[`f0ccb1b`](https://github.com/PrismJS/prism/commit/f0ccb1b)]
	* Removed duplicates in keywords lists [[`fe0a068`](https://github.com/PrismJS/prism/commit/fe0a068)]
* __Bash__:
	* Simplify comment regex [[`2700981`](https://github.com/PrismJS/prism/commit/2700981)]
	* Removed duplicates in keywords + removed unneeded parentheses [[`903b8a4`](https://github.com/PrismJS/prism/commit/903b8a4)]
* __C__:
	* Removed string pattern (inherited from C-like) [[`dcce1a7`](https://github.com/PrismJS/prism/commit/dcce1a7)]
	* Better support for macro statements [[`4868635`](https://github.com/PrismJS/prism/commit/4868635)]
* __C#__:
	* Fix preprocessor pattern [[`86311f5`](https://github.com/PrismJS/prism/commit/86311f5)]
* __C++__:
	* Removed delete[] and new[] broken keywords [[`42fbeef`](https://github.com/PrismJS/prism/commit/42fbeef)]
* __C-like__:
	* Removed unused 'ignore' pattern [[`b6535dd`](https://github.com/PrismJS/prism/commit/b6535dd)]
	* Use look-ahead instead of inside to match functions [[`d4194c9`](https://github.com/PrismJS/prism/commit/d4194c9)]
* __CoffeeScript__:
	* Prevent strings from ending with a backslash [[`cb6b824`](https://github.com/PrismJS/prism/commit/cb6b824)]
* __CSS__:
	* Highlight parentheses as punctuation [[`cd0273e`](https://github.com/PrismJS/prism/commit/cd0273e)]
	* Improved highlighting of at-rules [[`e254088`](https://github.com/PrismJS/prism/commit/e254088)]
	* Improved URL and strings [[`901812c`](https://github.com/PrismJS/prism/commit/901812c)]
	* Selector regexp should not include last spaces before brace [[`f2e2718`](https://github.com/PrismJS/prism/commit/f2e2718)]
	* Handle \r\n [[`15760e1`](https://github.com/PrismJS/prism/commit/15760e1)]
* __Eiffel__:
	* Fix string patterns order + fix /= operator [[`7d1b8d7`](https://github.com/PrismJS/prism/commit/7d1b8d7)]
* __Erlang__:
	* Fixed quoted functions, quoted atoms, variables and <= operator [[`fa286aa`](https://github.com/PrismJS/prism/commit/fa286aa)]
* __Fortran__:
	* Improved pattern for comments inside strings [[`40ae215`](https://github.com/PrismJS/prism/commit/40ae215)]
	* Fixed order in keyword pattern [[`8a6d32d`](https://github.com/PrismJS/prism/commit/8a6d32d)]
* __Handlebars__:
	* Support blocks with dashes ([#587](https://github.com/PrismJS/prism/issues/587)) [[`f409b13`](https://github.com/PrismJS/prism/commit/f409b13)]
* __JavaScript__:
	* Added support for 'y' and 'u' ES6 JavaScript regex flags ([#596](https://github.com/PrismJS/prism/issues/596)) [[`5d99957`](https://github.com/PrismJS/prism/commit/5d99957)]
	* Added support for missing ES6 keywords in JavaScript ([#596](https://github.com/PrismJS/prism/issues/596)) [[`ca68b87`](https://github.com/PrismJS/prism/commit/ca68b87)]
	* Added `async` and `await` keywords ([#575](https://github.com/PrismJS/prism/issues/575)) [[`5458cec`](https://github.com/PrismJS/prism/commit/5458cec)]
	* Added support for Template strings + interpolation [[`04f72b1`](https://github.com/PrismJS/prism/commit/04f72b1)]
	* Added support for octal and binary numbers ([#597](https://github.com/PrismJS/prism/issues/597)) [[`a8aa058`](https://github.com/PrismJS/prism/commit/a8aa058)]
	* Improve regex performance of C-like strings and JS regexps [[`476cbf4`](https://github.com/PrismJS/prism/commit/476cbf4)]
* __Markup__:
	* Allow non-ASCII chars in tag names and attributes (fix [#585](https://github.com/PrismJS/prism/issues/585)) [[`52fd55e`](https://github.com/PrismJS/prism/commit/52fd55e)]
	* Optimized tag's regexp so that it stops crashing on large unclosed tags [[`75452ba`](https://github.com/PrismJS/prism/commit/75452ba)]
	* Highlight single quotes in attr-value as punctuation [[`1ebcb8e`](https://github.com/PrismJS/prism/commit/1ebcb8e)]
	* Doctype and prolog can be multi-line [[`c19a238`](https://github.com/PrismJS/prism/commit/c19a238)]
* __Python__:
	* Added highlighting for function declaration ([#601](https://github.com/PrismJS/prism/issues/601)) [[`a88aae8`](https://github.com/PrismJS/prism/commit/a88aae8)]
	* Fixed wrong highlighting of variables named a, b, c... f ([#601](https://github.com/PrismJS/prism/issues/601)) [[`a88aae8`](https://github.com/PrismJS/prism/commit/a88aae8)]
* __Ruby__:
	* Added support for string interpolation [[`c36b123`](https://github.com/PrismJS/prism/commit/c36b123)]
* __Scss__:
	* Fixed media queries highlighting [[`bf8e032`](https://github.com/PrismJS/prism/commit/bf8e032)]
	* Improved highlighting inside at-rules [[`eef4248`](https://github.com/PrismJS/prism/commit/eef4248)]
	* Match placeholders inside selectors (fix [#238](https://github.com/PrismJS/prism/issues/238)) [[`4e42e26`](https://github.com/PrismJS/prism/commit/4e42e26)]
* __Swift__:
	* Update keywords list (fix [#625](https://github.com/PrismJS/prism/issues/625)) [[`88f44a7`](https://github.com/PrismJS/prism/commit/88f44a7)]

### Updated plugins

* __File Highlight__:
	* Allow to specify the highlighting language. Fix [#607](https://github.com/PrismJS/prism/issues/607) [[`8030db9`](https://github.com/PrismJS/prism/commit/8030db9)]
* __Line Highlight__:
	* Fixed incorrect height in IE9 ([#604](https://github.com/PrismJS/prism/issues/604)) [[`f1705eb`](https://github.com/PrismJS/prism/commit/f1705eb)]
	* Prevent errors in IE8 [[`5f133c8`](https://github.com/PrismJS/prism/commit/5f133c8)]

### Other changes

* Removed moot `version` property from `bower.json` ([#594](https://github.com/PrismJS/prism/issues/594)) [[`4693499`](https://github.com/PrismJS/prism/commit/4693499)]
* Added repository to `bower.json` ([#600](https://github.com/PrismJS/prism/issues/600)) [[`8e5ebcc`](https://github.com/PrismJS/prism/commit/8e5ebcc)]
* Added `.DS_Store` to `.gitignore` [[`1707e4e`](https://github.com/PrismJS/prism/commit/1707e4e)]
* Improve test drive page usability. Fix [#591](https://github.com/PrismJS/prism/issues/591) [[`fe60858`](https://github.com/PrismJS/prism/commit/fe60858)]
* Fixed prism-core and prism-file-highlight to prevent errors in IE8 [[`5f133c8`](https://github.com/PrismJS/prism/commit/5f133c8)]
* Add Ubuntu Mono font to font stack [[`ed9d7e3`](https://github.com/PrismJS/prism/commit/ed9d7e3)]

---

## 1.0.0 (2015-05-23)

* First release
* Supported languages:
	* ActionScript
	* Apache Configuration
	* AppleScript
	* ASP.NET (C#)
	* AutoHotkey
	* Bash
	* C
	* C#
	* C++
	* C-like
	* CoffeeScript
	* CSS
	* CSS Extras
	* Dart
	* Eiffel
	* Erlang
	* F#
	* Fortran
	* Gherkin
	* Git
	* Go
	* Groovy
	* Haml
	* Handlebars
	* Haskell
	* HTTP
	* Ini
	* Jade
	* Java
	* JavaScript
	* Julia
	* LaTeX
	* Less
	* LOLCODE
	* Markdown
	* Markup
	* MATLAB
	* NASM
	* NSIS
	* Objective-C
	* Pascal
	* Perl
	* PHP
	* PHP Extras
	* PowerShell
	* Python
	* R
	* React JSX
	* reST
	* Rip
	* Ruby
	* Rust
	* SAS
	* Sass (Scss)
	* Scala
	* Scheme
	* Smalltalk
	* Smarty
	* SQL
	* Stylus
	* Swift
	* Twig
	* TypeScript
	* Wiki markup
	* YAML
* Plugins:
	* Autolinker
	* File Highlight
	* Highlight Keywords
	* Line Highlight
	* Line Numbers
	* Show Invisibles
	* Show Language
	* WebPlatform Docs