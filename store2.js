var categoriesRendered = false; // Bandera para controlar si las categorías ya han sido renderizadas

function renderCategories() {
  var categoriesList = document.getElementById("categories-list");

  if (categoriesRendered) {
    return; // Retornar si las categorías ya han sido renderizadas
  }

  var categories = [
    {
      name: "ALFAJORES",
      image: "assets/categorias/alfajores.jpg",
    },
    {
      name: "GOMITAS",
      image: "assets/categorias/gomitas.jpg",
    },
    {
      name: "CHOCOLATES",
      image: "assets/categorias/chocolates.jpg",
    },
    {
      name: "CARAMELOS",
      image: "assets/categorias/caramelos.jpg",
    },
    {
      name: "GASEOSAS",
      image: "assets/categorias/gaseosas.jpg",
    },
    {
      name: "CHICLES",
      image: "assets/categorias/chicles.jpg",
    },
    
    
  ];

  for (var i = 0; i < categories.length; i++) {
    var category = categories[i];

    var categoryContainer = document.createElement("div");
    categoryContainer.className = "category";
    categoryContainer.id = "category-" + category.name.toLowerCase();

    var categoryImage = document.createElement("img");
    categoryImage.src = category.image;
    categoryImage.alt = category.name;
    categoryImage.className = "category-image";

    var categoryName = document.createElement("h3");
    categoryName.textContent = category.name;
    categoryName.className = "category-name";

    var categoryContent = document.createElement("div");
    categoryContent.className = "category-content";

    categoryContent.appendChild(categoryImage);
    categoryContent.appendChild(categoryName);
    categoryContainer.appendChild(categoryContent);
    categoriesList.appendChild(categoryContainer);

    categoryContainer.addEventListener("click", function () {
      var categoryName = this.id.replace("category-", "");
      console.log("Categoría seleccionada: " + categoryName);
      renderProducts(categoryName);
      categoriesList.innerHTML = ""; // Eliminar las categorías una vez seleccionada una
      categoriesRendered = false; // Restablecer la bandera para permitir la renderización de las categorías nuevamente
    });
  }
  categoriesRendered = true; 
}


  // Establecer la bandera en true después de renderizar las categorías por primera vez




  function renderProducts(categoryName) {
    var productsList = document.getElementById("products-list");
    productsList.innerHTML = "";

    if (!categoryName) {
        return; // Retornar si no se proporciona una categoría
      }
  
    fetch("jsons/products.json")
    .then(response => response.json())
    .then(products => {
      var filteredProducts = products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());

      for (var i = 0; i < filteredProducts.length; i++) {
        var product = filteredProducts[i];
  
          var productContainer = document.createElement("div");
          productContainer.className = "product-container";
  
          var productImage = document.createElement("img");
          productImage.src = product.image;
          productImage.alt = product.name;
  
          var productCategory = document.createElement("p");
          productCategory.className = "product-category";
          productCategory.textContent = product.category;
  
          var productName = document.createElement("p");
          productName.innerHTML = "<strong>" + product.name + "</strong>";
  
          var productStock = document.createElement("p");
          productStock.textContent = "Stock: " + product.stock;
  
          var productPrice = document.createElement("p");
          productPrice.textContent = "$" + product.price.toFixed(2);
  
          var counterContainer = document.createElement("div");
          counterContainer.className = "counter-container";
          
          var decreaseButton = document.createElement("button");
          decreaseButton.textContent = "-";
          decreaseButton.className = "counter-button";
          
          var countDisplay = document.createElement("span");
          countDisplay.textContent = "0";
          countDisplay.className = "counter-display";
          
          var increaseButton = document.createElement("button");
          increaseButton.textContent = "+";
          increaseButton.className = "counter-button";
          
          decreaseButton.addEventListener("click", function () {
            var count = parseInt(this.nextSibling.textContent);
            if (!isNaN(count) && count > 0) {
              this.nextSibling.textContent = (count - 1).toString();
            }
          });
          
          increaseButton.addEventListener("click", function () {
            var count = parseInt(this.previousSibling.textContent);
            if (!isNaN(count)) {
              this.previousSibling.textContent = (count + 1).toString();
            }
          });
          
          var addToCartButton = document.createElement("button");
          addToCartButton.textContent = "Agregar al pedido";
          addToCartButton.className = "add-to-cart-button";
          
          productContainer.appendChild(productImage);
          productContainer.appendChild(productCategory);
          productContainer.appendChild(productName);
          productContainer.appendChild(productStock);
          productContainer.appendChild(productPrice);
          counterContainer.appendChild(decreaseButton);
          counterContainer.appendChild(countDisplay);
          counterContainer.appendChild(increaseButton);
          productContainer.appendChild(counterContainer);
          productContainer.appendChild(addToCartButton);
  
          productsList.appendChild(productContainer);
        }
      })
      .catch(error => {
        console.error("Error al cargar los productos:", error);
      });
  }
  
  renderCategories();
  renderProducts(""); // Renderizar todos los productos al cargar la página
  