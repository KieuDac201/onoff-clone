const selectProductWithGender = (products, gender) => {
  let arr = [];
  arr = products.filter((product) => product.gender.toLowerCase() === gender);
  return arr;
};

export default selectProductWithGender;
