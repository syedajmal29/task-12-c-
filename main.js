async function emoji(category) {
  try {
    emojis.innerHTML = "";
    let data = await fetch(
      `https://emojihub.yurace.pro/api/all/category/${category}`
    );
    let result = await data.json();
    console.log(result);
    result.forEach((element) => {
      var div = document.createElement("div");
      div.setAttribute(
        "style",
        "width: 100px;height:100px;border-radius: 30px;"
      );
      div.setAttribute("class", "m-3");
      var button = document.createElement("button");
      button.setAttribute("class", "btn");
      button.setAttribute("style", "position: relative; top: 40%; left: 40%;");
      button.setAttribute("data-bs-toggle", "tooltip");
      button.setAttribute("data-bs-placement", "top");
      button.setAttribute("data-bs-title", "Copy");
      button.innerHTML = element.htmlCode[0];

      var emojis = document.getElementById("emojis");
      emojis.appendChild(div);
      div.appendChild(button);

      button.onclick = () => {
        navigator.clipboard
          .writeText(element.htmlCode[0])
          .then(function () {})
          .catch(function (error) {
            console.error("Failed to copy text: ", error);
          });
      };
    });

    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  } catch (err) {
    console.log(err);
  }
}
