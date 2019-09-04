var bao = bao || {};

bao.util = (() => {
  /**
   * @param {Array.Array} list array of array
   * @param {number} i index of column
   * @return {Array.Array} sorted array
   */
  function sortByCol(list, i, reverse) {
    list.sort((a, b) => {
      if (a[i] < b[i]) {
        return -1;
      } else if (a[i] > b[i]) {
        return 1;
      }

      return 0;
    });

    if (reverse) {
      list.reverse();
    }

    return list;
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

      if (col.decimal) {
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

  function initVue() {
    Vue.component('news-item', {
      props: ['item'],
      template: '<div class="media justify-content-between py-3 border-bottom border-gray">' +
                '  <span class="text-gray-dark"><a :href="item.link">{{ item.title }}</a></span>' +
                '  <small>{{ item.date }}</small>' +
                '</div>'
    });
  }

  return {
    initVue    : initVue,
    getColDefs : getColDefs,
    sortByCol  : sortByCol,
  };

})();
