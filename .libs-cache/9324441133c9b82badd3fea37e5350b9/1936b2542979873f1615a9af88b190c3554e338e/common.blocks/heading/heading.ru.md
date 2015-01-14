# Heading

Блок `heading` используется для создания h1, h2, h3, h4 тэгов.

## Использование блока

``` js
{ block : 'heading', lvl : 1, content : 'Level 1' },
{ block : 'heading', lvl : 2, content : 'Level 2' },
{ block : 'heading', lvl : 3, content : 'Level 3' },
{ block : 'heading', lvl : 4, content : 'Level 4' }
```

Все настройки можно найти в блоке 'variables'.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>lvl</td>
        <td>
            <code>Integer</code>
        </td>
        <td>Уровень заголовка. Доступны 1, 2, 3 или 4.</td>
    </tr>
</table>
