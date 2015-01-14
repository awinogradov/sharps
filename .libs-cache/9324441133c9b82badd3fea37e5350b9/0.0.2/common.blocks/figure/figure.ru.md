# Figure

Блок `figure` предназначен для самодостаточного контента. Напимер: илюстраций, диаграмм, фотографий, исходного кода и т.п.
Подробно про тэг <figure> можно почитать в [специфакации W3C](http://www.w3schools.com/tags/tag_figure.asp).

## Использование блока

``` js
{
    block : 'figure',
    content : []
},
{
    block : 'figure',
    caption : 'Description',
    content : []
}
```

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
        <td>Добавление описания для содержимого блока `figure`, используя тэг <figcaption>.</td>
    </tr>
</table>
