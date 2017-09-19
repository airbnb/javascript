GitBook Plugin: Collapsible Menu
======================================

GitBook Plugin to change sidebar menu's to collapsible menu. For gitbook with many pages, navigating long menus can get irritating.

## Usage

Update `book.json` file to include `collapsible-menu` plugin.

```
{
    "plugins": ["collapsible-menu"],
}
```

## Troubleshooting

1. If you are not seeing all chapters expanded, then check if your `book.json` is valid. You can use this online tool - [http://json.parser.online.fr/beta/](http://json.parser.online.fr/beta/)
2. Check if you are using default gitbook theme. It is NOT recommended to modify gitbook themes directly
3. Clean your browser cache.
4. Check browser's javascript console for errors.

## How this work?

It hooks into gitbook's `page.change` event. First it hides all pages, and then using `.active` css class show's its parent and grandparent nodes (chapters).

## TODO

Testing with PDF book generation. I hope it won't break.

## Alternatives

Just after publishing this one, I came across - https://github.com/poojan/gitbook-plugin-toggle-chapters

If for some reason this plugin troubles you, you can try other. :-)

## Changelog

**1.0.3 - 31 March 2017**

- Fixed `<script>` tag issue #4 (props @daffl)

**1.0.2 - 20 May 2015**

- Improved active chapter's children visibility

**1.0.1 - 20 May 2015**

- Fixes active chapter's children visibility

**1.0.0 - 20 May 2015**

- Initial release
