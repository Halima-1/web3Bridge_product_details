const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const products = JSON.parse(localStorage.getItem("products"))

const product = products.find(p => p.id === id);
if (product) {
    // document.body.innerHTML = `
    //   <h2>${product.description}</h2>
    //   <img src="${product.images[0]}" />
    //   <p>Price: $${product.price}</p>
    // `;
    console.log(product)

} else {
    // document.body.innerHTML = `<p>Product not found</p>`;
    console.log("no product")

}
const imageLoad = () => {
    localStorage.setItem("id", id)
}

const maain = document.getElementById("main");
maain.innerHTML = `
<div>
    <img src="./${product.images[0]}" alt="">
</div>
<div id="display">
   
</div>

`

const loadImage = document.getElementById("display");
// loadImage=""
product.images.map((item, index) => {
    loadImage.innerHTML += ` <div>
    <img src="./${item}" alt="" onclick="imageLoad()">
</div>`
})