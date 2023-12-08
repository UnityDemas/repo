let purchased = [];
let products = JSON.parse(localStorage.getItem("storage"));
//main is used to call the tag so u can display the items in there
let main = document.querySelector("main");
//function addtopage will render the items that are in local storage
function addToPage(product) {
  if (product.length === 0) {
    main.innerHTML = "<p>no items found</p>";
    //when item does not appear inside the array
  } else {
    //The items will appear on the main
    main.innerHTML = product
      .map((item, index) => {
        return `
     
     <div class="div shoe-section"  data-brand ='${item.brand}'>
         <img class="image" src="${item.url}" alt="${item.brand}">
         <h2 class="h2">${item.brand}</h2>
         <p class="p">${item.description}</p>
         <p class="p">R${item.price}</p>
         <button class="cart" value="${index}" data-add>Add to Cart</button>
     </div>
    
     `;
      })
      .join("");
  }
}

// addToPage(products)
//if the products is empty a spinner will appear
if (products.length === 0) {
  main.innerHTML = `<div id="cen">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
  `;
} else {
  addToPage(products);
}

//this function will run if items you search for are in the array
function search() {
  let search = document.getElementById("input").value.toLowerCase();
  let filter = products.filter((item) => {
    return item.brand.toLowerCase().includes(search);
  });
  addToPage(filter);
}

document.getElementById("input").addEventListener("input", search);
//this will sort the prices from high to low or low to high
function sort() {
  let sort = document.getElementById("select").value;
  let filter = products.filter((item) => {
    return item.brand.toLowerCase();
  });
  if (sort === "least") {
    filter.sort((a, b) => a.price - b.price);
  } else {
    filter.sort((a, b) => b.price - a.price);
  }
  addToPage(filter);
}

document.getElementById("select").addEventListener("change", sort);

// Function to show or hide sections based on the selected brand
function showShoes(brand) {
  // Hide all sections
  hideAllSections();

  // Show only the selected brand or all shoes
  if (brand === "all") {
    showAllSections();
  } else {
    showSelectedBrandSections(brand);
  }
}

// Function to hide all sections
function hideAllSections() {
  let allSections = document.querySelectorAll(".shoe-section, .main-section");
  allSections.forEach(function (section) {
    section.style.display = "none";
  });
}

// Function to show all sections
function showAllSections() {
  let allSections = document.querySelectorAll(".shoe-section, .main-section");
  allSections.forEach(function (section) {
    section.style.display = "block";
  });
}

// Function to show sections of the selected brand
function showSelectedBrandSections(brand) {
  let selectedBrandSections = document.querySelectorAll(
    '.shoe-section[data-brand="' + brand + '"]'
  );
  selectedBrandSections.forEach(function (section) {
    section.style.display = "block";
  });
}

// Initialize display when the page loads
window.onload = function () {
  showAllSections(); 
};

// Event listeners for brand links
document.getElementById("allShoesLink").addEventListener("click", function () {
  hideAllSections();
  showAllSections();
  showShoes("all");
});

document.getElementById("adidasLink").addEventListener("click", function () {
  hideAllSections();
  showShoes("adidas");
});

document.getElementById("converseLink").addEventListener("click", function () {
  showShoes("converse");
});

document.getElementById("pumaLink").addEventListener("click", function () {
  showShoes("puma");
});
document.getElementById("nikeLink").addEventListener("click", function () {
  showShoes("Nike");
});
document.getElementById("vanLink").addEventListener("click", function () {
  showShoes("vans");
});

// function to add items to the cart in localstorage
function addToCart(index) {
  purchased.push(products[index]);
  localStorage.setItem("bought", JSON.stringify(purchased));
}

main.addEventListener("click", function name(event) {
  if (event.target.hasAttribute("data-add")) {
    addToCart(event.target.value);
  }
});
