var bao = bao || {};

bao.go = bao.go || {};

bao.go.ranking = (() => {
  function getPlayers(matchDataArray) {
    var players = [];

    matchDataArray.forEach(match => {
      match.forEach(row => {
        Array.prototype.push.apply(players, row.slice(2));
      });
    });

    return [... new Set(players)];
  }

  function getResults(matchDataArray) {
    var players = getPlayers(matchDataArray),
        results = {};

    players.forEach(player => {
      results[player] = [0, 0, 0, 0];
    });

    matchDataArray.forEach(match => {
      match.forEach(row => {
        row.slice(2).forEach((player, i) => {
          if (i == 3) {
            i = 2;
          } else if (i > 3) {
            i = 3;
          }
          results[player][i]++;
        });
      });
    });

    var array = [];
    Object.keys(results).forEach(player =>{
      array.push([player, ...results[player]]);
    });
    
    return array;
  }

  function calcScores(results) {
    results.forEach( row => {
      var score = 8.07 * row[1] + 4.03 * row[2] + 2.01 * row[3] + row[4];
      row.push(score);
    });
    return results;
  }

  return {
    calcScores : calcScores,
    getPlayers : getPlayers,
    getResults : getResults,
  };
})();

bao.go.playerRanking = (() => {
  var cols = [
    { title: '棋手', type: 'string', align: 'center'}, 
    { title: '冠军', type: 'number', decimal: 0, align: 'right'}, 
    { title: '亚军', type: 'number', decimal: 0, align: 'right'}, 
    { title: '四强', type: 'number', decimal: 0, align: 'right'}, 
    { title: '八强', type: 'number', decimal: 0, align: 'right'}, 
    { title: '积分', type: 'number', decimal: 2, align: 'right'}
  ];

  let data = [];

  return {
    cols : cols,
    data : (() => {
      data.forEach( row => {
        var score = 8.07 * row[1] + 4.03 * row[2] + 2.01 * row[3] + row[4];
        row.push(score);
      });
      return data;
    })(),
  };
})();

bao.go.countryRanking = (() => {
  var cols = [
    { title: '国家', type: 'string', align: 'center'}, 
    { title: '冠军', type: 'number', decimal: 0, align: 'right'},
    { title: '亚军', type: 'number', decimal: 0, align: 'right'},
    { title: '四强', type: 'number', decimal: 0, align: 'right'},
    { title: '八强', type: 'number', decimal: 0, align: 'right'},
    { title: '棋手', type: 'number', decimal: 0, align: 'right'},
    { title: '积分', type: 'number', decimal: 2, align: 'right'}
  ];

  var data = [
    ['中', 45, 49, 104, 209, 74],
    ['日', 10, 17, 33, 97, 29],
    ['韩', 62, 50, 97, 158, 48],
    ['其他', 0, 0, 0, 4, 2],
    ['合计', 117, 117, 234, 468, 153]
  ];

  data.forEach( row => {
    var score = 8.07 * row[1] + 4.03 * row[2] + 2.01 * row[3] + row[4];
    row.push(score);
  });

  return {
    cols : cols,
    data : data
  }
})();
