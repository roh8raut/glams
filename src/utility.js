export const isEmailValid = (value) => {
  const emailRegex = new RegExp(
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z\-.]{3,10})\.([a-zA-Z]{2,5})$/
  );
  if (emailRegex.test(value)) {
    return true;
  }
  return false;
};
