const product = [
    {
        description: "Baby Lace",
        price: 20000,
        category: "lace",
        availableQuantity: [45, 60, 20],
        id: 1,
        color: ["Baby pink", "Light carton", "Sky blue"],
        images: [
            "assets/images/lace/baby lace1.png",
            "assets/images/lace/baby lace2.png",
            "assets/images/lace/luxury dry lace.png",
        ],
    },
    {
        description: "Royal Cord lace",
        price: 27000,
        category: "lace",
        availableQuantity: [40, 20, 25, 50],
        id: 2,
        color: ["yellow", "carton", "turqose blue", "white"],
        images: [
            "assets/images/lace/royal cord lace1.png",
            "assets/images/lace/royal cord lace 2.png",
            "assets/images/lace/royal cord lace3.png",
            "assets/images/lace/royal cord lace4.png",
        ],
    },
    {
        description: "Gummy lace",
        price: 15000,
        category: "lace",
        availableQuantity: [45, 30],
        id: 3,
        color: ["carton", "white"],
        images: [
            "assets/images/lace/gummy lace.png",
            "assets/images/lace/transparent dry lace.png",
        ],
    },
    {
        description: "luxury cord lace",
        price: 40000,
        category: "lace",
        availableQuantity: [45, 60, 20, 15],
        id: 4,
        color: ["check", "purple", "white"],
        images: [
            "assets/images/lace/luxury cord lace1.png",
            "assets/images/lace/luxury cord lace2.png",
            "assets/images/lace/luxury cord lace3.png",
            // "assets/images/lace/luxury cord lace4.png",
        ],
    },
    {
        description: "Beautiful net embroidery",
        price: 20000,
        category: "lace",
        availableQuantity: [30, 60, 20, 30],
        id: 5,
        color: ["Red", "Black & white", "Red & white", "Red"],
        images: [
            "assets/images/lace/beautiful net embroidery.png",
            "assets/images/lace/beautiful net embroidery1.png",
            "assets/images/lace/beautiful net embroidery2.png",
            "assets/images/lace/beautiful net embroidery.png",
        ],
    },
    {
        description: "Big width akoba lace",
        price: 25000,
        category: "lace",
        availableQuantity: [30, 60, 20, 30],
        id: 6,
        color: ["", "Black", "Sky blue", "Yellow", "Rose pink"],
        images: [
            "assets/images/lace/big width akoba lace.png",
            "assets/images/lace/big width akoba lace1.png",
            "assets/images/lace/big width akoba lace2.png",
            "assets/images/lace/big width akoba lace3.png",
            "assets/images/lace/big width akoba lace4.png",
        ],
    },
    {
        description: "Exclusive material for women",
        price: 33000,
        category: "lace",
        availableQuantity: [30, 60, 20, 30],
        id: 7,
        color: ["", "Baby pink", "Black", "Lilac"],
        images: [
            "assets/images/lace/exclusive naterial for women.png",
            "assets/images/lace/exclusive naterial for women1.png",
            "assets/images/lace/exclusive naterial for women2.png",
            "assets/images/lace/exclusive naterial for women3.png",
            "assets/images/lace/exclusive naterial for women4.png",
        ],
    },

    {
        description: "high grade mix pattern",
        price: 22000,
        category: "ankara",
        availableQuantity: [42],
        id: 8,
        color: ["", ""],
        images: ["assets/images/ankara/high grade mix pattern ankara.png"],
    },
    {
        description: "high quality real wax",
        price: 30000,
        category: "ankara",
        availableQuantity: [24, 30],
        id: 9,
        color: ["", ""],
        images: [
            "assets/images/ankara/high quality real wax1.png",
            "assets/images/ankara/high quality wax3.png",
        ],
    },
    {
        description: "high quality wax",
        price: 24000,
        category: "ankara",
        availableQuantity: [36, 60],
        id: 10,
        color: [""],
        images: [
            "assets/images/ankara/high quality wax.png",
            "assets/images/ankara/high quality wax3.png",
        ],
    },
    {
        description: "Mixed pattern ankara",
        price: 20000,
        category: "ankara",
        availableQuantity: [42, 30],
        id: 11,
        color: [""],
        images: [
            "assets/images/ankara/mixed pattern ankara1.png",
            "assets/images/ankara/mixed pattern ankara2 .png",
        ],
    },
    {
        description: "Multi pattern ankara",
        price: 15000,
        category: "ankara",
        availableQuantity: [30],
        id: 12,
        color: [""],
        images: ["assets/images/ankara/multi-pattern ankara.png"],
    },
    {
        description: "Royal ankara",
        price: 48000,
        category: "ankara",
        availableQuantity: [18],
        id: 13,
        color: [""],
        images: ["assets/images/ankara/royal ankara1.png"],
    },

    {
        description: "High cotton adire",
        price: 25000,
        category: "adire",
        availableQuantity: [30, 60, 20, 30],
        id: 14,
        color: [""],
        images: [
            "assets/images/adire/cotton adire1.png",
            "assets/images/adire/cotton adire2.png",
            "assets/images/adire/cotton addire3.png",
            "assets/images/adire/cotton addire4.png",
            "assets/images/adire/cotton addire5.png",
        ],
    },
    {
        description: "Luxury cotton adire",
        price: 38000,
        category: "adire",
        availableQuantity: [25],
        id: 15,
        color: [""],
        images: ["assets/images/adire/luxury cotton adire.png"],
    },
    {
        description: "High quality duches fabric",
        price: 4500,
        category: "duches",
        availableQuantity: [32, 60, 24, 34, 23],
        id: 16,
        color: ["", "green", "Red", "Magenta", "Navy blue"],
        images: [
            "assets/images/dutches/duches ads.jpg",
            "assets/images/dutches/green bridal satin.jpg",
            "assets/images/dutches/red bridal satin.jpg",
            "assets/images/dutches/magenta bridal satin.jpg",
            "assets/images/dutches/navy blu dutches.jpg",
        ],
    },
    {
        description: "Luxury strechy duches",
        price: 5500,
        category: "duches",
        availableQuantity: [20, 42, 20, 30, 18],
        id: 17,
        color: ["", "Off white", "light beige", "Onion", "Peach"],
        images: [
            "assets/images/dutches/dutches ads.jpg",
            "assets/images/dutches/off white bridal satin.jpg",
            "assets/images/dutches/light beige bridal satin.jpg",
            "assets/images/dutches/onion bridal satin.jpg",
            "assets/images/dutches/onion color dutches.jpg",
        ],
    },
    {
        description: " Queen Duches",
        price: 2500,
        category: "duches",
        availableQuantity: [30, 60, 20, 30, 41],
        id: 18,
        color: ["", "Maroon", "Rose pink", "Royal blue", "Tea green"],
        images: [
            "assets/images/dutches/dutches style inspo.jpg",
            "assets/images/dutches/dark maroon dutches.jpg",
            "assets/images/dutches/pink bridal satin.jpg",
            "assets/images/dutches/royal blue bridal satin.jpg",
            "assets/images/dutches/light beige bridal satin.jpg",
        ],
    },
    {
        description: "High quality bridal satin",
        price: 2500,
        category: "duches",
        availableQuantity: [37, 60, 20, 30, 29],
        id: 19,
        color: ["Black", "Red", "Rose pink", "Navy blue", "Pink"],
        images: [
            "assets/images/dutches/black bridal satin.jpg",
            "assets/images/dutches/off white bridal satin.jpg",
            "assets/images/dutches/red bridal satin.jpg",
            "assets/images/dutches/navy blu dutches.jpg",
            "assets/images/dutches/pink bridal satin.jpg",
        ],
    },
    {
        description: "Luxury strechy duches",
        price: 12000,
        category: "duches",
        availableQuantity: [20, 42, 20, 30, 18],
        id: 20,
        color: ["Onion", "Off white", "light beige", "Onion", "Peach"],
        images: [
            "assets/images/dutches/onion bridal satin.jpg",
            "assets/images/dutches/off white bridal satin.jpg",
            "assets/images/dutches/light beige bridal satin.jpg",
            "assets/images/dutches/onion bridal satin.jpg",
            "assets/images/dutches/onion color dutches.jpg",
        ],
    },
    {
        description: "London crepe",
        price: 2500,
        category: "crepe",
        availableQuantity: [20, 42, 20, 30, 18],
        id: 21,
        color: ["Mauve", "Black", "Navy blue", "Maroon", "Black"],
        images: [
            "assets/images/crepe/mauve london crepe.jpg",
            "assets/images/crepe/black viscose creep.jpg",
            "assets/images/crepe/navy blue london crepe.jpg",
            "assets/images/crepe/dark maroon london crepe.jpg",
            "assets/images/crepe/black french crepe.jpg",
        ],
    },

    {
        description: "Beautiful printed crepe",
        price: 2000,
        category: "crepe",
        availableQuantity: [40, 22, 10, 30, 18],
        id: 22,
        color: [""],
        images: [
            "assets/images/crepe/floral print crepe.jpg",
            "assets/images/crepe/neon multicolor crepe.jpg",
            "assets/images/crepe/Pastel Pink Crepe with Embroidery.jpg",
            "assets/images/crepe/dark maroon london crepe.jpg",
            "assets/images/crepe/black french crepe.jpg",
        ],
    },
    {
        description: " Embroidery Crepe",
        price: 5000,
        category: "crepe",
        availableQuantity: [20, 42, 20, 30, 18],
        id: 23,
        color: ["Purple", "Rama Green", "Rani pink", "Red", "Peach"],
        images: [
            "assets/images/crepe/Purple Crepe with Embroidery.jpg",
            "assets/images/crepe/Rama Green Crepe Fabric with Embroidery.jpg",
            "assets/images/crepe/Rani Pink Crepe Fabric with Embroidery.jpg",
            "assets/images/crepe/Red Crepe with Embroidery.jpg",
            "assets/images/crepe/Peach Crepe with Embroidery.jpg",
        ],
    },
    {
        description: "Red Heart Crepe",
        price: 2500,
        category: "crepe",
        availableQuantity: [30, 18, 46, 30, 18],
        id: 24,
        color: ["Lilac", "Purple", "Pink"],
        images: [
            "assets/images/crepe/red heart crepe1.png",
            "assets/images/crepe/red heart crepe.png",
            "assets/images/crepe/Rani Pink Crepe Fabric with Embroidery.jpg",
            "assets/images/crepe/Red Crepe with Embroidery.jpg",
            "assets/images/crepe/Peach Crepe with Embroidery.jpg",
        ],
    },
    {
        description: "Thick cotton crepe",
        price: 2500,
        category: "crepe",
        availableQuantity: [30, 18, 46, 30, 18],
        id: 25,
        color: [""],
        images: [
            "assets/images/crepe/thick cotton crepe.png",
            "assets/images/crepe/thick cotton crepe1.png",
            "assets/images/crepe/thick cotton crepe2.png",
            "assets/images/crepe/thick cotton crepe3.png",
            // "assets/images/crepe/thick cotton crepe4.png",
        ],
    },
    {
        description: "Top beautiful printed crepe",
        price: 2000,
        category: "crepe",
        availableQuantity: [26, 38, 19, 30],
        id: 26,
        color: [""],
        images: [
            "assets/images/crepe/top beautiful printed crepe.png",
            "assets/images/crepe/top beautiful printed crepe1.png",
            "assets/images/crepe/top beautiful printed crepe2.png",
            "assets/images/crepe/top beautiful printed crepe3.png",
        ],
    },
    {
        description: "Non transparent chiffon material",
        price: 2200,
        category: "crepe",
        availableQuantity: [30, 18, 46, 30, 18],
        id: 27,
        color: [""],
        images: [
            "assets/images/crepe/non transparent chiffon material2.png",
            "assets/images/crepe/non transparent chiffon material1.png",
            "assets/images/crepe/non transparent chiffon material.png",
            "assets/images/crepe/non transparent chiffon material3.png",
            "assets/images/crepe/non transparent chiffon material4.png",
        ],
    },
    {
        description: "Embroided crepe",
        price: 4000,
        category: "crepe",
        availableQuantity: [46, 30, 18],
        id: 28,
        color: [""],
        images: [
            "assets/images/crepe/embroided crepe prin.png",
            "assets/images/crepe/embroided crepe prin1.png",
            "assets/images/crepe/embroided crepe prin2.png",
        ],
    },
];

