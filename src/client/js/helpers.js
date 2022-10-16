function validateUrl(inputText) {
  console.log("::: Running validateUrl :::", inputText);
  if (inputText.trim().length === 0) return false;
  const regexUrl =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return regexUrl.test(inputText);
}   

export { validateUrl };
