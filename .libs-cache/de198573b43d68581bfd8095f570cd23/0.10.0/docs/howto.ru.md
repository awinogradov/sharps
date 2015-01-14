Как использовать библиотеку
===========================

Для корректной работы библиотеки требуются:

  - Node.js >= 0.10.x,
  - bem-tools >= 0.7.2

Для того чтобы собирать примеры блоков в своей библиотеки, достаточно выполнить «несколько условий».

### 1. Подключаем bem-pr в проектном make.js

Подключаем bem-pr, по аналогии с другими внешними библиотеками (подробнее про настройку сборки средствами bem-tools,
см. «[Кастомизация сборки](http://ru.bem.info/tools/bem/customization/)»:

    // Arch#getLibraries

    'bem-pr' : {
        type : 'git',
        url  : 'git://github.com/narqo/bem-pr.git'
    }

**NOTE** Рекомендуется на этом же этапе «скачать» библиотеку, выполнив

    › bem make bem-pr

В качестве альтернативного способа подключения, можно воспользоваться утилитой [bower][bower.io]:

    // bower.json

    "devDependencies" : {
      "bem-pr" : "narqo/bem-pr#0.5.0"
    }

Дальнейшие описание предполагает, что bem-pr скачан и установлен.

### 2. Добавляем цель sets в процесс сборки

bem-pr расширяет стандартный класс `Arch`, добавляя в процесс сборки узлы отвечающие за сборку наборов.

Для добавления в процесс сборки собственных узлов, в новых версиях bem-tools, в класс `Arch` добавлен метод
`createCustomNodes`.

В make.js необходимо определить этот метод, добавив в процесс сборки, узлы из `bem-pr`.

    // PRJ/.bem/make.js

    require('<путь/до/bem-pr>/bem/nodes')(MAKE);

    MAKE.decl('Arch', {

        // ...

        createCustomNodes : function() {
            var SetsNode = MAKE.getNodeClass('SetsNode');

            // создаем экземпляр узла
            // и расширяем процесс сборки новыми узлами из bem-pr
            return new SetsNode({ root : this.root, arch : this.arch }).alterArch();
        }

    }

### 3. Настраиваем сборку примеров

Класс **SetsNode** описывает наборов уровней, они же сэты (sets).

Для описания собственных наборов необходимо определить метод `SetsNode#getSets()`, который возращает
объект, ключи которого — это название набора (например `desktop`),
а значение — список уровней переопределения из которых состоит набор, т.е. на котором нужно искать примеры.

Метод `SetsNode#getSourceTechs()` описывает технологии, для которых мы будем собирать наботы.
В bem-pr вресии 0.5.0 реализованы технологии: `examples`, `tests`, `specs`.

    // PRJ/.bem/make.js

    MAKE.decl('SetsNode', {

        getSets : function() {
            return {
                'desktop' : [ 'common.blocks', 'desktop.blocks' ]
             };
        },

        getSourceTechs : function() {
            return ['examples'];
        }

    });

В итоге, в корне проекта будет собираться набор `desktop` для технологий `examples` (в директории `desktop.examples`).

Настраиваем сборку примеров, описав используемые в них уровни переопределения и список технологий.

Для этого служит класс `ExampleNode`.

Класс `ExampleNode` расширяет класс `BundleNode` из стандарного набора bem-tools, и описывается теми же методами:
`getTechs`, `getLevels` и пр. Подробнее смотреть в документации к bem-tools.

Итоговый `make.js` проекта, на этом этапе, может выглядеть так:

    // PRJ/.bem/make.js

    try {
        require('<path/to/bem-pr>/bem/nodes')(MAKE);
    } catch (e) {
        if(e.code !== 'MODULE_NOT_FOUND')
            throw e;
    }

    MAKE.dec('Arch', {

        getLibraries : function() {
            return {
                'bem-pr' : {
                    type : 'git',
                    url  : 'git://github.com/narqo/bem-pr.git'
                }
                // остальные библиотеки
            }
        },

        createCustomNodes : function(common, libs, blocks) {
            var SetsNode = MAKE.getNodeClass('SetsNode');

            // При первом запуске `bem-make`, `SetsNode` будет еще не доступен
            if(typeof SetsNode.createId === 'undefined') {
                return;
            }

            // собираем примеры после того как соберутся библиотеки и блоки
            return new SetsNode({ root : this.root, arch : this.arch }).alterArch(common, libs);
        }

    });

    MAKE.decl('SetsNode', {

        getSets : function() {
            return {
                'desktop' : [ 'common.blocks', 'desktop.blocks' ]
             };
        },

        getSourceTechs : function() {
            return ['examples'];
        }

    });


    MAKE.decl('ExampleNode', {

        /**
         * Технологии сборки примера
         */
        getTechs : function() {
            return [
                'bemjson.js',
                'bemdecl.js',
                'deps.js',
                'css',
                'js',
                'bemhtml',
                'html'
            ];
        },

        /**
         * Уровни переопределения используемые для сборки примера
         */
        getLevels : function() {
            var resolve = require('path').resolve.bind(null, this.root);
            return [
                'bem-bl/blocks-common',
                'bem-bl/blocks-desktop',
                'lego/blocks-common',
                'lego/blocks-desktop',
                'desktop.blocks'
            ]
            .concat([this.rootLevel.getTech('blocks').getPath(this.getSourceNodePrefix())])     // у каждого примера может быть дополнительно свой уровень переопределения
            .map(function(path) {
                return resolve(path);
            });
        }

    });

**NOTE** Убедеждаемся, что _корневой_ конфиг уровня, файл `PRJ/.bem/level.js`, описан правильно:

    // PRJ/.bem/level.js

    exports.baseLevelName = 'project';  // <- этим мы говорим bem-tools, что это корень проекта

_Осталось немного_ :)

### 4. Технология examples

Примеры это обычные страницы, которые собираются на специальном уровне `desktop.examples/<block-name>`.

В процессе сборки примеров, bem-pr достраивает недостающие уровни на файловой структуры. Но для того, что в уровнях
примеров использовались правильные технологии сборки, нужно в добавить в проект базовый конфиг
уровня `.bem/levels/example-set.js`.

В большенстве случаев, этот конфиг ничем не отличается от конфига бандлов, `.bem/levels/bundles.js`, поэтому
его можно безболезненно отнаследовать от него:

    // PRJ/.bem/levels/example-set.js

    exports.baseLevelPath = require.resolve('./bundles.js');

**NOTE** Обратите внимание, что уровени `<blocks>/block/block.examples` и `<set>.examles/block` скорее всего должны
иметь разные конфиги, поскольку у них чаще всего отличается способ именования БЭМ-сущностей.

Примеры в `<blocks>/block/block.examples` обычно складываются плоским списком (уровень «simple»):

    › tree -a <blocks>/block/block.examples

    block.examples/
      ├── .bem/
           └── level.js             // exports.baseLevelPath = require.resolve('bem/lib/levels/simple');
      ├── 10-simple.bemjson.js
      ├── 10-simple.title.txt
      ├── 20-complex.bemjson.js
      └── 20-complex.title.txt

На данный момент, bem-tools (версия 0.7.2) не умеет собирать бандлы с плоской структурой. Поэтому структура собранных
примеров должна выглядит как у обычной страницы (бандла):

    › tree -a <sets>
    <set>.examples/
     ├── block/
           ├── .bem/
               └── level.js        // exports.baseLevelPath = require.resolve('../../.bem/levels/example-set.js');
           ├── 10-simple/
                └── 10-simple.bemjson.js
           └── 20-comples/
                └── 10-comples.bemjson.js

где `<sets>` — уровень наборов, задекларированный на шаге (3)

Вот и все!

Для сборки всех наборов, запускаем

    › bem make sets

Но на это может потребоваться много времени, поэтому, для сборки конкретного примера, `10example`,
в блоке `block`, запускаем

    › bem make desktop.examples/block/10example/10example

Либо для пересборки конкретной технологии:

    › bem make desktop.examples/block/10example/10example.css

А еще можно запустить `bem server` и пересобирать пример по запросу:

    › bem server

в браузере открываем (http://localhost:8080/desktop.examples/block/10example/10example.html).

Пример использования можно посмотреть в директории `examples/silly`.
