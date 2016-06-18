({
  shouldDeps: [
    { block: 'logo' },
    { block: 'link' },
    { block: 'hr' },
    { block: 'copyright' },
    { block: 'paragraph' },
    {
      block: 'example',
      mods: {
        feature: [
          'responsive',
          'fluid',
          'offsets',
          'auto',
          'alignment',
          'ordering',
          'visibility'
        ]
      }
    }
  ]
});
