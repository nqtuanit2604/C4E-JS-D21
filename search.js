load_name(load_page(sessionStorage.getItem("category")));

let btn_Search = document.getElementById("s");
btn_Search.addEventListener("click", () => {
  window.open(
    "search.html",
    "_blank" // <- This is what makes it open in a new window.
  );
  sessionStorage.getItem("category", " ");
  sessionStorage.setItem("user", names);
});

let btn_Contact = document.getElementById("c");
btn_Contact.addEventListener("click", () => {
  window.open(
    "contact.html",
    "_blank" // <- This is what makes it open in a new window.
  );
});

let btn_Home = document.getElementById("h");
btn_Home.addEventListener("click", () => {
  window.open(
    "FoodCollection.html",
    "_blank" // <- This is what makes it open in a new window.
  );
});

let btn = document.getElementById("button");
btn.addEventListener("click", () => {
  let input = document.getElementById("food-input").value;
  document.getElementById("fu").innerHTML = " ";
  load_input(input);
});

function load_name() {
  document.getElementById("head-label").innerText =
    `welcome my friend: ` + sessionStorage.getItem("name");
}
function load_page(category) {
  let url = "https://5fc0ed85cb4d020016fe6118.mockapi.io/api/VietnamFood_API";

  fetch(url)
    .then((resonse) => {
      return resonse.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++)
        if (data[i].category == category) {
          document
            .getElementById("fu")
            .insertAdjacentHTML(
              "beforeend",
              generateResultBox(
                data[i].name,
                data[i].image,
                data[i].area,
                data[i].description
              )
            );
        }
    });
}
function load_input(input) {
  let url = "https://5fc0ed85cb4d020016fe6118.mockapi.io/api/VietnamFood_API";

  fetch(url)
    .then((resonse) => {
      return resonse.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let jsonFood = data[i].name;
        jsonFood = jsonFood.toLowerCase();
        console.log(data[i].name, input);
        if (jsonFood.includes(input.trim()) == true) {
          document
            .getElementById("fu")
            .insertAdjacentHTML(
              "beforeend",
              generateResultBox(
                data[i].name,
                data[i].image,
                data[i].area,
                data[i].description
              )
            );
        } else {
        }
      }
    });
}

function generateResultBox(name, icon, area, description) {
  return ` 
      <div class="box">
      <ul> 
          <h1>${name}</h1>
          <li> <img  class="img" src="${icon}" ></li>
          <li> <b> Xuất Xứ: ${area}</b></li>
          <li> <p>${description}</p></li>  
   </ul>
   </div>`;
}
