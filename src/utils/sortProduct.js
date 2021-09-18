const sortProduct = (productSort, arrProduct) => {
  let arr;
  if (productSort === "increment") {
    arr = arrProduct.sort((a, b) => a.price - b.price);
  }
  if (productSort === "decrement") {
    arr = arrProduct.sort((a, b) => b.price - a.price);
  }
  if (productSort === "") {
    arr = arrProduct.sort((a, b) => 0.5 - Math.random());
  }
  return arrProduct;
};
