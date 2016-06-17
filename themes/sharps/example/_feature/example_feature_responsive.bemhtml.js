block('example').mod('feature', 'responsive')(
  content()(function () {
    return [
      {
        block: 'heading',
        mods: { lvl: 2 },
        content: 'Absolutely responsive'
      },
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { sw: 12, mw: 3, lw: 1 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 6, mw: 7, lw: 10 },
            content: [
              { block: 'box' }
            ]
          },
          {
            elem: 'col',
            elemMods: { sw: 6, mw: 2, lw: 1 },
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
                  elemMods: { sw: 12, mw: 2, lw: 1 },
                  content: [
                    { block: 'box' }
                  ]
                },
                {
                  elem: 'col',
                  elemMods: { sw: 12, mw: 10, lw: 11 },
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
              elemMods: { sw: 10, mw: 8, lw: 10 },
              content: [
                { block: 'box' }
              ]
            },
            {
              elem: 'col',
              elemMods: { sw: 2, mw: 4, lw: 2 },
              content: [
                { block: 'box' }
              ]
            }
         ]
      }
    ];
  })
);
