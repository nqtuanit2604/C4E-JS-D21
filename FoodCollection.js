let names = "";
let newcreate = {
  name: " ",
  username: " ",
  password: " ",
};

var slideIndex = 1;
showSlides(slideIndex);
readonly();
showSlides();
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

let btn_Search = document.getElementById("s");
btn_Search.addEventListener("click", () => {
  window.open("search.html", "_blank");
  sessionStorage.setItem("category", " ");
  sessionStorage.setItem("user", names);
});
let btn_Contact = document.getElementById("c");
btn_Contact.addEventListener("click", () => {
  window.open("contact.html", "_blank");
});
let btn_Home = document.getElementById("h");
btn_Home.addEventListener("click", () => {
  window.open("FoodCollection.html", "_blank");
});

// Thumbnail image controls

function readonly() {
  document.getElementsByClassName("content")[0].style.display = `none`;
  document.getElementsByClassName("listfood")[0].style.display = `none`;
  document.getElementsByClassName("footer")[0].style.display = `none`;
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

///////////////////////////////////////////////////////

let btn_main = document.getElementById("head-button");
//in login box

// F5 thì nó show ra cái form bắt login trước
window.addEventListener("load", () => {
  showloginbox1();
});

// Click button login thì nó show ra cái form bắt login trước
btn_main.addEventListener("click", () => {
  showloginbox1();
});

let alink1 = document.getElementById("link1");
let alink2 = document.getElementById("link2");
let alink3 = document.getElementById("link3");

alink1.addEventListener("click", () => {
  window.open(
    "search.html",
    "_blank" // <- This is what makes it open in a new window.
  );
  sessionStorage.clear();
  sessionStorage.setItem("category", "1");
});

alink2.addEventListener("click", () => {
  window.open(
    "search.html",
    "_blank" // <- This is what makes it open in a new window.
  );
  sessionStorage.setItem("category", "2");
});

alink3.addEventListener("click", () => {
  window.open(
    "search.html",
    "_blank" // <- This is what makes it open in a new window.
  );
  sessionStorage.setItem("category", "3");
});
//hidden and show loginbox
function showloginbox1() {
  document.getElementsByClassName("content")[0].style.display = `none`;
  document.getElementsByClassName("listfood")[0].style.display = `none`;
  document.getElementsByClassName("footer")[0].style.display = `none`;
  document.getElementsByClassName("login-box")[0].style.display = `block`;
  document.getElementsByClassName("create-box")[0].style.display = `none`;
}

function showloginbox2() {
  document.getElementsByClassName("content")[0].style.display = `block`;

  document.getElementsByClassName("listfood")[0].style.display = `flex`;

  document.getElementsByClassName("footer")[0].style.display = `flex`;

  document.getElementsByClassName("login-box")[0].style.display = `none`;
  document.getElementsByClassName("create-box")[0].style.display = `none`;
}

function showloginbox3() {
  document.getElementsByClassName("create-box")[0].style.display = `flex`;
  document.getElementsByClassName("content")[0].style.display = `none`;

  document.getElementsByClassName("listfood")[0].style.display = `none`;

  document.getElementsByClassName("footer")[0].style.display = `none`;

  document.getElementsByClassName("login-box")[0].style.display = `none`;
  document.getElementsByClassName("create-box")[0].style.display = `block`;
}

let loginbox_btn = document.getElementById("loginbox_btn");
loginbox_btn.addEventListener("click", () => {
  let url = "https://5fc3297b9210060016869f42.mockapi.io/api/user";

  let username = "";
  let password = "";
  fetch(url)
    .then((resonse) => {
      return resonse.json();
    })
    .then((user) => {
      username = user[0].username;
      password = user[0].password;
      let login_username = document.getElementById("username");
      let login_password = document.getElementById("password");

      if (
        username == login_username.value.trim() &&
        password == login_password.value.trim()
      ) {
        showloginbox2();
        document.getElementById("head-button").style.display = `none`;
        document.getElementById("head-label").innerText =
          `welcome my friend: ` + user[0].name;
        document.getElementById("head-label").style.visibility = `visible`;
        sessionStorage.setItem("name", user[0].name);
        names = user[0].name;
        console.log(user[0].name);
      } else {
        login_username.value = ` `;
        login_password.value = ` `;
        document.getElementById("error").style.display = `block`;
      }
    });
});
let btn_Create = document.getElementById("create_btn");
btn_Create.addEventListener("click", () => {
  showloginbox3();
});
let btn_Create_Login = document.getElementById(`create-boxbtn`);
btn_Create_Login.addEventListener("click", () => {
  newcreate.name = document.getElementById(`name`).value.trim();
  newcreate.username = document.getElementById(`username`).value.trim();
  newcreate.password = document.getElementById(`password`).value.trim();
  document.getElementById("head-button").style.display = `none`;
  document.getElementById("head-label").innerText =
    `welcome my friend: ` + newcreate.name;
  document.getElementById("head-label").style.visibility = `visible`;
  showloginbox2();
});
