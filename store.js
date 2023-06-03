function renderProducts() {
    var productsList = document.getElementById("products-list");

    var products = [
        {
            name: "Bon o Bon negro",
            stock: 10,
            price: 250,
            image: "assets/productos/alfajores/bonobon.png",
            category: "Alfajores"
        },
        {
            name: "Bon o Bon blanco",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/bonobon-blanco.png",
            category: "Alfajores"
        },
        
        {
            name: "Cofler Block",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/cofler-block.png",
            category: "Alfajores"
        },
        {
            name: "Tofi negro",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/tofi-triple.png",
            category: "Alfajores"
        },
        {
            name: "Tofi blanco",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/tofi-triple-blanco.png",
            category: "Alfajores"
        },
        {
            name: "Mini torta Aguila",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/aguila-minitorta.png",
            category: "Alfajores"
        },
        {
            name: "Mini torta Brownie Aguila",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/aguila-minitorta-brownie.png",
            category: "Alfajores"
        },
        {
            name: "Mini torta Coco Aguila",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/aguila-minitorta-coco.png",
            category: "Alfajores"
        },
        {
            name: "Mini torta Blanco Aguila",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/aguila-minitorta-blanco.png",
            category: "Alfajores"
        },
       
        
        {
            name: "Tatin negro",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/tatin-negro.png",
            category: "Alfajores"
        },
        {
            name: "Tatin blanco",
            stock: 5,
            price: 270,
            image: "assets/productos/alfajores/tatin-blanco.png",
            category: "Alfajores"
        },
        
        // Agrega más productos aquí
    ];

    for (var i = 0; i < products.length; i++) {
        var product = products[i];

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

        decreaseButton.addEventListener("click", function() {
            var count = parseInt(this.nextSibling.textContent);
            if (!isNaN(count) && count > 0) {
                this.nextSibling.textContent = (count - 1).toString();
            }
        });

        increaseButton.addEventListener("click", function() {
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
        productContainer.appendChild(counterContainer);
        productContainer.appendChild(addToCartButton);

        productsList.appendChild(productContainer);
    }
}

renderProducts();



///// BANNER

function renderBanner() {
    var bannerContainer = document.getElementById("banner");
  
    var bannerImage = document.createElement("img");
    bannerImage.src = "assets/banners/alfajores.jpg";
    bannerImage.alt = "Banner";
  
    bannerImage.style.width = "100%";
    bannerImage.style.height = "500px";
    bannerImage.style.objectFit = "cover";
    bannerImage.style.objectPosition = "center";
  
    var textContainer = document.createElement("div");
    textContainer.style.position = "absolute";
    textContainer.style.top = "45%";
    textContainer.style.left = "50%";
    textContainer.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    textContainer.style.transform = "translate(-50%, -50%)";
    textContainer.style.textAlign = "center";
    textContainer.style.zIndex = "1";
  
    var text = document.createElement("p");
    text.textContent = "ALFAJORES";
    text.style.color = "#FFFFFF";
    text.style.fontSize = "70px";
    text.style.letterSpacing = "2px";
  
    textContainer.appendChild(text);
    bannerContainer.appendChild(bannerImage);
    bannerContainer.appendChild(textContainer);
  }
  
  renderBanner();
  