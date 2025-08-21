function removeCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === id);

    if (index == -1) {
        let itemDisplay = document.getElementById("productDetails");
        itemDisplay.innerHTML = "your cart is empty";

    } else {
        console.log("there is something in the cart");
        console.log(index);
    }
    //   return;

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    //   update remaining items in the cart by reloading;
    window.location.href = 'cart.html'
}

// to update each item quantity
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateQuantity(itemId, newQuantity) {
    // to find the item in the cart
    const item = cart.find((item) => item.id === itemId);
    if (item) {
        // update item quantity
        item.quantity = newQuantity;
        console.log(newQuantity);

        //    update UI
        const elementQuantity = document.getElementById("quantity-${itemId}");
        if (elementQuantity) {
            elementQuantity.textContent = item.quantity;
            console.log(newQuantity);
        }
    }
}

// event listener to update quantity

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("increment-btn")) {
        const itemId = parseInt(event.target.dataset.itemId);
        const item = cart.find((item) => item.id === itemId);
        if (item) {
            updateQuantity(itemId, item.quantity + 1);
        }
    }
});

// To display cart item(s)
const cartProducts = JSON.parse(localStorage.getItem("cart"));
//   console.log(JSON.parse(productsClicked));
cartProducts.map((item, index) => {
    let itemDisplay = document.getElementById("productDetails");
    let aboutItem = document.createElement("div");
    aboutItem.setAttribute("id", "aboutItem");
    aboutItem.innerHTML = `
              <div class="product">
              <img
                src="${item.images[0]}"
                alt=""
              />
            </div>
            <div class="about">
              <div class="desc">
                <h3 class="productDescription">${item.price}</h3>
                            <span id="price"> price for ${item.quantity}= $${item.price * item.quantity
        }   </span>
              </div>
              <p>price per item: $${item.price}</p>
  
              <p class="colour">colour:</p>
              <p id="variant">variant:</p>
              <div class="quantity">
                <div class="length">
                  <span class="reduce">-</span>
                  <span id="quantity-${item.id}">${item.quantity}</span>
                  <button class="increment-btn" data-item-id="${item.id
        }">+</button>
                <div class="icon" onclick="removeCart(${item.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg></div>
                </div>   
                <span class="list">Move to wish list</span>
                <span class="list">Add note</span>
              </div>
            </div>
          `;

    itemDisplay.appendChild(aboutItem);
});
// let totalP = localStorage.getItem("cart");
// const totalPay = JSON.parse(totalP);
// console.log(totalPay);
// totalPay.map((item, index) => {
//   console.log(item);
// });

// // updating numbers of items in cart
// let count = cart.reduce((total, item) => total + item.quantity, 0);
// localStorage.setItem("cartLength", JSON.stringify(count));
// let updatecart = localStorage.getItem("cartLength");
// console.log(updatecart);
// document.getElementById("cartLength").innerHTML = updatecart;
// document.getElementById(
//     "itemLength"
// ).innerHTML = `You have ${updatecart} items in your cart`;
// if (updatecart == 0 || !cart) {
//     let itemDisplay = document.getElementById("productDetails");
//     itemDisplay.innerHTML = "your cart is empty";
// }

// // Ordered items and payment
// let totalPrice = cart.reduce(
//     (totalAmount, item) => totalAmount + item.price * item.quantity,
//     0
// );
// localStorage.setItem("totalPrice", totalPrice);

// // update total price UI
// let orderAmount = document.createElement("div");
// orderAmount.setAttribute("class", "total");
// orderAmount.innerHTML = `<p id="totalItems">Total(${updatecart} Items)</p>
//                 <p id="totalPayment">$${totalPrice}</p>`;
// let orderAmountSibling = document.getElementById("checkout");
// let details = document.getElementById("details");
// details.insertBefore(orderAmount, orderAmountSibling);
// let order = document.createElement("div");
// order.setAttribute("class", "order");
// order.innerHTML = `<p>item(s) in total</p>
//                 <p class="totalPayment">$${totalPrice}</p>`;
// details.insertBefore(order, orderAmount);