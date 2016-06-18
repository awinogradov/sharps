# Sharps

Modular grid powered by [Lost](http://peter.coffee/lost) and [BEM](http://bem.info)

## Usage

The easiest way:

1. `bower install --save sharps`
2. `<link rel="stylesheet" href="./bower_components/sharps/dist/sharps.min.css">`

As plugin for [postcss](https://github.com/postcss/postcss):

1. `npm i --save sharps`
2. Prepend your plugins with `sharps`
``` js
const postcss = require('postcss');
const sharps = require('sharps').postcss;

postcss([sharps({
  columns: 12, // default
  maxWidth: '1100px',
  gutter: '10px',
  flex: 'flex'
})]).process('a {color: red}').then(function(result) {
  console.log(result.css);
});
```

As [ENB](https://github.com/enb-make/enb) module:

1. `npm i --save-dev sharps`
2. Add `sharps` in your ENB config
``` js
[require('sharps').enb, {
  config: {
    columns: 12, // default
    maxWidth: '1100px',
    gutter: '10px',
    flex: 'flex'
  }
}]
```
_**Note:** If you have any css builder, you should change its `target` and add `source` to sharps parameters for preventing conflicts, like this:_

``` js
[techs.stylus, {
  target: '?.no-grid.css', // there is the changed target
  sourcemap: false,
  autoprefixer: {
    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
  }
}],

[require('sharps').enb, {
  config: {
    maxWidth: '1100px',
    gutter: '10px',
    flex: 'flex'
  },
  source: '?.no-grid.css' // there is the source
}]
```

## Easy example

``` html
<div class="row">
    <div class="row__col row__col_mw_6">left column</div>
    <div class="row__col row__col_mw_6">right column</div>
</div>
```

``` javascript
{
  block: 'row',
  content: [
    {
      elem: 'col',
      elemMods: { mw: 6 },
      content: 'left column'
    },
    {
      elem: 'col',
      elemMods: { mw: 6 },
      content: 'right column'
    }
  ]
}
```

## Options

__Useful mods for row block:__

- __(s|m|l|xl|xxl)al__ - align cols to left on needed displays
- __(s|m|l|xl|xxl)ac__ - align cols to center on needed displays
- __(s|m|l|xl|xxl)ar__ - align cols to right on needed displays

- __(s|m|l|xl|xxl)vat__ - align cols vertically to top on needed displays
- __(s|m|l|xl|xxl)vam__ - align cols vertically to middle on needed displays
- __(s|m|l|xl|xxl)vab__ - align cols vertically to bottom on needed displays

__Useful mods for col element:__

- __(s|m|l|xl|xxl)__ - auto width on needed displays
- __(s|m|l|xl|xxl)w__ - width on needed displays, 0 hide col on this device
- __(s|m|l|xl|xxl)o__ - offset on needed displays

- __(s|m|l|xl|xxl)of__ - order first this col on needed displays
- __(s|m|l|xl|xxl)ol__ - order last this col on needed displays

### Authors

- Anton Winogradov ([awinogradov](https://github.com/awinogradov)) @awinogradov

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/bem-contrib/sharps/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
