# Source

Блок `source` используется для подсветки исходного кода в тексте. Блок умеет автоматически оборачиваться в
блок `figure` для поддержания семантичности HTML5.

## Использование блока:

``` js
{
    block : 'source',
    mods : { lang : 'js', theme : 'github' },
    content : 'function test() {\n return true;\n }\n'
},
{
    block : 'source',
    caption : 'Source with caption',
    mods : { lang : 'js', theme : 'github' },
    content : 'function test() {\n return true;\n }\n'
}
```

Если хочется использовать другую тему надо создать модификатор 'theme' с новым значением, равным имени темы из highlight.js в технологии Stylus.
Внутри этого файла импортировать тему `@import '../../../../libs/highlight/src/styles/%name%.css'`.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>caption</td>
        <td>
            <code>String</code>
        </td>
        <td>Подпись для исходника. Пересылается в моду caption блока `figure`.</td>
    </tr>
</table>

## Модификаторы блока

### _lang

Язык программирования для подсветки.

### _theme

Тема из highlight.js
