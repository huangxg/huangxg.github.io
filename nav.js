var bao = bao || {};

bao.nav = (() => {
  var sections = {
    "主页" : "index",
    "读书" : "books/books",
    "围棋" : "go/go",
    "电脑" : "tech/tech",
    "民生" : "life/life",
  };

  function getNavbar(section, level) {
    var bar = '\n' +
      '<span class="navbar-brand">𝜶</span>\n' + 
      '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"\n' +
      '  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
      '<span class="navbar-toggler-icon"></span>\n' +
      '</button>\n\n' + 
    
      '<div class="collapse navbar-collapse" id="navbarSupportedContent">\n' + 
      '  <ul class="navbar-nav mr-auto">\n';

    Object.keys(sections).forEach(k => {
      var active = section === k ? ' active' : '',
          prefix = section !== k || level > 0 ? '../'.repeat(level) : '',
          link = `${prefix}${sections[k]}.html`;

      bar += `    <li class="nav-item"><a class="nav-link${active}" href="${link}">${k}</a></li>\n`;
    });

    bar += '  </ul>\n</div>';

    return bar;
  }

  return {
    sections  : sections,
    getNavbar : getNavbar,
  };
})();
