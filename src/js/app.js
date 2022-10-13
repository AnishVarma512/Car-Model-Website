// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

window.onload = () => {
  let name = prompt("Please enter your name:");
  let text = "";
  let buttons = document.querySelector("#menu");
  let welcomeHeader = document.querySelector("#welcome");

  categories.forEach((element, index) => {
    buttons.innerHTML += `<a onclick = 'catDecider${index + 1}()'>  ${element.name}  </a>`;
  });

  catDecider1();

  if (name === null || name === "") {
    text = "Hello User";
  } else {
    text = "Welcome " + name;
  }
  welcomeHeader.innerHTML = text;

  console.log("The page has fully loaded");
};

/*FUNCTIONS------------------------------------------------*/

function catDecider1() {
  let tableBody = document.querySelector("#category-products");
  let menuHeader = document.querySelector("#menu-header");
  tableBody.innerHTML = "";
  menuHeader.innerHTML = `${categories[0].name}`;
  products.forEach((element) => {
    if (element.categories.includes("c1") && !element.discontinued) {
      tableBody.innerHTML += `<tr><td>${element.title}</td> <td>${element.description}</td> <td>$${element.price}</td></tr>`;
    }
  });
}
// eslint-disable-next-line no-unused-vars
function catDecider2() {
  let tableBody = document.querySelector("#category-products");
  let menuHeader = document.querySelector("#menu-header");
  tableBody.innerHTML = "";
  menuHeader.innerHTML = `${categories[1].name}`;
  products.forEach((element) => {
    if (element.categories.includes("c2") && !element.discontinued) {
      tableBody.innerHTML += `<tr><td>${element.title}</td> <td>${element.description}</td> <td>$${element.price}</td></tr>`;
    }
  });
}
// eslint-disable-next-line no-unused-vars
function catDecider3() {
  let tableBody = document.querySelector("#category-products");
  let menuHeader = document.querySelector("#menu-header");
  tableBody.innerHTML = "";
  menuHeader.innerHTML = `${categories[2].name}`;
  products.forEach((element) => {
    if (element.categories.includes("c3") && !element.discontinued) {
      tableBody.innerHTML += `<tr><td>${element.title}</td> <td>${element.description}</td> <td>$${element.price}</td></tr>`;
    }
  });
}

// eslint-disable-next-line no-unused-vars
function catDecider4() {
  let tableBody = document.querySelector("#category-products");
  let menuHeader = document.querySelector("#menu-header");
  tableBody.innerHTML = "";
  menuHeader.innerHTML = `${categories[3].name}`;
  products.forEach((element) => {
    if (element.categories.includes("c4") && !element.discontinued) {
      tableBody.innerHTML += `<tr><td>${element.title}</td> <td>${element.description}</td> <td>$${element.price}</td></tr>`;
    }
  });
}

// eslint-disable-next-line no-unused-vars
function catDecider5() {
  let tableBody = document.querySelector("#category-products");
  let menuHeader = document.querySelector("#menu-header");
  tableBody.innerHTML = "";
  menuHeader.innerHTML = `${categories[4].name}`;
  products.forEach((element) => {
    if (element.categories.includes("c5") && !element.discontinued) {
      tableBody.innerHTML += `<tr><td>${element.title}</td> <td>${element.description}</td> <td>$${element.price}</td></tr>`;
    }
  });
}

/*FUNCTIONS-END------------------------------------------------*/
