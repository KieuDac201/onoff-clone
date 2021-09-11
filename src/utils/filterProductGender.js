const filterProductGender = (products, gender) => {
  let arr = products.filter(
    (product) => product.gender.toLowerCase() === gender
  );
  return arr;
};

export default filterProductGender;
