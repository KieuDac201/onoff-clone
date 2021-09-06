const handleFilterProductCate = (
  filterList,
  products,
  setProductsFiltered,
  gender
) => {
  let tempArr = [];
  for (let key in filterList) {
    if (filterList[key]) {
      let arr = products.filter(
        (product) =>
          product.type.toLowerCase() === key &&
          product.gender.toLowerCase() === gender
      );

      tempArr.push(...arr);
    }
  }
  if (!tempArr.length) {
    tempArr = products.filter(
      (product) => product.gender.toLowerCase() === gender
    );
  }

  setProductsFiltered(tempArr);
};

export default handleFilterProductCate;
