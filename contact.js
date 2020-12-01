let button = document.getElementById("button");
button.addEventListener("click", () => {
  let result = document.getElementById("result");
  result.innerHTML = "SUBMIT THÀNH CÔNG !";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
});

function pageRedirect() {
  window.location.replace("search.html");
}
setTimeout("pageRedirect()", 6000);
