block('page').mod('layout', 'root')(

  elem('content')(
    content()(function () {
      return [
        { block: 'sharps', number: 3 },
        applyNext(),
        { block: 'sharps', number: 1 },
        [
          'responsive',
          'fluid',
          'auto',
          'alignment',
          'ordering',
          'offsets',
          'visibility'
        ].map(feature => ([
          { block: 'example', mods: { feature } },
          { block: 'sharps', number: 1 }
        ]))
      ]
    })
  ),

  elem('footer')(
    content()(function () {
      return [
        { block: 'copyright' }
      ];
    })
  )
);
