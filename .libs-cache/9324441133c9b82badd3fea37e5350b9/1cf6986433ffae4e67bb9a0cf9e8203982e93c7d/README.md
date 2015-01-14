# bem-content
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/verybigman/bem-content?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This README also available in [russian](https://github.com/verybigman/bem-content/blob/master/README.ru.md).

Library for work with static content in BEM methodology.

## Dependencies

- `i-bem` block from [bem-core](https//github.com/bem/bem-core)

## Install

Take way like connecting with [bem-core](https//github.com/bem/bem-core)
and [bem-components](https//github.com/bem/bem-components) libraries.
Use [bower-npm-install](https://github.com/arikon/bower-npm-install) to install bem-components from GitHub or Bower register.

Add levels from bem-content to your `make.js` file:

``` javascript
[ 
    // base blocks functionality
	'libs/bem-content/common.blocks',
    // blocks with accessebility templates overriding
    'libs/bem-content/accessebility.blocks'
]
```
## Easy example

Example for heading and paragpaph.

``` javascript
{ block : 'heading', content : 'This is heading of level 1' },
{
    block : 'paragraph',
    content : [
        'Simple text'
    ]
}
```

See more examples in `promo.pages/index/index.bemjson.js` (build it with `bem make`) or on [landing page](http://verybigman.github.io/bem-content).

## Calculating

Lib have block `calc` for calculating fonts sizes. Any sizes writed in rem. It's absolutely right way for fonts. For more info about math model you can watch [here](https://github.com/verybigman/bem-content/blob/master/common.blocks/calc/calc.en.md).

## Customize

Lib very simple to customize. You can configure everything. 
To do this you need create block `variables` on one of levels in your project and override any variable in it. So, list of variables you can watch [here](https://github.com/verybigman/bem-content/blob/master/common.blocks/variables/variables.styl).

### Authors

- Anton Winogradov ([verybigman](https://github.com/verybigman)) @awinogradov

### Ideas

Please, talk about your ideas by GitHub [issues](https://github.com/verybigman/bem-content/issues).

### [MIT](http://en.wikipedia.org/wiki/MIT_License) License
