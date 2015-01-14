Сборка тестов
=============

- [Абстрактные знания](#--1)
- [Варианты оформления тестов](#--)
	- [Тесты, не требующие специфичного DOM-дерева](#----dom-)
	- [Тесты, требующие специфичное DOM-дерево](#---dom-)
- [Оформление файла `block.spec.js`](#--blockspecjs)
- [Оформление файла `block.specs/testbundle.bemjson.js`](#--blockspecstestbundlebemjsonjs)
- [Оформление элемента `i-bem__test`](#--i-bem__test)
- [Проектные настройки](#--2)
	- [Расширяем класс TestNode](#--testnode)
	- [Настраиваем сборку `_testbundle.spec.js` и `_testbundle.js`](#--_testbundlespecjs--_testbundlejs)
	- [Добавляем в проект модуль технологии `spec.js`](#-----specjs)
	- [Добавляем путь до технологии `spec.js` в конфиги уровней `specs-set`](#----specjs----set)
	- [Указываем пути до технологий в `.bem/levels/bundles.js`](#-----bemlevelsbundlesjs)
- [Сборка и запуск тетов](#---)
- [Демонстрация](#-1)

### Абстрактные знания

Тест состоит из двух сущностей: тестовый бандл (раннер) и набор тестов.

Тестовые бандлы оформляются по полной аналогии с примерами, в папке `block.specs`.

У каждого тестового бандла может быть свой дополнительный уровень переопределения.

Наборы тестов пишутся в технологии `spec.js`.

Набор тестов можно сделать для любой bem-сущности (блок, элемент и т.д.).

Для тестирования используется фреймворк [mocha](http://visionmedia.github.io/mocha/) в режиме `BDD`.

Для ассертов используется библиотека [chai](http://chaijs.com/) с плагином
[sinon-chai](https://github.com/domenic/sinon-chai).

На момент запуска тестов метод `chai.should` уже выполнен (http://chaijs.com/guide/styles/).

Для моков используется библиотека [sinon](http://sinonjs.org/).

### Варианты оформления тестов

Условно можно выделить два случая:

1. Тесты, не требующие специфичного DOM-дерева, либо создающие его самостоятельно через JS.
2. Тесты, требующие специфичное DOM-дерево, созданное на этапе генерации страницы.

#### Тесты, не требующие специфичного DOM-дерева

Для первого случая подходит простая схема оформления тестов:

    common.blocks/block/
    ├── __elem
    │   └── ...
    ├── block.css
    ├── block.deps.js
    ├── block.js
    └── block.spec.js

Тесты пишутся в файле `block.spec.js`.

В данном случае это тесты для блока, но можно точно также написать их для элемента или модификатора.
Этого достаточно, чтобы собрать дефолтный тестовый бандл, в рамках которого будут запущены тесты из этого файла.

#### Тесты, требующие специфичное DOM-дерево

Во втором случае нам требуется входное bem-дерево. Для этого по аналогии с примерами, в папке блока создается
директория `block.specs`:

    common.blocks/block/
    ├── __elem
    │   ├── block__elem.css
    │   └── block__elem.title.txt
    ├── block.specs
    │   └── testbundle.bemjson.js
    ├── block.js
    └── block.spec.js

Здесь мы гораздо лучше контролируем процесс. В `testbundle.bemjson.js` можно задать bem-дерево
для полноценной страницы, указать тесты каких конкретно блоков запускать.

Для этого конкретного бандла можно задать свой дополнительный уровень переопределения:

    common.blocks/block/
    ├── __elem
    │   ├── block__elem.css
    │   └── block__elem.title.txt
    ├── block.specs
    │   ├── testbundle.blocks
    │       └── myblock
    │           └── myblock.spec.js
    |   └── testbundle.bemjson.js
    ├── block.js
    └── block.spec.js

**Важно**

Файл `testbundle.bemjson.js` должен интерпретироваться как блок в технологии `bemjson.js`, 
поэтому в имени тестового бандла нельзя использовать нижнее подчеркивание.

### Оформление файла `block.spec.js`

Тесты пишутся под фреймворк mocha с использованием библиотеки ассертов chai.

Для запуска тестов используется [модульная система](https://github.com/ymaps/modules). Каждый тест
декларируется под именем `spec`, но провайдит `undefined`.

Пример:

```js
modules.define('spec', function(provide) {

    describe('block', function() {
        it('Два умножить на два должно равняться четырем', function() {
            (2*2).should.to.equal(4);
        });
    });

    provide();

});
```

### Оформление файла `block.specs/testbundle.bemjson.js`

В `testbundle.bemjson.js` пишется произвольный BEMJSON, плюс:

- подключение `testbundle.spec.js` (должно идти после подключения обычного js);
- нужно задекларировать блок `spec`.

Пример:

```js
({
    block : 'page',
    head : [
        { elem : 'css', url : '_testbundle.css', ie : false },
        { elem : 'js', url : '_testbundle.spec.js' }
    ],
    content : [
        { block : 'spec' },
        { block : 'header' },
        { block : 'content' },
        { block : 'footer' }
    ]
})
```

### Оформление блока `spec`

`spec` это специальный блок, который поставляется с библиотекой `bem-pr`. Он умеет запускать тесты.

Делает две простые вещи:

1. Дает возможность прогнать тесты конкретных блоков;
2. Подтягивает за собой тестовый фреймворк (mocha), библиотеку ассертов (chai) и пр.

Есть два способа оформления блока `spec` в `testbundle.bemjson.js`.

1) Запустить все тесты, какие приехали по зависимостям:

```js
{ block : 'spec' }
```

Запустить тесты конкретных блоков:

```js
{
    block : 'spec',
    content : [
        { block : 'block' },
        { block : 'block', elem : 'elem' },
        { block : 'another-block' }
        ...
    ]
}
```

### Проектные настройки

В файле `.bem/make.js`:

- расширяем класс `SpecNode`

В файле `.bem/levels/specs-set.js`:

- указываем пути до технологий:
  * `spec.js`
  * `spec.js+browser.js+bemhtml`
  * `spec.bemjson.js`
  * `browser.js`
  * `bemhtml`
  * `phantomjs`

#### Расширяем класс TestNode

Сначала нужно настроить [сборку примеров](https://github.com/narqo/bem-pr/blob/master/docs/howto.ru.md)
(и убедиться, что она работает)

За сборку тестовых бандлов отвечает класс `SpecNode`. По аналогии с примерами, он расширяет
стандартный класс `BundleNode` из bem-tools.

Расширяем этот класс:

- указываем технологии, в которых будет собираться тестовый бандл;
- добавляем уровень переопределения `bem-pr/spec.blocks` (там лежит блок `spec`);
- указываем web-адрес, который смотрит на корень проекта (опционально);
- указываем название репортера, который будет выводить результаты тестов в консоли (опционально).

```js
MAKE.decl('SpecNode', {

    getLevels : function() {
        return this.__base()
            .concat('<path/to/bem-pr>/spec.blocks');
    },

    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'spec.js+browser.js+bemhtml',
            'css',
            'html',
            'phantomjs'
        ];
    },

    webRoot : 'http://islands-page.dev/',

    consoleReporter: 'teamcity'

})
```

Выше я предполагаю, что полный набор уровней уже указан для класса `BundleNode`, поэтому просто 
расширяю этот набор уровнем `bem-pr/test.blocks`.

`webRoot` должен быть таким, чтобы от него можно было отложить путь до тестового бандла, 
например `http://islands-page.dev/<setName>.specs/block/test-bundle/test-bundle.html`.

`webRoot` указывается со слешом на конце.

Возможные значения поля `consoleReporter` смотри 
в [документации к mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs#supported-reporters). 
По умолчанию используется репортер `spec`.

#### Указываем пути до технологий в `.bem/levels/specs-set.js`.

В файле `.bem/levels/specs-set.js` должны быть указаны пути до технологий
`spec.js+browser.js+bemhtml`, `spec.js`, `spec.bemjson.js`, `phantomjs`, `browser.js` и `bemhtml`, 
которые потребуются при сборке тестов.

```js
// .bem/levels/specs-set.js

exports.getTechs = function() {
    return {
        'spec.js+browser.js+bemhtml' : PATH.join(PRJ_ROOT, 'bem-pr/bem/techs/spec.js+browser.js+bemhtml'),
        'spec.js'                    : PATH.join(PRJ_ROOT, 'bem-pr/bem/techs/spec.js.js'),
        'bemhtml'                    : PATH.join(PRJ_ROOT, 'bem-core/.bem/techs/bemhtml.js'),
        'browser.js'                 : PATH.join(PRJ_ROOT, 'bem-core/.bem/techs/browser.js.js'),
        'spec.bemjson.js'            : PATH.join(PRJ_ROOT, 'bem-pr/bem/techs/spec.bemjson.js'),
        'phantomjs'                  : PATH.join(PRJ_ROOT, 'bem-pr/bem/techs/phantomjs.js'),

        'bemdecl.js'                 : 'v2/bemdecl.js',
        'deps.js'                    : 'v2/deps.js',
        'js'                         : 'v2/js-i',
        'css'                        : 'v2/css',
        // ...
    };
};
```

### Сборка и запуск тестов

Дефолтный тестовый бандл для отдельной БЭМ-сущности, по технологии spec.js:

    › bem make <setName>.specs/block/spec-js
    › bem make <setName>.specs/block__elem/spec-js

Рукотворный тестовый бандл:

    › bem make <setName>.specs/block/testbundle
    › bem make <setName>.specs/block__elem/testbundle
    
Все тестовые бандлы в рамках набора `<setName>`:

    › bem make <setName>.specs

Если в процесс сборки тестовых бандлов была добавлена технология `phantomjs`, то в конце сборки тесты
прогонятся через [PhantomJS](http://phantomjs.org/), вы увидите результаты их выполнения прямо в консоли.

Собранный тестовый бандл можно открыть в браузере, там тоже будут показаны результаты выполнения тестов.

### Демонстрация

    $ git clone git@github.com:mishaberezin/bl-controls
    $ cd bl-controls
    $ npm install
    $ ./node_modules/.bin/bem make bem-pr
    $ ./node_modules/.bin/bem make desktop.sets/attach.tests/01-test
    $ ./node_modules/.bin/bem make desktop.sets/attach.tests/default
