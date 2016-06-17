block('example').mod('feature', 'ordering')(
  content()(function () {
    return [
      {
        block: 'heading',
        mods: { lvl: 2 },
        content: 'Custom order'
      },
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { sw: 4 },
            content: [
              { block: 'box', content: '1' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 4 },
            content: [
                { block: 'box', content: '2' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 4, sof: true },
            content: [
              { block: 'box', content: '3' }
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
              { block: 'box', content: '1' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 3, sol: true },
            content: [
              { block: 'box', content: '2' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 3 },
            content: [
              { block: 'box', content: '3' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 3 },
            content: [
              { block: 'box', content: '4' }
            ]
          }
        ]
      }
    ];
  })
);
