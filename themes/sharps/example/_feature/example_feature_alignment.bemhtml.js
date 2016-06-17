block('example').mod('feature', 'alignment')(
  content()(function () {
    return [
      {
        block: 'heading',
        mods: { lvl: 2 },
        content: 'Flexible alignment'
      },
      {
        block: 'row',
        mods: { sal: true },
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
            elemMods: { sw: 2 },
            content: [
              { block: 'box' }
            ]
          }
        ]
      },
      {
        block: 'row',
        mods: { sac: true },
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
            elemMods: { sw: 2 },
            content: [
              { block: 'box' }
            ]
          }
        ]
      },
      {
        block: 'row',
        mods: { sar: true },
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
            elemMods: { sw: 2 },
            content: [
              { block: 'box' }
            ]
          }
        ]
      },
      {
        block: 'row',
        mods: { svat: true },
        content: [
          {
            elem: 'col',
            elemMods: { sw: 6 },
            content: [
              { block: 'box' },
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
        mods: { svam: true },
        content: [
          {
            elem: 'col',
            elemMods: { sw: 6 },
            content: [
              { block: 'box' },
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
        mods: { svab: true },
        content: [
          {
            elem: 'col',
            elemMods: { sw: 6 },
            content: [
              { block: 'box' },
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
      }
    ];
  })
);
