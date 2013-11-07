lowFloat
========

A jQuery plugin for floating an element at the bottom left or bottom right corner of some content, with text and other content wrapping around it.

Usage
=====

Include jquery.lowfloat.js on your page after jQuery has been loaded.  Then, call the `lowFloat()` method on a jQuery object containing the element(s) you want to have floated.  The selected elements will display at the bottom right corner of the parent element.

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
=======

Name | Type | Default | Description
---|---|---|---
`float` | string | `"right"` | `"left"` or `"right"` - corresponds to CSS `float` and `clear` properties
`closest` | string | `"*"` | Selector for the container element for the content - Set this option if your floating element is not a direct child of the content container. The floating element will be prepended to the container element.  The floating element must be a descendant of the container element.
