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

// const product = products.find(p => p.id === id);
if (products) {
    console.log(products[0].images[0])

} else {
    // document.body.innerHTML = `<p>Product not found</p>`;
    console.log("no product")

}
const disitem = JSON.parse(localStorage.getItem("displayItem")) || products

const displayItem = disitem[0].images[0]
const next = () => {
    const displayingProduct = JSON.parse(localStorage.getItem("displayItem")) || products
    // const displayProduct = products.filter(item => item.id === id)

    if (displayingProduct[0].id == 4) {
        console.log(displayingProduct[0].id)
        const firstItem = products.find(item, index => (item.id == 1))
        return
    }
    else {
        displayingProduct[0].id += 1
        console.log(displayingProduct)
        localStorage.setItem("displayItem", JSON.stringify(displayingProduct))
        window.location.href = "index.html"
    }
}
const screenResize = () => {
    const disitem = JSON.parse(localStorage.getItem("displayItem")) || products

    const displayItem = disitem[0].images[0]
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
        const maain = document.getElementById("main");
        maain.innerHTML = `
        <div class="svg">
        <img id="svg-icon" src="assets/images/icon-previous.svg" alt="">
    <img id="svg-icon" src="assets/images/icon-next.svg" alt="" onclick ="next()">

      </div>
    <div>
    
    <img src="./${displayItem}" alt="">

    </div>
    <div id="display">
       
    </div>
    
    `
        //     const loadImage = document.getElementById("display");
        //     products.map((item, index) => {
        //         loadImage.innerHTML += ` <div>
        //     <img src="${item.images[0]}" alt="" onclick="imageLoad(${item.id})">
        // </div>`
        //     })
    }
}
// 
window.addEventListener("resize", screenResize);
window.addEventListener("load", screenResize);

const imageLoad = (id) => {
    // localStorage.setItem("id", index)
    const displayProduct = products.filter(item => item.id === id)
    console.log(displayProduct)
    localStorage.setItem("displayItem", JSON.stringify(displayProduct))
    window.location.href = "index.html"
    // price.innerHTML =
}

// product price
const price = document.getElementById("price")
price.innerHTML = ` <div>
<h3>$${disitem[0].price}</h3> 

<p class="discount">50%</p>
</div> 
<p id="oldPrice">$${disitem[0].oldPrice}</p>
`


// add to cart
const carrt = document.getElementById("add-to-cart")
// const cartlength =localStorage.getItem(cart)
carrt.innerHTML = ` <div id="increament">
<b onclick="increament()">+</b>
<p id="qty"></p>

<b onclick="decreament()">-</b>
</div>
<input id="cart" type="button" value="Add to cart" type="click" item="${disitem[0].id
    }" onclick="addToCart(${disitem[0].id})">
<div >
<!-- <img src="./assets/images/icon-cart.svg" alt=""> -->
<!-- <p></p> -->
</div>`
function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productL = products.find((item) => item.id === disitem[0].id);
    if (!productL) {
        console.log("product not found");
        console.log(disitem[0].id);

        return;
    }

    const existingItem = cart.find((item) => item.id === disitem[0].id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        console.log("no existing item")
        cart.unshift({ ...productL, quantity: 1 });

    }
    window.location.href = "index.html"

    console.log(cart.length);
    console.log(existingItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))

    // const itemInCart = JSON.parse(localStorage.getItem("itemInCartQty")) || []
    // console.log(itemInCart);
    // updateCartCount();
}
const itemInCart = JSON.parse(localStorage.getItem("itemInCartQty"))
console.log(itemInCart);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartIcon").innerHTML = cart.length
document.getElementById("qty").innerHTML = itemInCart.quantity || 0

const increament = () => {
    const existingItem = cart.find((item) => item.id === disitem[0].id);

    if (existingItem) {
        existingItem.quantity += 1;
        console.log(existingItem);
        localStorage.setItem("cart", JSON.stringify(cart));

    }
    localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))

    window.location.href = "index.html"

}

// increament
const decreament = () => {
    const existingItem = cart.find((item) => item.id === disitem[0].id);

    if (existingItem) {
        if (existingItem.quantity > 0) {
            existingItem.quantity -= 1;
            console.log(existingItem);
            localStorage.setItem("cart", JSON.stringify(cart));

        }
        else { return }
    }
    localStorage.setItem("itemInCartQty", JSON.stringify(existingItem))

    window.location.href = "index.html"

}

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