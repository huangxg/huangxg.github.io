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

  return {
    sortByCol : sortByCol,
  };

})();
