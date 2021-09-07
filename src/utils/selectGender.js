const selectGender = (path) => {
  let genderStr = "";
  if (path === "/do-nam") {
    genderStr = "nam";
  }
  if (path === "/do-nu") {
    genderStr = "nữ";
  }
  if (path === "/do-tre-em") {
    genderStr = "trẻ em";
  }
  return genderStr;
};

export default selectGender;
