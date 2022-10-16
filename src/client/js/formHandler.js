function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  const body = { srcUrl: formText };

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/sentiment", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    })
    .catch((err) => console.log(err));
}


export { handleSubmit };
