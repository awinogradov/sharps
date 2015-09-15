# bem-grid

[![Join the chat at https://gitter.im/bem-incubator/bem-grid](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bem-incubator/bem-grid?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/bem-incubator/bem-grid.svg?branch=master&style=flat)](https://travis-ci.org/bem-incubator/bem-grid)

This README also available in [russian](https://github.com/bem-incubator/bem-grid/blob/master/README.ru.md).

Library for do awesome grid in bem-projects. This grid based on [lost grid](https://github.com/corysimmons/lost).

## Dependencies

- `i-bem` block from [bem-core](https://github.com/bem/bem-core)

## Install

Take way like connecting with [bem-core](https://github.com/bem/bem-core)
and [bem-components](https://github.com/bem/bem-components) libraries.

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

See more examples in `promo.pages/index/index.bemjson.js` (build it with `enb make`) or on [landing page](http://bem-incubator.github.io/bem-grid).

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

## [Customize](https://github.com/bem-incubator/bem-grid/blob/master/.enb/postcss-plugins.js)

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman)) @awinogradov

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/bem-incubator/bem-grid/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
