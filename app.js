const message_btn = document.getElementById("submit_btn");

message_btn.addEventListener("click", (e) => {
  e.preventDefault();

  const message = document.querySelector(".box").value;

  if (message == "") {
    document.querySelector(".feedback").style.display = "flex";
    const message_placeholder = (document.querySelector(
      ".message-content"
    ).innerHTML = "");
  } else {
    document.querySelector(".feedback").style.display = "none";
    const message_placeholder = (document.querySelector(
      ".message-content"
    ).innerHTML = message);
  }
});
