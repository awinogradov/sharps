# bem-grid

[![Join the chat at https://gitter.im/bem-incubator/bem-grid](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bem-incubator/bem-grid?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/bem-incubator/bem-grid.svg?branch=master&style=flat)](https://travis-ci.org/bem-incubator/bem-grid)

BEM-methodology for [Lost](https://github.com/corysimmons/lost).

## Usage

Like Twitter Bootstrap:

1. `bower install --save bem-grid`
2. `<link type="text/css" rel="stylesheet" href="./bower_components/bem-grid/dist/bem-grid.css">`

As [ENB](https://github.com/enb-make/enb) module:

1. `npm i --save-dev enb-bem-grid`
2. Add `enb-bem-grid` after any css builder
``` js
[require('enb-grid'), {
    config : {
        maxWidth : '1100px',
        gutter : '10px',
        flex : 'flex'
    }
}]
```
Example [config](https://github.com/bem-incubator/bem-grid/blob/master/.enb/make.js#L34-L47) file [ENB](https://github.com/enb-make/enb) with [postcss](https://github.com/postcss/postcss) builder.

## Easy example

``` html
<div class="row">
    <div class="row__col row__col_mw_6">left column</div>
    <div class="row__col row__col_mw_6">right column</div>
</div>
```

``` javascript
// bemjson
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

## Row

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

- Anton Winogradov ([verybigman](https://github.com/verybigman)) @awinogradov

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/bem-incubator/bem-grid/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
