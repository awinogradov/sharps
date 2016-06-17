block('example').mod('feature', 'offsets')(
  content()(function () {
    return [
      {
        block: 'heading',
        mods: { lvl: 2 },
        content: 'Any offsets'
      },
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { sw: 10, so: 2 },
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
            elemMods: { sw: 8, so: 4 },
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
            elemMods: { sw: 6, so: 6 },
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
            elemMods: { sw: 4, so: 8 },
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
            elemMods: { sw: 2, so: 10 },
            content: [
              { block: 'box' }
            ]
          }
        ]
      }
    ];
  })
);
