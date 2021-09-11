const filterProductSearch = (products, querySearch) => {
  let arrProductSearch = products.filter(
    (product) =>
      product.name.toLowerCase().includes(querySearch.trim().toLowerCase()) ||
      product.type.toLowerCase().includes(querySearch.trim().toLowerCase()) ||
      product.gender.toLowerCase().includes(querySearch.trim().toLowerCase())
  );
  return arrProductSearch;
};

export default filterProductSearch;
