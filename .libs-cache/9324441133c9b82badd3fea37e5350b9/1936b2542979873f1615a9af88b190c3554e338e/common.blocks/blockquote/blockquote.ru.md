# Blockquote

Блок `blockquote` используется для оформления цитат в тексте.

## Использование блока

``` js
{
    block : 'blockquote',
    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
},
{
    block : 'blockquote',
    source : 'Anton Winogradov',
    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
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
        <td>source</td>
        <td>
            <code>String</code>
        </td>
        <td>Источник цитаты</td>
    </tr>
</table>
