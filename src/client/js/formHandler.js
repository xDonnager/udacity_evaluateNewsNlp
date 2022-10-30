function handleSubmit(event) {
  event.preventDefault();
  clearPreviousAnalysis();

  // check what text was put into the form field
  let formInputUrl = document.getElementById("url").value;
  const validUrl = Client.validateUrl(formInputUrl);

  if (validUrl) {
    changeButtonStatus("disable")
    const body = { srcUrl: formInputUrl };

    console.log("::: Form Submitted :::");
    fetch("http://localhost:8081/sentiment", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        prettyAnalysis(res);
        resetForm();
        changeButtonStatus("enable")
      })
      .catch((err) => console.log(err));

  } else {
    showAlertInvalidInput();
    setTimeout(() => {
      hideAlertInvalidInput();
    }, 3000);
  }
}

function showAlertInvalidInput() {
  return (document.querySelector(".field__info").style.display = "block");
}
function hideAlertInvalidInput() {
  return (document.querySelector(".field__info").style.display = "none");
}

function prettyAnalysis(analysis) {
  const { scoreTag, subjectivity, sentences } = analysis;
  const fragment = document.createDocumentFragment();

  const scoreTagTitle = document.createElement("h2");
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
    li.innerText = sentence;
    sentenceList.appendChild(li);
    console.log(li);
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

function changeButtonStatus(action){
    if( action === "disable"){
        document.getElementById('analyse').disabled = true;
    } else {
        document.getElementById('analyse').disabled = false;
    }

}

const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};
export { handleSubmit };
