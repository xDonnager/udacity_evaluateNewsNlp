const hostname = process.env.HOSTNAME || `http://localhost:8081`

function handleSubmit(event) {
  event.preventDefault();
  Client.clearPreviousAnalysis();

  // check what text was put into the form field
  let formInputUrl = document.getElementById("url").value;
  const validUrl = Client.validateUrl(formInputUrl);

  if (validUrl) {
    Client.changeButtonStatus("disable")
    const body = { srcUrl: formInputUrl };

    console.log("::: Form Submitted :::");
    fetch(`https://nlp-news-app-analyse.herokuapp.com/sentiment`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Client.prettyAnalysis(res);
        Client.resetForm();
        Client.changeButtonStatus("enable")
      })
      .catch((err) => {
        Client.renderMsg("err");
        throw err;
      });

  } else {
    Client.showAlertInvalidInput();
    Client.renderMsg("wtf");
    setTimeout(() => {
      Client.hideAlertInvalidInput();
    }, 3000);
  }
}


export { handleSubmit };
