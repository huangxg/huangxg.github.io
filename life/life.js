var bao = bao || {};

bao.life = (() => {
  var news = [
    {
      title : '🌞 美国都市区气候排名',
      date  : '2013-10-13',
      url   : 'life/us_weather.html'
    }, {
      title : '👮 2012 美国都市区犯罪率排名',
      date  : '2013-10-11',
      url   : 'life/us_crimes_2012.html'
    }, {
      title : '👷 2013 美国都市区失业率排名',
      date  : '2013-10-12',
      url   : 'life/us_jobs_2013.html'
    }, {
      title : '💰 2010 美国都市区人均收入排名',
      date  : '2013-10-13',
      url   : 'life/us_income_2010.html'
    }    
    
  ];

  return {
    news : news
  };
})();
