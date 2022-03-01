//Navlinks toggle button
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const Links = document.getElementsByClassName("navbar-links")[0]
// console.log(Links);

toggleButton.addEventListener("click", ()=> {
    Links.classList.toggle('active')   
})
// end


let count = 0;
let addtocartBtn = document.querySelectorAll(".product-btn")

let productBtn = document.getElementsByClassName("product-btn")




function increment(){
    countEl.textContent = count;
    count += 1;
    if(count <= 50){
        return ('')
    }else if(count = 100){ 
        alert("cart is full, proceed to checkout")
    }
    else{
        return ("")
    }
}

let countEl = document.getElementById("count-el");



increment()

//Action dropdown menu
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(e){
    if(!e.target.matches(".dropbtn")){
        var myDropdown = document.getElementById("myDropdown");
        // var i;
        // for(i = 0; i<dropdowns.length; i++) {
        //     var openDropdown = dropdowns[i];
            if(myDropdown.classList.contains("show")){
                myDropdown.classList.remove("show");
            }

        }
    }
    //end



    function search(){
        const searchbox = document.getElementById("search-item").value.toUpperCase();
        const storeitems = document.getElementById("product-list")
        const product = document.querySelectorAll(".img-container")
        const pname = document.getElementsByTagName("h3")
        //const btn = document.getElementsByClassName("search-button")
    
        for(var i = 0; i < pname.length; i++){
            let match = product[i].getElementsByTagName('h3')[0];
            if(match){
               let searchvalue = match.textContent || match.innerHTML
    
               if(searchvalue.toUpperCase().indexOf(searchbox) > -1){
                   product[i].style.display = "";
               }else{
                 product[i].style.display = "none";
               }
            }
        }
    }


// if(Cart === 'visible'){
//     toggleCart.style.display ='none';
//     emptyCart.innerHTML = 'Show'
// }else{
//     toggleCart.style.display = 'visible';
//     emptyCart.innerHTML = 'Hide'
    
    
    
//-------------------------------------------Product-page ------------------------------//
//Product dropdown menu
function display(){
    document.getElementById("productDropdown").classList.toggle("show");
}


window.onclick = function(e){
    if(!e.target.matches("#product-link")){
        var myDropdown = document.getElementById("productDropdown");
        // var i;
        // for(i = 0; i<dropdowns.length; i++) {
        //     var openDropdown = dropdowns[i];
            if(myDropdown.classList.contains("show")){
                myDropdown.classList.remove("show");
            }

        }
    };
    //end


//image slider-----------------------------//

(function myfunction(){
    const pictures = [
        "background-home",
        "small-bags",
        "heel-shoe",
        "cloth-5",
        "cloth-background",
        "shopping"
    ];
    console.log(pictures);
    const buttons = document.querySelectorAll(".btn");
    console.log(buttons);
    const imgDiv = document.querySelector(".img-slider");
    
    let counter = 0
    buttons.forEach(function(button) {
        button.addEventListener("click", function (e){
            if(button.classList.contains('btn-left')){
                counter--
                if(counter < 0){
                    counter = pictures.length - 1
                }
                imgDiv.style.backgroundImage = `url('/${pictures[counter]}.png')`
            }
            if(button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length - 1){
                    counter = 0
                }
                imgDiv.style.backgroundImage = `url('/${pictures[counter]}.png')`
                console.log(imgDiv.style.background)
                
            }
        })
    })
    })();

(function(){
    const filterButton = document.querySelectorAll('.dropdown-item1 btn')
    const storeImages = document.querySelectorAll('.img-container')

    filterButton.forEach((button) => {
        button.addEventListener('click', (e) =>{
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeImages.forEach((item)=>{
                if(filter === 'all'){
                    item.style.display ='block'
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    }
                    else{
                        item.style.display ='none'
                    }
                  }
                })
            })
        })
    }
)();









// let c = [1, 6, 38, 100]
// for (let i = 1; i <= 100; i++) {
//     console.log(count[i])
// }

