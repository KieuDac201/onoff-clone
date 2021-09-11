const filterProductType = (filterList, arrProductGender) => {
  let arr = [];
  for (let key in filterList) {
    if (filterList[key]) {
      const arrayFilter = arrProductGender.filter(
        (product) => product.type.toLowerCase() === key
      );
      arr.push(...arrayFilter);
    }
  }
  return arr;
};

export default filterProductType;
