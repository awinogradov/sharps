# bem-grid 

[![Build Status](https://travis-ci.org/verybigman/bem-grid.svg?branch=master&style=flat)](https://travis-ci.org/verybigman/bem-grid)

This README also available in [russian](https://github.com/verybigman/bem-grid/blob/master/README.ru.md).

Library for do awesome grid in bem-projects. This grid inspired by [Flexbox grid](http://flexboxgrid.com/). Grid available for Stylus only.

## Dependencies

- `i-bem` block from [bem-core](https//github.com/bem/bem-core)

## Install

Take way like connecting with [bem-core](https//github.com/bem/bem-core)
and [bem-components](https//github.com/bem/bem-components) libraries.
Use [bower-npm-install](https://github.com/arikon/bower-npm-install) to install bem-grid from GitHub or Bower register.

Add levels from bem-grid to your `make.js` file:

``` javascript
[ 'libs/bem-grid/common.blocks' ]
```

## Easy example

Example for two columns on devices with medium screen. They will be collapsed on small.

``` javascript
{
    block : 'row',
    content : [
        {
            elem : 'col',
            mods : { mw : 6 },
            content : 'left column'
        },
        {
            elem : 'col',
            mods : { mw : 6 },
            content : 'right column'
        }
    ]
}
```

See more examples in `promo.pages/index/index.bemjson.js` (build it with `bem make`) or on [landing page](http://verybigman.github.io/bem-grid).

## Row

__Useful mods for row block:__

- __(s|m|l|xl|xxl)al__ - align cols to left on needed displays
- __(s|m|l|xl|xxl)ac__ - align cols to center on needed displays
- __(s|m|l|xl|xxl)ar__ - align cols to right on needed displays

- __(s|m|l|xl|xxl)vat__ - align cols verticaly to top on needed displays
- __(s|m|l|xl|xxl)vam__ - align cols verticaly to middle on needed displays
- __(s|m|l|xl|xxl)vab__ - align cols verticaly to bottom on needed displays

__Useful mods for col element:__

- __(s|m|l|xl|xxl)__ - auto width on needed displays
- __(s|m|l|xl|xxl)w__ - width on needed displays, 0 hide col on this device
- __(s|m|l|xl|xxl)o__ - offset on needed displays

- __(s|m|l|xl|xxl)of__ - order first this col on needed displays
- __(s|m|l|xl|xxl)ol__ - order last this col on needed displays

Also `row` have i-bem.js methods for cols manipulating. Read about them [here](https://github.com/verybigman/bem-grid/blob/master/common.blocks/row/_type/row_type_js.browser.js)

## Customize

Grid very simple for customize columns count and media queries.
To do this you need create block `variables` on one of levels in your project and override any variable in it.
So, list of variables you can watch [here](https://github.com/verybigman/bem-grid/blob/master/common.blocks/variables/variables.styl).

### Browsers support

All features work in: IE 10+, FF 25+, Chrome 28+, Safari 7+, Opera 12.1+, iOS 7.1+, Android Browser 4.1+, Chrome for Android 37+. For support old browsers i made `row_flexbox_detect` mod. It will setup automatically `row_flexbox_disabled` on `row` where flexbox's unsupported and create fallback to tables.

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman)) @awinogradov

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/bem-grid/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
