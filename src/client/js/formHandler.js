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
    fetch("http://localhost:8081/sentiment", {
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
      .catch((err) => console.log(err));

  } else {
    Client.showAlertInvalidInput();
    Client.renderWtf();
    setTimeout(() => {
      Client.hideAlertInvalidInput();
    }, 3000);
  }
}


export { handleSubmit };
