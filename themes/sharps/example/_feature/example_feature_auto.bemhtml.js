block('example').mod('feature', 'auto')(
  content()(function () {
    return [
      {
        block: 'heading',
        mods: { lvl: 2 },
        content: 'Autosizable columns'
      },
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { s: true },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { s: true },
            content: [
              { block: 'box' }
            ]
          }
        ]
      },
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { s: true },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { s: true },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { s: true },
            content: [
              { block: 'box' }
            ]
          }
        ]
      }
    ];
  })
);
