block('heading')(
  tag()(function () {
    return this.ctx.mods ?
      `h${this.ctx.mods.lvl || 1}` : 
      'h1';
  })
);
