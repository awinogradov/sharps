# Image

Блок расширяет блок `image` из [bem-components](http://ru.bem.info/libs/bem-components/v2/).
Блок умеет автоматически оборачиваться в блок `figure` для поддержания семантичности HTML5.
Читайте [оригинальную документацию](http://ru.bem.info/libs/bem-components/v2/desktop/image/) к блоку.

## Использование блока

``` js
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
},
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
    caption : 'BEM logo from GitHub'
},
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
    caption : 'BEM logo from GitHub',
    width : '60px',
    height : '50px',
    alt : 'BEM'
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
        <td>Описание изображения. Пересылается в моду caption блока <code>figure</code> и моду title блока <code>image</code>.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Источник изображения</td>
    </tr>
</table>
