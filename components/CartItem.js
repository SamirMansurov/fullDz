function CartItem(item) {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.alt = item.title;
    productDiv.append(productImage);

    const productName = document.createElement("p");
    productName.className = "product-name";
    productName.innerHTML = item.category;
    productDiv.append(productName);

    const quantityDiv = document.createElement("div");
    quantityDiv.className = "quantity";

    const minusButton = document.createElement("button");
    minusButton.innerHTML = "-";
    minusButton.classList.add('btn_minus');
    minusButton.onclick = function () {
        decreaseQuantity();
    };

    const quantitySpan = document.createElement("span");
    quantitySpan.innerHTML = "1";

    const plusButton = document.createElement("button");
    plusButton.innerHTML = "+";
    plusButton.classList.add('btn_plus');
    plusButton.onclick = function () {
        increaseQuantity();
    };

    quantityDiv.append(minusButton, quantitySpan, plusButton);

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";

    const productPrice = document.createElement("div");
    productPrice.className = "price";
    productPrice.innerHTML = item.price;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = function () {
        productDiv.remove();
    };

    detailsDiv.append(productPrice, removeButton);
    productDiv.append(quantityDiv, detailsDiv);

    function increaseQuantity() {
        let currentQuantity = parseInt(quantitySpan.innerHTML);
        currentQuantity++;
        quantitySpan.innerHTML = currentQuantity;
        updatePrice(currentQuantity);
    }

    function decreaseQuantity() {
        let currentQuantity = parseInt(quantitySpan.innerHTML);
        if (currentQuantity > 1) {
            currentQuantity--;
            quantitySpan.innerHTML = currentQuantity;
            updatePrice(currentQuantity);
        }
    }

    function updatePrice(quantity) {
        productPrice.innerHTML = quantity * item.price;
    }

    return productDiv;
}
