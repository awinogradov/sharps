#github-ribbon

## Моды

`url` — ссылка на страницу репозитория

`image` — если указан подгружает кастомную картинку

## Модификаторы 
- `left` {true}

Ribbon прижат вправо

- `right` {true}

Ribbon прижат вправо

- `theme` : {Имя темы} (опционально)

Переопределяет моду `image` на одну из тем https://github.com/blog/273-github-ribbons
Нужен уровень переопределения `bem-social/design/common.blocks`

## Пример
```js
{
    block : 'github-ribbon',
    mods : { theme : 'red', right : true },
    url : 'https://github.com/voischev/bem-social'
}
```
