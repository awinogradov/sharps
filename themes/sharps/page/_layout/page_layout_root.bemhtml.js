block('page').mod('layout', 'root')(

  elem('content')(
    content()(function () {
      const features = [
        'responsive',
        'fluid',
        'auto',
        'alignment',
        'ordering',
        'offsets',
        'visibility'
      ];
      return [
        { block: 'logo' },
        applyNext(),
        features.map((feature, i) => ([
          { block: 'hr' },
          {
            block: 'example',
            mods: { feature }
          }
        ]))
      ];
    })
  ),

  elem('footer')(
    content()(function () {
      return [
        {
          block: 'link',
          tag: 'a',
          attrs: { href: 'https://github.com/theprotein/sharps' },
          mods: { action: 'fork' }
        },
        { block: 'copyright' }
      ];
    })
  )
);
