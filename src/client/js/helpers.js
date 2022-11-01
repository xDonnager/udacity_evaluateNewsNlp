// URL validation
function validateUrl(inputText) {
  if (inputText.trim().length === 0) return false;
  const regexUrl =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return regexUrl.test(inputText);
}

// Formatting and UI elements
function showAlertInvalidInput() {
  return (document.querySelector(".field__info").style.display = "block");
}
function hideAlertInvalidInput() {
  return (document.querySelector(".field__info").style.display = "none");
}

function prettyAnalysis(analysis) {
  const { scoreTag, subjectivity, sentences } = analysis;
  const fragment = document.createDocumentFragment();

  const scoreTagTitle = document.createElement("h3");
  scoreTagTitle.innerText = `🧭 Polarity - ${capitalizeFirstLetter(scoreTag)}`;
  fragment.appendChild(scoreTagTitle);

  const subjectivityTitle = document.createElement("h3");
  subjectivityTitle.innerText = `🌗 Subjectivity - ${capitalizeFirstLetter(
    subjectivity
  )}`;
  fragment.appendChild(subjectivityTitle);

  const sentenceList = document.createElement("ul");

  analysis.sentences.forEach((sentence) => {
    const li = document.createElement("li");
    li.innerText = `★ ${sentence}`;
    sentenceList.appendChild(li);
  });
  fragment.appendChild(sentenceList);
  document.getElementById("results").appendChild(fragment);
}

function clearPreviousAnalysis() {
  document.getElementById("results").innerHTML = "";
}

function resetForm() {
  document.getElementById("url").value = "";
}

function changeButtonStatus(action) {
  if (action === "disable") {
    document.getElementById("analyse").disabled = true;
  } else {
    document.getElementById("analyse").disabled = false;
  }
}

function renderMsg(type){
  const divWtf = document.createElement("div");
  if(type == "wtf"){
    //divWtf.innerHTML= "¯\\ _ (ツ) _ /¯";
    divWtf.innerHTML= "<p>¯\\ _ (ツ) _ /¯</p><p>Try analysing something else</p>";
  } else {
    divWtf.innerHTML = "<p>(*ﾟOﾟ*)</p><p>Ooops... something went wrong</p>";
  }

  divWtf.style.textAlign = "center";
  divWtf.style.marginTop = "3rem";
  document.getElementById("results").appendChild(divWtf);
}

// Aux
const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export {
  validateUrl,
  showAlertInvalidInput,
  hideAlertInvalidInput,
  prettyAnalysis,
  clearPreviousAnalysis,
  resetForm,
  changeButtonStatus,
  renderMsg
};
