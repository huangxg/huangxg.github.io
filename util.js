var bao = bao || {};

bao.util = (() => {
  /**
   * @param {Array.Array} list array of array
   * @param {number} i index of column
   * @param {reverse} reverse descending order
   * @return {Array.Array} sorted array
   */
  function sortByCol(array, i, reverse) {
    array.sort((a, b) => {
      if (a[i] < b[i]) {
        return -1;
      } else if (a[i] > b[i]) {
        return 1;
      }
      return 0;
    });

    if (reverse) {
      array.reverse();
    }

    return array;
  }

  /**
   * 
   * @param {Array.Object} array 
   * @param {string} prop 
   * @param {boolean} reverse descending order
   */
  function sortByProp(array, prop, reverse) {
    array.sort((a, b) => {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      }
      return 0;
    });

    if (reverse) {
      array.reverse();
    }

    return array;
  }

  function getColDefs(cols) {
    var colDefs = [],
        centerCols = [],
        rightCols = [];

    cols.forEach((col, i) => {
      if ('center' === col.align ) {
        centerCols.push(i);
      } else if ('right' === col.align) {
        rightCols.push(i);
      }

      if (typeof col.decimal !== 'undefined') {
        colDefs.push({
          targets: [i],
          render: $.fn.dataTable.render.number( ',', '.', col.decimal)
        });
      }
    });

    if (centerCols.length > 0) {
      colDefs.push({
        targets: centerCols,
        className: "dt-body-center"
      });
    }
    if (rightCols.length > 0) {
      colDefs.push({
        targets: rightCols,
        className: "dt-body-right"
      });
    }

    return colDefs;
  }

  function getColFoot(cols) {
    var foot = '<tfoot>\n';
    cols.forEach((col, i) => {
      foot += `<th>${col.title}</th>\n`
    });
    return foot + '</tfoot>'
  }

  function getColMap(cols) {
    var colMap = new Map();
    cols.forEach((col, i) => { colMap.set(col.title, i) });
    return colMap;
  }

  function initVue() {
    Vue.component('news-item', {
      props: ['item'],
      template: '<div class="news-item">' +
                '  <span><a :href="item.link">{{ item.title }}</a></span>' +
                '  <small>{{ item.date }}</small>' +
                '</div>'
    });
  }

  return {
    getColDefs : getColDefs,
    getColFoot : getColFoot,
    getColMap  : getColMap,
    initVue    : initVue,
    sortByCol  : sortByCol,
    sortByProp : sortByProp,
  };

})();
