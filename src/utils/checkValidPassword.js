const checkValidPassword = (email) => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(String(email).toLowerCase());
};

export default checkValidPassword;
