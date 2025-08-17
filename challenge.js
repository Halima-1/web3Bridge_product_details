const product = [
    {
        id: 1,
        price: 125,
        oldPrice: 250,
        quantity: 0,

        images: [
            "assets/images/image-product-1.jpg", "assets/images/image-product-1-thumbnail.jpg"

        ]
    },
    {
        id: 2,
        price: 155,
        oldPrice: 310,
        quantity: 0,

        images: [
            "assets/images/image-product-2.jpg", "assets/images/image-product-2-thumbnail.jpg"

        ]
    }, {
        id: 3,
        price: 120,
        oldPrice: 240,
        quantity: 0,

        images: [
            "assets/images/image-product-3.jpg", "assets/images/image-product-3-thumbnail.jpg"

        ]
    }, {
        id: 4,
        price: 175,
        oldPrice: 350,
        quantity: 0,

        images: [
            "assets/images/image-product-4.jpg", "assets/images/image-product-4-thumbnail.jpg"

        ]

    }
]

localStorage.setItem("products", JSON.stringify(product))

// const urlParams = new URLSearchParams(window.location.search);
// const id = parseInt(urlParams.get("id"));

const products = JSON.parse(localStorage.getItem("products"))

const disitem = JSON.parse(localStorage.getItem("displayItem")) || product[0]

const displayItem = disitem.images[0]
// if (localStorage.getItem("displayItem")) {
//     const displayItem = disitem.images[0]

// }
// else {
//     const disitem = product[0]

//     const displayItem = disitem.images[0]

// }
// const next = () => {
//     const displayingProduct = JSON.parse(localStorage.getItem("displayItem")) || products
//     // const displayProduct = products.filter(item => item.id === id)

//     if (displayingProduct[0].id == 4) {
//         console.log(displayingProduct[0].id)
//         const firstItem = products.find(item, index => (item.id == 1))
//         return
//     }
//     else {
//         displayingProduct[0].id += 1
//         console.log(displayingProduct)
//         localStorage.setItem("displayItem", JSON.stringify(displayingProduct))
//         window.location.href = "index.html"
//     }
// }
const screenResize = () => {

    if (window.innerWidth >= 768) {
        const maain = document.getElementById("main");
        maain.innerHTML = `
    <div>
    <img src="./${displayItem}" alt="">
    
    </div>
    <div id="display">
       
    </div>
    `
        const loadImage = document.getElementById("display");
        products.map((item, index) => {
            loadImage.innerHTML += ` <div>
    <img src="${item.images[0]}" alt="" onclick="imageLoad(${item.id})">
</div>`
        })
    }
    else {

        let currentItemIndex = localStorage.getItem("itemIndex") || 0
        const maain = document.getElementById("main");

        maain.innerHTML = `
        <div class="svg">
        <img class="svg-icon" id="previous" src="assets/images/icon-previous.svg" alt="">
    <img class="svg-icon " id="next"  src="assets/images/icon-next.svg" alt="" >

      </div>
    <div>
    
    <img src="./${product[currentItemIndex].images[0]}" alt="">

    </div>
    <div id="display">
       
    </div>
    
    `
        const nextBtn = document.getElementById("next")
        const prevBtn = document.getElementById("previous")
        // const mobileDisplay = () => {
        // for (let i = 0; i < nextBtn.length; i++) {

        nextBtn.addEventListener("click", () => {

            console.log(displayItem)

            currentItemIndex++;
            if (currentItemIndex < product.length) {
                console.log(currentItemIndex)
            }
            else {
                currentItemIndex = 0
            }
            // const index = localStorage.getItem("itemIndex")
            // const ite = product.findIndex(item => item.id === index + 1)
            // const prod = product.filter(item => item.id == ite + 2)
            localStorage.setItem("itemIndex", currentItemIndex)
            localStorage.setItem("displayItem", JSON.stringify(product[currentItemIndex]))
            // console.log(ite)

            window.location.href = "index.html"
        })
    }



}
// 
window.addEventListener("resize", screenResize);
window.addEventListener("load", screenResize);
let existingItem = [];
localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))
const imageLoad = (id) => {
    const displayProduct = products.find(item => item.id === id)
    // console.log(displayProduct[0].quantity)
    localStorage.setItem("displayItem", JSON.stringify(displayProduct))
    window.location.href = "index.html"
    // price.innerHTML =
}




