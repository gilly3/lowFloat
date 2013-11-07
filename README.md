lowFloat
========

A jQuery plugin for floating an element at the bottom left or bottom right corner of some content, with text and other content wrapping around it.

Usage
-----

````javascript
.lowFloat([options]);
````

Include jquery.lowfloat.js on your page (after jQuery).  Call the `lowFloat()` method on a jQuery object containing the element(s) you want to have floated.  Each selected element will display at the bottom right corner of its parent element.

````javascript
$(".bottomRight").lowFloat();
````

![screenshot](right.png)

Float the element to the bottom left corner by setting the `float` option to `"left"`:

````javascript
$(".someElement").lowFloat({ float: "left" });
````

![screenshot](left.png)

Options
-------

Name | Type | Default | Description
---|---|---|---
`float` | string | `"right"` | `"left"` or `"right"` - corresponds to CSS `float` and `clear` properties
`container` | string | `"*"` (the immediate parent) | Selector for the container element for the content.  The container element is found by passing this selector to `.closest()` for the matched element (Actually `$(this).parent().closest(options.container)`). Set this option if your floating element is not a direct child of the content container (the floating element must be a descendant of the container element). The floating element will be prepended to the container element.
`bottomContent` | string | `"> :last-child"` (the last child of container) | Selector for the element that the floating element will line up next to. This must be a descendant of the container. The bottom of the floating element will line up with the bottom of the element that matches this selector. This allows you greater control over the positioning of your floated element.

See [this stackoverflow.com question for background](http://stackoverflow.com/a/19820608/361684)
