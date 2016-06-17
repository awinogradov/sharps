block('example').mod('feature', 'fluid')(
  content()(function () {
    return [
      {
        block: 'heading',
        mods: { lvl: 2 },
        content: 'Simply fluid'
      },
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { sw: 1 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 2 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 3 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 6 },
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
            elemMods: { sw: 2 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 3 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 4 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 3 },
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
            elemMods: { sw: 3 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 4 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 3 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 2 },
            content: [
              { block: 'box' }
            ]
          }
        ]
      }
    ];
  })
);