// add to cart
const carrt = document.getElementById("add-to-cart")
// const cartlength =localStorage.getItem(cart)
carrt.innerHTML = ` <div id="increament">
<b onclick="increament()">+</b>
<p id="qty"></p>

<b onclick="decreament()">-</b>
</div>
<input id="cart" type="button" value="Add to cart" type="click" item="${disitem.id
    }" onclick="addToCart(${disitem.id})">
<div >
<!-- <img src="./assets/images/icon-cart.svg" alt=""> -->
<!-- <p></p> -->
</div>`
console.log(disitem.id);
//  existingItem = [];
// localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))
let productL = products.find((item) => item.id === disitem.id);

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productL = products.find((item) => item.id === disitem.id);
    if (!productL) {
        console.log("product not found");
        console.log(disitem.id);

        return;
    }

    existingItem = cart.find((item) => item.id === disitem.id);

    if (existingItem) {
        // existingItem.quantity = existingItem.quantity + 1;
        localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))

    } else {
        console.log("no existing item")
        productL.quantity = 1
        cart.push(productL);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("itemInCartQty", JSON.stringify(productL))
        window.location.href = "index.html"
        // console.log(productLl);
    }
    let itemQty = JSON.parse(localStorage.getItem("itemInCartQty"));

    // const show =disitem.find
    console.log(cart.length);
    console.log(existingItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))
    let productLl = cart.find((item) => item.id === disitem.id);
}
const itemInCart = JSON.parse(localStorage.getItem("itemInCartQty")) || []

if (itemInCart.quantity) {
    document.getElementById("qty").innerHTML = itemInCart.quantity
}
else {
    document.getElementById("qty").innerHTML = productL.quantity
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// document.getElementById("qty").innerHTML = existingItem.quantity
existingItem = cart.find((item) => item.id === disitem.id) || productL;

document.getElementById("cartIcon").innerHTML = cart.length
document.getElementById("qty").innerHTML = existingItem.quantity || 0

const increament = () => {
    const existingItem = cart.find((item) => item.id === disitem.id);
    if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(existingItem.quantity);

        // document.getElementById("qty").innerHTML = existingItem.quantity + 1;

        localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))
        document.getElementById("qty").innerHTML = existingItem.quantity

    }
    const price = document.getElementById("price")
    price.innerHTML = ` <div>
<h3>$${disitem.price * existingItem.quantity}</h3> 

<p class="discount">50%</p>
</div> 
<p id="oldPrice">$${disitem.oldPrice} </p>
`
    localStorage.setItem("cart", JSON.stringify(cart));
}

// decreament
const decreament = () => {
    const existingItem = cart.find((item) => item.id === disitem.id);
    if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(existingItem.quantity);

        // document.getElementById("qty").innerHTML = existingItem.quantity + 1;

        localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))
        document.getElementById("qty").innerHTML = existingItem.quantity
    }

    const price = document.getElementById("price")
    price.innerHTML = ` <div>
<h3>$${disitem.price * existingItem.quantity}</h3> 

<p class="discount">50%</p>
</div> 
<p id="oldPrice">$${disitem.oldPrice} </p>
`
    localStorage.setItem("cart", JSON.stringify(cart));

}

// total pricee

// product price
const price = document.getElementById("price")
let totalAmount
if (existingItem && existingItem.quantity > 0) {
    totalAmount = disitem.price * existingItem.quantity
}
else { totalAmount = disitem.price }

price.innerHTML = ` <div>
<h3>$${totalAmount}</h3> 
<p class="discount">50%</p>
</div> 
<p id="oldPrice">$${disitem.oldPrice} </p>
`
let amount = cart.reduce((total, item) => total + item.price, 0);
// document.getElementById("totalPrice").innerHTML = amount
console.log(amount);

// display side nav
const displaynav = () => {
    const aside = document.getElementById("aside")
    if (aside.classList.contains("hide")) {
        aside.classList.remove("hide")
        aside.classList.add("show")
    }
    else {
        aside.classList.remove("show")
        aside.classList.add("hide")
    }
}



// }