console.log(product.images)
fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(console.log);

// export { product };
localStorage.setItem("products", JSON.stringify(product))
// const add_to_cart = (id) => {
// }
const productDisplay = document.getElementById("products")

product.map((item, index) => {
    productDisplay.innerHTML += `<div class="products">
    <div class="wish">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
            </div>
  <div class="image" onclick="details_page(${item.id})">
  <a  href="product-details.html?id=${item.id}" >      <img src="${item.images[0]}" alt="">
  </a>

  </div>
//   <p class="name">${item.description}</p>
  <p class="description">${item.description.slice(1, 40) + "..."}</p>
  <p class="title">$${item.price}</p>

  <div class="product_stock_btn">
       <p class="product_in_stock"></p>
        <button class="add_to_cart" id="add" type="click" item="${item.id
        }" onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
</div>`
})

const details_page = (id) => {
    localStorage.setItem("id", id)

}
// cart
// user = JSON.parse(localStorage.getItem("users"));
// console.log(user[22].cart);

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productL = product.find((item) => item.id === id);
    if (!productL) {
        console.log("product not found");
        return;
    }

    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
        // existingItem.quantity = "";

        existingItem.quantity += 1;
    } else {
        console.log("no existing item")
        cart.unshift({ ...productL, quantity: 1 });
    }
    //   console.log(cart.unshift({ ...productL, quantity: 1 }));
    console.log(cart.length);
    console.log(existingItem);
    // user[22].cart = cart
    // console.log(user);
    // localStorage.setItem("users", JSON.stringify(user));
    localStorage.setItem("cart", JSON.stringify(cart));
    //   let storage = localStorage.getItem(cart);
    //   console.log(storage.length);
    //   removeCart();
    // cart.reduce(current, value)

    // updateCartCount();
}

// function updateCartCount() {
//     let count = cart.reduce((total, item) => total + item.quantity, 0);
//     //   document.getElementById("cartLength").innerHTML = count;
//     localStorage.setItem("cartLength", JSON.stringify(count));
//     let updatecart = localStorage.getItem("cartLength");
//     console.log(count);

//     console.log(updatecart);
//     document.getElementById("cartLength").innerHTML = updatecart;

//     console.log(count)
//     //   console.log(total);
// }

// // localStorage.setItem("cartLength", JSON.stringify(count));
// let updatecart = localStorage.getItem("cartLength");
// // console.log(count);

// console.log(updatecart);
// document.getElementById("cartLength").innerHTML = updatecart;

// // console.log(count);

// let specificUser = localStorage.getItem('loggedinUser');
// specificUser = JSON.parse(specificUser)
// document.getElementById('greeting').innerHTML = `Good day, ${specificUser.namee}`
