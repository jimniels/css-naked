# `css-naked`

Strip all styles for a given webpage (using client-side JavaScript). Inspired by [css-naked-day](https://css-naked-day.github.io/). Read more in [my CSS Naked blog post](https://blog.jim-nielsen.com/2020/css-naked/)

## Try it

Try this for any site on the web. Load a web page with the query param `?css-naked`, open the console in the browser’s DevTools, and run this dynamic import:

```js
import("https://cdn.jsdelivr.net/gh/jimniels/css-naked@0.1.0/css-naked.js");
```

## Use it

Use this on your site by importing the module in JS:

```js
import "https://cdn.jsdelivr.net/gh/jimniels/css-naked@0.1.0/css-naked.js";
```

Or in HTML:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/jimniels/css-naked@0.1.0/css-naked.js"
></script>
```

Once incorporated, you can toggle the “css-naked mode” by adding the `?css-naked` query param to any page you load. Once triggered, `css-naked` persists your choice as you navigate from page to page. To turn it off, click the link in the injected banner.

## Develop It

To test locally: `python -m SimpleHTTPServer 8000` and open [test.html?css-naked](http://localhost:8000/test.html?css-naked).
