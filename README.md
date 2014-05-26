# bem-grid

This README also available in [russian](https://github.com/verybigman/bem-grid/blob/master/README.ru.md).

Library for do awesome grid in bem-projects. This is fork from Zurb Foundation
grid row. You can use it now on BEM notations. Read more about that grid
[here](http://foundation.zurb.com/docs/components/grid.html). And member about this:

``` javascript
.line = .row
.line_col = .columns
```

Grid available for Roole and Sass(scss) preprocessors.

### Dependencies

- i-bem and ua blocks from [bem-core](https//github.com/bem/bem-core)

### Install

Take way like connecting with [bem-bl](https//github.com/bem/bem-bl),
[bem-core](https//github.com/bem/bem-core) and [bem-components](https//github.com/bem/bem-components) libraries.
Use [bower-npm-install](https://github.com/arikon/bower-npm-install) to install bem-grid from
GitHub or Bower register.

Add levels from bem-grid to your make.js file:

``` javascript
[ 'libs/bem-grid/common.blocks' ]
```

### Using

Example for two columns for devices with medium screen. Collapsed on small.

``` javascript
{
    block: 'line',
    content: [
        {
            elem: 'col',
            mods: { dmw: 6 },
            content: [
                'left column'
            ]
        },
        {
            elem: 'col',
            mods: { dmw: 6 },
            content: [
                'right column'
            ]
        }
    ]
}
```

See more examples desktop.examples/index/index.html, use `bem make` for build them.

Useful mods for col element:

- __dlw__ - display large width
- __dmw__ - display medium width
- __dsw__ - display small width

- __dlro__ - display large reset order
- __dmro__ - display medium reset order
- __dsro__ - display small reset order

- __dlo__ - display large offset
- __dmo__ - display medium offset
- __dso__ - display small offset

- __dlph__ - display large push
- __dmph__ - display medium push
- __dsph__ - display small push

- __dlpl__ - display large pull
- __dmpl__ - display medium pull
- __dspl__ - display small pull

- __dlc__ - display large centered
- __dmc__ - display medium centered
- __dsc__ - display small centered

- __dluc__ - display large uncentered
- __dmuc__ - display medium uncentered
- __dsuc__ - display small uncentered

### Autors

- Anton Winogradov ([verybigman](https://github.com/verybigman))

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/bem-grid/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
