# Paragraph

Описание абзацев в тексте

## Использование блока

``` js
{ block : 'paragraph', content : 'Default paragraph' },
{ block : 'paragraph', mark : 'nb', content : 'Paragraph with marker' }
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
        <td>mark</td>
        <td>
            <code>String</code>
        </td>
        <td>Метка для абзаца. Например: <strong>NB</strong></td>
    </tr>
</table>

## Модификаторы блока

### _lead

Заглавный параграф для текста
