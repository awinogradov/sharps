# bem-grid

Библиотека для описание сеток в БЭМ-проектах. Это форк модульной сетки из Zurb Foundation
Framework. Теперь ее можно использовать в БЭМ нотациях. Подробно почитать о том как
эта сетка устроена можно [тут](http://foundation.zurb.com/docs/components/grid.html). Главное помнить о
соответствиях:

``` javascript
.line = .row
.line_col = .columns
```

### Зависимости

- блоки i-bem и ua из [bem-core](https//github.com/bem/bem-core)

### Установка

Принцип идентичен подключению библиотек [bem-bl](https//github.com/bem/bem-bl),
[bem-core](https//github.com/bem/bem-core) и [bem-components](https//github.com/bem/bem-components).
Используйте [bower-npm-install](https://github.com/arikon/bower-npm-install) для установки bem-grid из
GitHub или Bower регистра, npm зависимости установятся автоматически.

Добавьте необходимые уровни из bem-grid в ваш файл make.js:

``` javascript
[ 'libs/bem-grid/common.blocks' ]
```

### Использование

Пример сетки из двух колонок для устройств со средним размером экрана.

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
Возможные модификаторы для элемента col:

__dlw__ - ширина колонки для широких экранов
__dmw__ - ширина колонки для средних экранов
__dsw__ - ширина колонки для маленьких экранов

__dlro__ - сброс порядка для широких мониторов
__dmro__ - сброс порядка для средних мониторов
__dsro__ - сброс порядка для маленьких мониторов

__dlo__ - сдвиг на широких экранах
__dmo__ - сдвиг на средних экранах
__dso__ - сдвиг на маленьких экранах

__dlph__ - push на широких экранах
__dmph__ - push на средних экранах
__dsph__ - push на маленьких экранах

__dlpl__ - pull на широких экранах
__dmpl__ - pull на средних экранах
__dspl__ - pull на маленьких экранах

__dlc__ - центруем колонку на широких экранах
__dmc__ - центруем колонку на средних экранах
__dsc__ - центруем колонку на маленьких экранах

__dluc__ - убираем центровку на широких экранах
__dmuc__ - убираем центровку на средних экранах
__dsuc__ - убираем центровку на маленьких экранах

### Авторы

- Антон Виноградов ([verybigman](https://github.com/verybigman))

### Идеи, замечания и пожелания

Все это можно оформить в виде [issues](https://github.com/verybigman/bem-grid/issues) на GitHub.

### [MIT](http://en.wikipedia.org/wiki/MIT_License) Лицензия