function addToCart(){
    var addToCart = document.getElementsByClassName("product-btn")
 for(var i =0; i < addToCart.length; i++){
     var button = addToCart[i]
     button.addEventListener('click', function(event){
         var buttonPressed = event.target
         buttonPressed.parentElement.add()
     })
 }
}

var deleteCart= document.getElementsByClassName("delete-btn")
console.log(deleteCart)
for (var i = 0; i <deleteCart.length; i++){
    var button = deleteCart[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()   
        updateCartTotal()

    })
}
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-page')[0]
    console.log(cartItemContainer)
    var cartItems = document.getElementsByClassName('cart-info')

    for (var i = 0; i <deleteCart.length; i++){
    var cart = cartItems[i]
    var priceElement = cartItems.getElementsByClassName('product-price')[0]
    var quantity = cartItems.getElementsByClassName()
    
    
    }
}


//rough

let products = [{
   product_name: "Pink Bag",
   category: 'bags',
   price: "170",
   image: './pink-bag.png'
},
{
    product_name: "Black Trainers Shoe",
    category: 'shoes',
    price: "17",
    image: `./Black-trainers.png`
 },
 {
    product_name: "Stylish Top",
    category: 'clothes',
    price: "16",
    image: `./cloth-4.png`
 },
 ,
 {
    product_name: "Stylish overall",
    category: 'clothes',
    price: "40",
    image: `./cloth-5.png`
 },
 {
    product_name: "Schweppes Bottle Drink",
    category: 'drinks',
    price: "78",
    image: `./soft-drink.png`
 }
]
function addEventIncrement(){
    for(let i = 0 ; i < productBtn.length; i++){
        productBtn[i].addEventListener('click', function(event){
            increment()
        })
            
    }
}
let productContainer = document.getElementById("product-list")

// const content = `<div class="product">
// <div class="img-container bag">
// <img class ="product-image" src=${image} alt="bag-image">
// <button class="product-btn" onclick="increment()" data-id="1">
// <img src="cart-new.svg" alt="cart-img"/>Add to Cart</button>
// </div>
// <h3>Pink Bag </h3><span><img class="wish-image" onclick="increment()" src="icon-heart.svg" alt="heart-image"/>Add To wishlist</span>
// <h4>$16.00</h4>
// </div>`

function updateDom (products){

    products.forEach( product => productContainer.innerHTML += `<div class="product">
    <div class="img-container bag">
    <img class ="product-image" src="${product.image}" alt="bag-image">
    <button class="product-btn" data-id="1">
    <img src="cart-new.svg" alt="cart-img"/>Add to Cart</button>
    </div>
    <h3>${product.product_name} </h3><span><img class="wish-image" onclick="increment()" src="icon-heart.svg" alt="heart-image"/>Add To wishlist</span>
    <h4> $ ${product.price}</h4>
    </div>`)
}

updateDom(products)



let submit = document.getElementById("submit")
let searchBar = document.getElementById("search-bar")
let input = document.getElementById("input")

submit.addEventListener("click", function(event){

    event.preventDefault()

    let content = input.value
   
    productContainer.innerHTML = ``


    filtered  = products.filter(product => product.category.toLowerCase().includes(content.toLowerCase()) || product.product_name.toLowerCase().includes(content.toLowerCase()))
    
    if(filtered[0]?.product_name){

        updateDom(filtered)
    }
    else{
        updateDom(products)
    }
    
    addEventIncrement()
})

addEventIncrement()

//const productBtn = document.getElementsByClassName


// let categories = document.getElementsByClassName("products")


// for(let i = 0 ; i < categories.length ; i++){
//     categories[i].addEventListener("click", function(e){
//         // e.preventDefault()
//         if(categories[i].classList.contains("bags")){
//            console.log("bags clicked")
//         }
//     })
//     console.log(categories[i].classList.contains("clothes"))
// }