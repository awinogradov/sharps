# List

Используется для создания списков.

# Использование блока

``` js
{
    block : 'list',
    items: [ 'unordered 1', 'unordered 2' ]
}
```

## Вложенных списков

``` js
{
    block : 'list',
    items : [
        'item 1',
        [
            'item 2',
            {
                block : 'list',
                items : [ 'nested item 1', 'nested item 2' ]
            }
        ]
    ]
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
        <td>items</td>
        <td>
            <code>Array</code>
        </td>
        <td>Массив элементов списка. Элемент может быть как строкой, объектом и массивом.</td>
    </tr>
</table>

## Модификаторы блока

### _type

- упорядоченный список (list_type_ordered)

``` js
{
    block : 'list',
    mods: { type : 'ordered' },
    items: [ 'ordered item 1', 'ordered item 2' ]
}
```
