var books = (function() {
  var categories = ['文学', '杂类', '商业', '科技'],
      publishers = {
        "addison" : "Addison-Wesley",
        "barnes"  : "Barnes & Noble",
        "harper"  : "HarperCollins",
        "oreilly" : "O'Reilly",
        "pearson" : "Pearson",
        "prentice": "Prentice Hall",
        "simon"   : "Simon & Schuster",
        "wiley"   : "Wiley",
        "zhonghua": "中华书局",
      },
      colNames = ['分类', '作者', '书名', '出版社', '年份', '版本', '书号', '页数', '评分', '开始', '阅毕', '链接'],
      colMap = new Map();

  colNames.forEach(function(e, i) { colMap.set(e, i) });
  
  var list = [
    // author, title, publisher, year, edition, ISBN, pages, rating, start, end
    // Literature
    ["文学", "Charles Dickens", "Bleak House", publishers.barnes, 2005, 1, 
      "978-1593083113", 912, 8, "2016-06-15", "2017-11-19", "dickens/bleak_house/bh"],
    ["文学", "Charles Dickens", "David Copperfield", publishers.barnes, 2003, 1, 
      "978-1593080631", 729, 8, "2015-09-15", "2016-06-12", ""],
    ["文学", "Charles Dickens", "Great Expectations", publishers.barnes, 2003, 1, 
      "978-1593080068", 558, 8, "2013-06-15", "2013-11-15", ""],
    ["文学", "Charles Dickens", "A Tale of Two Cities", publishers.barnes, 2004, 1, 
      "978-1593081386", 409, 9, "2013-11-15", "2014-05-26", "dickens/two_cities/ttt"],
    ["文学", "William Shakespeare", "Macbeth", publishers.simon, 2003, 1, 
      "978-0743477109", 304, 8, "2012-06-15", "2012-07-11", "shakespeare/macbeth/mac"],
    ["文学", "William Shakespeare", "Romeo and Juliet", publishers.simon, 2002, 1, 
      "978-0743477116", 283, 8, "2012-08-15", "2012-11-26", ""],
    ["文学", "孙洙, 陈婉俊", "唐诗三百首", publishers.zhonghua, 2003, 1, 
      "978-7101037791", 377, 9, "2017-06-15", "2017-12-06", "tangshi_300/t300"],
    ["文学", "朱孝臧, 刘乃昌", "宋词三百首", publishers.zhonghua, 2014, 1, 
      "978-7101100938", 300, 8, "2018-01-07", "2018-06-26", "songci_300/s300"],
    ["文学", "吴楚才, 吴调侯", "古文观止", "北京燕山", 2014, 1, 
      "978-7540236182", 780, 7, "2018-07-15", "2019-02-25", "guwen/gw"],
    // Liberal Arts
    ["杂类", "Peter L. Bernstein", "Against the Gods: The Remarkable Story of Risk", publishers.wiley, 1998, 1, 
      "978-0471295631", 383, 8, "2014-12-15", "2015-01-26", "agsinst_gods/ag"],
    ["杂类", "David Pogue, Scott Speck", "Classical Music for Dummies", "Hundgry Minds", 1997, 1, 
      "078-5555550094", 383, 9, "2007-12-06", "2008-11-19", "classical_music_dummies/cmd"],
    ["杂类", "Yuval N. Harari", "Sapiens: A Brief History of Humankind", publishers.harper, 2015, 1, 
      "978-0062316097", 464, 8, "2018-03-23", "2018-09-23", "sapiens/sapiens"],
    ["杂类", "William Strunk Jr., E.B. White", "The Elements of Style", publishers.pearson, 2000, 4, 
      "978-0205309023", 128, 8, "2019-02-07", "2019-04-07", "elements_style/eos"],
    // Biz
    ["商业", "Burton G. Malkiel", "The Elements of Investing", publishers.wiley, 2013, 1, 
      "978-1118484876", 182, 7, "2014-12-15", "2015-01-11", ""],
    ["商业", "Burton G. Malkiel", "A Random Walk Down Wall Street", "Norton", 2015, 11, 
      "978-0393246117", 448, 8, "2019-05-11", "2019-05-25", "random_walk/rw"],
    ["商业", "Henry Hazlitt", "Economics in One Lesson", "Ludwig von Mises Institute", 2008, 1, 
      "978-1933550213", 206, 7, "2018-04-11", "2018-04-21", "economics_one_lesson/eol"],
    ["商业", "Benjamin Graham, Jason Zweig", "The Intelligent Investor", publishers.harper, 2006, 1, 
      "978-0060555665", 640, 8, "2018-09-24", "2018-12-06", "intelligent_investor/ii"],
    ["商业", "Josh C. Bogle", "The Little Book of Common Sense Investing", publishers.wiley, 2007, 1, 
      "978-0470102107", 216, 7, "2014-10-15", "2014-11-09", ""],
    ["商业", "Kenneth L. Fisher", "The Little Book of Market Myths", publishers.wiley, 2013, 1, 
      "978-1118445013", 224, 7, "2013-12-15", "2014-01-20", ""],
    ["商业", "Joel Greenblatt", "The Little Book That Beats the Market", publishers.wiley, 2005, 1, 
      "978-0471733065", 155, 7, "2014-09-15", "2014-10-25", ""],
    ["商业", "Pat Dorsey", "The Little Book That Builds Wealth", publishers.wiley, 2008, 1, 
      "978-0470226513", 200, 7, "2014-02-15", "2014-03-07", ""],
    ["商业", "Mary Buffett, David Clark", "The Warren Buffett Stock Portfolio", "Scribner", 2011, 1, 
      "978-1451606485", 240, 6, "2014-02-15", "2014-03-15", ""],
    // Tech
    ["科技", "Alfred V. Aho", "Data Structures and Algorithms", publishers.pearson, 1983, 1, 
      "978-0201000238", 448, 6, "2012-08-15", "2012-11-24", ""],
    ["科技", "Frederick P. Brooks Jr.", "The Mythical Man-Month: Essays on Software Engineering", publishers.addison, 1995, 2, 
      "978-0201835953", 322, 9, "2012-06-15", "2012-07-17", ""],
    ["科技", "Brian W. Kernighan, Dennis M. Ritchie", "The C Programming Language", publishers.prentice, 1988, 2, 
      "978-0131103627", 288, 10, "2012-07-15", "2012-10-28", ""],
    ["科技", "Cay S. Hortsmann", "Core Java SE 9 for the Impatient", publishers.addison, 2017, 2, 
      "978-0134694726", 576, 8, "2018-04-15", "2018-05-19", ""],
    ["科技", "Cay S. Hortsmann", "Core Java, Volumn 1: Fundamentals", publishers.prentice, 2007, 8, 
      "978-0132354769", 836, 8, "2012-09-15", "2012-10-07", ""],
    ["科技", "Joshua Bloch", "Effective Java Programming Language Guide", publishers.addison, 2001, 1, 
      "078-5342310054", 272, 8, "2012-05-15", "2012-11-23", ""],
    ["科技", "Randal L. Schwartz", "Learning Perl", publishers.oreilly, 2011, 4, 
      "978-1449303587", 363, 8, "2012-07-15", "2012-09-07", ""],
    ["科技", "Mark Pilgrim", "Dive into Python 3", "Apress", 2009, 1, 
      "978-1430224150", 360, 6, "2012-11-09", "2012-12-09", ""],
    ["科技", "John M. Zelle", "Python Programming: An Introduction to Computer Science", "Franklin Beedle", 2010, 2, 
      "978-1590282410", 514, 6, "2012-06-15", "2012-08-03", ""],
    ["科技", "David Flanagan, Yukihiro Matsumoto", "The Ruby Programming Language", publishers.oreilly, 2008, 1, 
      "978-0596516178", 448, 8, "2012-05-15", "2012-08-07", ""],
    ["科技", "David A. Black", "The Well-Grounded Rubyist", "Manning", 2014, 2, 
      "978-1617291692", 536, 8, "2017-01-15", "2017-04-10", ""], 
    ["科技", "Michael Hartl", "Ruby on Rails Tutorial", publishers.addison, 2016, 4, 
      "978-0134598628", 816, 9, "2018-01-20", "2018-4-10", ""],
    ["科技", "Elizabeth Castro", "HTML5 and CSS3", "Peachpit", 2011, 7, 
      "978-0321719614", 550, 6, "2012-06-15", "2012-07-18", ""],
    ["科技", "Nicholas C. Zakas", "Understanding ECMAScript 6", "No Starch", 2016, 3, 
      "978-1593277574", 352, 7, "2017-09-06", "2017-11-06", ""],
    ["科技", "Debra Cameron", "Learning GNU Emacs", publishers.oreilly, 2004, 3, 
      "978-0596006488", 536, 6, "2012-07-15", "2012-08-17", ""],
  ];

  function listWithReviews() {
    return list.filter(function(e) { return e[11].length > 0 });
  }

  function group(api, rows) {
    var last = null;

    api.column(0, {page:'current'}).data().each(function(g, i) {
      if (last !== g) {
        $(rows.nodes()).eq(i).before(
          `<tr class="group"><td colspan="7">${g}</td></tr>`
        );

        last = g;
      }
    });
  }

  function setTitles(api, rows) {
    rows.every(function() {
      var row = this.data();
      api.row(this.index()).node().setAttribute('title', title(row));
    });
  }

  function title(book) {
    var tip = `标题：${book[2]}<br>` + 
              `书号：${book[6]}<br>` +
              `页数：${book[7]}`;

    return tip;
  }

  function getReviewLinks(data, row) {
    return row[11].length > 0 ? `<a href="${row[11]}.html">${data}</a>` : data;
  }

  function addColSelect(api, colIndex) {
    var col = api.column(colIndex),
    select = $('<select><option value=""></option></select>');

    select.appendTo($(col.footer()).empty())
      .on('change', function() {
        var val = $.fn.dataTable.util.escapeRegex(
          $(this).val()
        );

        col.search(val ? `^${val}$` : '', true, false).draw();
      });

    col.data().unique().sort().each(function(d, j) {
      select.append(`<option value="${d}">${d}</option>`);
    });
  }

  return {
    addColSelect    : addColSelect,
    colNames        : colNames,
    colMap          : colMap,
    getReviewLinks  : getReviewLinks,
    group           : group,
    list            : list,
    listWithReviews : listWithReviews,
    setTitles       : setTitles,
  };
})();
