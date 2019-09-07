var bao = bao || {};

bao.util = (() => {
  function clone(array) {
    return JSON.parse(JSON.stringify(array));
  }

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

  function getColDefs(cols, addIndexCol) {
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

    if (addIndexCol) {
      colDefs.push({
        "targets": 0,
        "orderable": false,
        "searchable": false,
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

  function datatable(tableId, tableData, options, addIndexCol) {
    var cols = bao.util.clone(tableData.cols),
        data = bao.util.clone(tableData.data),
        $table = $(`#${tableId}`);

    if (addIndexCol) {
      cols.unshift({ title: '', align: 'center' });
      data.forEach(row => { row.unshift(''); });
    }

    $table.append(bao.util.getColFoot(cols));

    var tableOpts = {
      columns    : cols,
      columnDefs : bao.util.getColDefs(cols, addIndexCol),
      data       : data,
      language   : { url: "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Chinese.json" },
      pageLength : 100,
    }
    if (addIndexCol) {
      tableOpts.order = [[ 1, 'asc' ]];
    }
    Object.assign(tableOpts, options);
    var table = $table.DataTable(tableOpts);

    if (addIndexCol) {
      table.on( 'order.dt search.dt', () => {
        table.column(0, { search: 'applied', order: 'applied' })
          .nodes().each((cell, i) => {
          cell.innerHTML = i + 1;
        });
      }).draw();
    }
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
    clone      : clone,
    datatable  : datatable,
    getColDefs : getColDefs,
    getColFoot : getColFoot,
    getColMap  : getColMap,
    initVue    : initVue,
    sortByCol  : sortByCol,
    sortByProp : sortByProp,
  };

})();
