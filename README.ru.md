# bem-grid

Библиотека для описания сеток в проектах, использующих [БЭМ](http://ru.bem.info/) методологию. Cетка создана под влиянием [Zurb Foundation Framework](http://foundation.zurb.com/docs/components/grid.html) и [Flexbox grid](http://flexboxgrid.com/) и полностью написана на Stylus.

## Зависимости

- блок `i-bem` из [bem-core](https//github.com/bem/bem-core)

## Установка

Принцип идентичен подключению библиотек [bem-core](https//github.com/bem/bem-core) и [bem-components](https//github.com/bem/bem-components).
Используйте [bower-npm-install](https://github.com/arikon/bower-npm-install) для установки bem-grid из GitHub репозитория или Bower регистра, npm зависимости установятся автоматически.

Добавьте необходимые уровни из bem-grid в файл make.js:

``` javascript
[ 'libs/bem-grid/common.blocks' ]
```

## Простой пример

Пример сетки из двух колонок для устройств со средним размером экрана.

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

Больше примеров можно найти в файле `desktop.pages/index/index.bemjson.js` (собрать его можно с помощью `bem make`) или [странице проекта](http://verybigman.github.io/bem-grid).

## Row

__Модификаторы для блока row:__

- __(s|m|l|xl|xxl)al__ - выравнивание колонок по левому краю на нужном экране
- __(s|m|l|xl|xxl)ac__ - выравнивание колонок по центру на нужном экране
- __(s|m|l|xl|xxl)ar__ - выравнивание колонок по правому краю на нужном экране

- __(s|m|l|xl|xxl)vat__ - выравнивание колонок вертикально по верхнему краю на нужном экране
- __(s|m|l|xl|xxl)vam__ - выравнивание колонок вертикально по центру на нужном экране
- __(s|m|l|xl|xxl)vab__ - выравнивание колонок вертикально по нижнему краю на нужном экране

__Модификаторы для элемента col:__

- __(s|m|l|xl|xxl)__ - автоматический расчет ширины на нужном экране
- __(s|m|l|xl|xxl)w__ - процентная ширина на нужном экране
- __(s|m|l|xl|xxl)o__ - отступ на нужном экране

- __(s|m|l|xl|xxl)of__ - установить порядок колонки как первой на нужном экране
- __(s|m|l|xl|xxl)ol__ - установить порядок колонки как последней на нужном экране

## Настройка

В этой сетке вы можете настроить все, что только пожелаете. Например: базовую ширину, количество колонок, media queries, отступы и многое другое.
Чтобы сделать это, вы должны создать блок `variables` на одном из уровней в вашем проекте и перезаписать в нем любые переменные.
Список доступных переменных можно посмотреть [тут](https://github.com/verybigman/bem-grid/blob/master/common.blocks/variables/variables.styl)

### Поддержка в браузерах

Все фичи работают в: IE 10+, FF 25+, Chrome 28+, Safari 7+, Opera 12.1+, iOS 7.1+, Android Browser 4.1+, Chrome for Android 37+. Для поддержки старых браузеров я создал модификатор `no-flexbox` у блока `row`. Он выставляется автоматически там, где не поддерживаются flexbox'ы и создает фоллбэк на таблицы.

### Авторы

- Антон Виноградов ([verybigman](https://github.com/verybigman)) @awinogradov

### Идеи, замечания и пожелания

Все это можно оформить в виде [issues](https://github.com/verybigman/bem-grid/issues) на GitHub.

### [MIT](http://en.wikipedia.org/wiki/MIT_License) Лицензия
