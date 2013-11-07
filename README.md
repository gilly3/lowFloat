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
`closest` | string | `"*"` (the immediate parent) | Selector for the container element for the content - Set this option if your floating element is not a direct child of the content container. The floating element will be prepended to the container element.  The floating element must be a descendant of the container element.

See [this stackoverflow.com question for background](http://stackoverflow.com/a/19820608/361684)
