modules.define(
    'markdown',
    ['i-bem__dom', 'markdown__marked'],
    function (provide, BEMDOM, marked) {

        provide({
            render : marked
        });

    }
);
