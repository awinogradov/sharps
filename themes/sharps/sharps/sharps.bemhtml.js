block('sharps')(
  content()(function () {
    let arr = [];
    for (var i = 0; i < this.ctx.number; i++) {
      arr.push('#');
    }
    return arr;
  })
);
