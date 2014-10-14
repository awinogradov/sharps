# bem-grid

This README also available in [russian](https://github.com/verybigman/bem-grid/blob/master/README.ru.md).

Library for do awesome grid in bem-projects. This grid inspired by [Zurb Foundation grid](http://foundation.zurb.com/docs/components/grid.html) and [Flexbox grid](http://flexboxgrid.com/). Grid available for Stylus only.

## Dependencies

- `i-bem` block from [bem-core](https//github.com/bem/bem-core)

## Install

Take way like connecting with [bem-core](https//github.com/bem/bem-core)
and [bem-components](https//github.com/bem/bem-components) libraries.
Use [bower-npm-install](https://github.com/arikon/bower-npm-install) to install bem-grid from GitHub or Bower register.

Add levels from bem-grid to your make.js file:

``` javascript
[ 'libs/bem-grid/common.blocks' ]
```

## Easy example

Example for two columns on devices with medium screen. They will be collapsed on small.

``` javascript
{
    block: 'row',
    content: [
        {
            elem: 'col',
            mods: { mw: 6 },
            content: 'left column'
        },
        {
            elem: 'col',
            mods: { mw: 6 },
            content: 'right column'
        }
    ]
}
```

See more examples in desktop.pages/index/index.bemjson.js (build it with `bem make`) or on [landing page](http://verybigman.github.io/bem-grid).

## Row

__Useful mods for row block:__

- __(s|m|l)al__ - align cols to left on (small | medium | large) displays
- __(s|m|l)ac__ - align cols to center on (small | medium | large) displays
- __(s|m|l)ar__ - align cols to right on (small | medium | large) displays

- __(s|m|l)vat__ - align cols verticaly to top on (small | medium | large) displays
- __(s|m|l)vam__ - align cols verticaly to middle on (small | medium | large) displays
- __(s|m|l)vab__ - align cols verticaly to bottom on (small | medium | large) displays

__Useful mods for col element:__

- __(l|m|s)__ - auto width on (small | medium | large) displays
- __(l|m|s)w__ - width on (small | medium | large) displays, 0 hide col on this device
- __(l|m|s)o__ - offset on (small | medium | large) displays

- __(s|m|l)of__ - order first this col on (small | medium | large) displays
- __(s|m|l)ol__ - order last this col on (small | medium | large) displays

## Customize

Grid very simple for customize. You can configure everything. Ex: base grid width, columns count, media queries, paddings and more.
To do this you need create block __variables__ on one of levels in your project and override any variable in it.
So, list of variables you can watch [here](https://github.com/verybigman/bem-grid/blob/master/common.blocks/variables/variables.styl).

### Browsers support

All features work in: IE 10+, FF 25+, Chrome 28+, Safari 7+, Opera 12.1+, iOS 7.1+, Android Browser 4.1+, Chrome for Android 37+. For support old browsers i made `no-flexbox` mod for `row` block. It will be setup automatically on `row` where flexbox's unsupported and create fallback to tables.

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman)) @awinogradov

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/bem-grid/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
