block('example').mod('feature', 'visibility')(
  content()(function () {
    return [
      {
        block: 'heading',
        mods: { lvl: 2 },
        content: 'Different visibility'
      },
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { m: true, sw: 0  },
            content: [
              { block: 'box', content: '1' }
            ]
          },
          {
            elem: 'col',
            elemMods: { s: true, mw: 0 },
            content: [
              { block: 'box', content: '2' }
            ]
          }
        ]
      }
    ]
  })
);
