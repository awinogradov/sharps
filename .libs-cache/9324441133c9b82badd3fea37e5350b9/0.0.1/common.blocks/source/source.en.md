# Source

Use block `source` for highlighting your code. Block with magic will be wrapped
to block `figure` for pretty HTML5 semantic. 

## Block usage:

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

I want another theme! Ok, man. Create new value for 'theme' mod in Stylus tech with theme what you want.
In Stylus file `@import` theme from libs/highlight/src/styles.

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>caption</td>
        <td>
            <code>String</code>
        </td>
        <td>Caption for sources. Will be translated to `figure` caption.</td>
    </tr>
</table>

## Modifiers of a block

### _lang

Source code language.

### _theme

Highlight.js theme.
