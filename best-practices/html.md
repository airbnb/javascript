---
---

# HTML Style Guide

*Standards for developing flexible, durable, and sustainable HTML*


## Table of Contents

1. [Syntax](#syntax)
2. [HTML5 doctype](#doctype)
3. [Language attribute](#lang)
4. [Character encoding](#encoding)
5. [Internet Explorer compatibility mode](#ie-compatibility-mode)
6. [CSS and JavaScript includes](#style-script)
7. [Practicality over purity](#practicality)
8. [Attribute order](#attribute-order)
9. [Boolean attributes](#boolean-attributes)
10. [Reducing markup](#reducing-markup)


## Golden rule

Enforce these, or your own, agreed upon guidelines at all times. Small or large, call out what's incorrect. Every line of code should appear to be written by a single person, no matter the number of contributors.


## Syntax

- Use tabs (four) to indent your code, never use spaces.
- Nested elements should be indented once for every level.
- Always use double quotes, never single quotes, on attributes.
- Markup should be XHTML valid for easier integration with Teamsite.
- Always include a trailing slash in self-closing elements even if the HTML5 spec says they're optional. HTML should be XHTML valid.
- Don’t omit optional closing tags (e.g. `</li>` or `</body>`).
- Never use IE conditional hacks to include additional style sheets.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>

  <body>
    <img src="images/company-logo.png" alt="Company" />
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```


## HTML5 doctype

Enforce standards mode and more consistent rendering in every browser possible with this simple doctype at the beginning of every HTML page.

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```


## Language attribute

From the HTML5 spec:

> Authors are encouraged to specify a lang attribute on the root html element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.

Read more about the `lang` attribute in the [spec](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element).

Head to Sitepoint for a [list of language codes](http://reference.sitepoint.com/html/lang-codes).

```html
<html lang="en-us">
  <!-- ... -->
</html>
```


## IE compatibility mode

Internet Explorer supports the use of a document compatibility `<meta>` tag to specify what version of IE the page should be rendered as. Unless circumstances require otherwise, it's most useful to instruct IE to use the latest supported mode with **edge mode**.

For more information, [read this awesome Stack Overflow article](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e).

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```


## Character encoding

Quickly and easily ensure proper rendering of your content by declaring an explicit character encoding. When doing so, you may avoid using character entities in your HTML, provided their encoding matches that of the document (generally UTF-8).

```html
<head>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
</head>
```


## CSS and JavaScript includes

Per HTML5 spec, typically there is no need to specify a `type` when including CSS and JavaScript files as `text/css` and `text/javascript` are their respective defaults.

#### HTML5 spec links

- [Using link](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
- [Using style](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
- [Using script](http://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)

```html
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css" />

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```


## Practicality over purity

Strive to maintain HTML standards and semantics, but not at the expense of practicality. Use the least amount of markup with the fewest intricacies whenever possible.


## Attribute order

HTML attributes should come in this particular order for easier reading of code.

- `id`, `name`
- `class`
- `src`, `for`, `type`, `href`, `value`
- `data-*`
- `title`, `alt`
- `aria-*`, `role`

Classes make for great reusable components, so they come first. Ids are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come second.

```html
<a id="..." class="..." href="#" data-toggle="modal">
  Example link
</a>

<input class="form-control" type="text" />

<img src="..." alt="..." />
```


## Boolean attributes

A boolean attribute is one that needs no declared value. XHTML required you to declare a value, but HTML5 has no such requirement.

For further reading, consult the [WhatWG section on boolean attributes](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes):

> The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

Even though the boolean attributes' value is optional, it's recommended that you use the attribute's canonical name as it's value.

```html
<input type="text" disabled="disabled" />

<input type="checkbox" value="1" checked="checked" />

<select>
  <option value="1" selected="selected">1</option>
</select>
```


## Reducing markup

Whenever possible, avoid superfluous parent elements when writing HTML. Many times this requires iteration and refactoring, but produces less HTML. Take the following example:

```html
<!-- Not so great -->
<span class="avatar">
  <img src="..." alt="..." />
</span>

<!-- Better -->
<img class="avatar" src="..." alt="..." />
```
