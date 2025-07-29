import products from './products.js';

/* Hamburger Menu */

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
//Shop Now Button event Listener
function shopNow(){
    const shopNowButton = document.querySelector('#hero button');
    shopNowButton.addEventListener('click',()=>{
        window.location.href ='shop.html';
    });
}

//Function to display productCards in Featured Product Section
function displayProductCardsFeatured(){
    //Accessing all the required DOM elements
    const proContainerFeatured = document.querySelector('#product1 .pro-container');
    const shopMain = document.querySelector('#shopMainFeatured');
    const prodetails = document.querySelector('#prodetailsFeatured');

    //Accessing the products to create proCard 
    const currentProductsArray = products.slice(0,8);

    currentProductsArray.forEach((product)=>{
         /* Review Stars Section */
        const numberOfStars = product.star;
        const starDiv = document.createElement('div');

        for(let i=0;i<numberOfStars;i++){
        const starElement = document.createElement('i');
        starElement.classList.add('fa-solid', 'fa-star');  
        starDiv.appendChild(starElement);  
        }

        /* proCard Section */
        const proCard = document.createElement('div');
        proCard.classList.add('pro');

        //Setting unique id as attribute to the proCard
        proCard.setAttribute('data-product-id',product.id);
        proCard.dataset.proThumbnailDescription =`${product.proThumbnailDescription}`;

        proCard.innerHTML = `
        <img src=${product.img} />
        <div class="des">
        <span>${product.brand}</span>
        <h5>${product.productName}</h5>
        
        <h4>${product.price}</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        
        `;

        //Appending
        const proCardDes = proCard.querySelector('.des');
        proCardDes.insertBefore(starDiv,proCardDes.querySelector('h4'));
        proContainerFeatured.appendChild(proCard); 

        //Adding event Listener to proCard
        proCard.addEventListener('click',()=>{
        shopMain.classList.add('hidePage'); 
        prodetails.classList.remove('hidePage');
        productThumbnail(proCard,shopMain,prodetails);
        });

        //Adding event listener to proCard addToCart Icon
        const addToCartIcon = proCard.querySelector('a .fa-cart-shopping');
        addToCartIcon.addEventListener('click',(e)=>{
            e.preventDefault();
            e.stopPropagation();  //will stop the event from bubbling to parent
            
            const numberOfItems = localStorage.getItem('numberOfItems');
            const itemCount = numberOfItems ? parseInt(numberOfItems) : 0;
            if(itemCount<10){
            cartCountDisplay(0);  //for adding item quantity to cart
            cartItems(proCard,1);  //for adding cart items to localStorage
            }else{
            alert('You can only add up to 10 items in the cart!!!\nPlease remove some items before adding more.');
            }
        });

    });

}
//Function to display productCards in New Arrival Product Section
function displayProductCardsNewArrival(){
    //Accessing all the required DOM elements
    const proContainerNewArrival = document.querySelector('#product1 .proContainerNewArrival');
    const shopMain = document.querySelector('#shopMainNewArrival');
    const prodetails = document.querySelector('#prodetailsNewArrival');

    //Accessing the products to create proCard 
    const currentProductsArray = products.slice(8,16);

    currentProductsArray.forEach((product)=>{
         /* Review Stars Section */
        const numberOfStars = product.star;
        const starDiv = document.createElement('div');

        for(let i=0;i<numberOfStars;i++){
        const starElement = document.createElement('i');
        starElement.classList.add('fa-solid', 'fa-star');  
        starDiv.appendChild(starElement);  
        }

        /* proCard Section */
        const proCard = document.createElement('div');
        proCard.classList.add('pro');

        //Setting unique id as attribute to the proCard
        proCard.setAttribute('data-product-id',product.id);
        proCard.dataset.proThumbnailDescription =`${product.proThumbnailDescription}`;

        proCard.innerHTML = `
        <img src=${product.img} />
        <div class="des">
        <span>${product.brand}</span>
        <h5>${product.productName}</h5>
        
        <h4>${product.price}</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        
        `;

        //Appending
        const proCardDes = proCard.querySelector('.des');
        proCardDes.insertBefore(starDiv,proCardDes.querySelector('h4'));
        proContainerNewArrival.appendChild(proCard); 

        //Adding event Listener to proCard
        proCard.addEventListener('click',()=>{
        shopMain.classList.add('hidePage'); 
        prodetails.classList.remove('hidePage');
        productThumbnail(proCard,shopMain,prodetails);
        });

        //Adding event listener to proCard addToCart Icon
        const addToCartIcon = proCard.querySelector('a .fa-cart-shopping');
        addToCartIcon.addEventListener('click',(e)=>{
            e.preventDefault();
            e.stopPropagation();  //will stop the event from bubbling to parent
            
            const numberOfItems = localStorage.getItem('numberOfItems');
            const itemCount = numberOfItems ? parseInt(numberOfItems) : 0;
            if(itemCount<10){
            cartCountDisplay(0);  //for adding item quantity to cart
            cartItems(proCard,1);  //for adding cart items to localStorage
            }else{
            alert('You can only add up to 10 items in the cart!!!\nPlease remove some items before adding more.');
            }
        });

    });

}

//function to display productImage and productDescription
function productThumbnail(proCard,shopMain,prodetails){

    prodetails.innerHTML = "";

    //Container for both the main image and similar images container
    const productImage = document.createElement('div');
    productImage.classList.add('productImage');

    const mainImage = document.createElement('img');
    mainImage.src = proCard.querySelector('img').src;


    productImage.appendChild(mainImage);

    //Similar Image Container
    const productSimilar = document.createElement('div');
    productSimilar.classList.add('productSimilar');

    //Generating random images and adding it to productSimilar container
    const randomImages = getRandomProductImages(4,mainImage.src);

    
    randomImages.forEach(imgSrc =>{
        const smallImg = document.createElement('img');
        smallImg.src=imgSrc;

        smallImg.addEventListener('click',()=>{
            // Change main image when thumbnail clicked
            mainImage.src= imgSrc;
        });
        productSimilar.appendChild(smallImg);

    });
    
    productImage.appendChild(productSimilar);

    // productDescription 
    const productDescription = document.createElement('div'); 
    productDescription.classList.add('productDescription'); 

    const proCardDes = proCard.querySelector('.des');

    productDescription.innerHTML = `
            <h4>Home/T-Shirt/${proCardDes.querySelector('span').textContent}</h4>
            <h4>${proCardDes.querySelector('h5').textContent}</h4>
            <h1>${proCardDes.querySelector('h4').textContent}</h1>
            <select class="selectSize" name="size"  >
                <option value="" disabled selected hidden>Select Size</option>
                <option value="small">Small</option>
                <option value="large">Large</option>
                <option value="extra large">XL</option>
                <option value="extra extra large">XXL</option>
            </select>
            <form>
                <input type="number" min="1" max="4" placeholder="Quantity" required/>
                <button>Add to Cart</button>
            </form>
            <h2>Product Details</h2>
            <p>${proCard.dataset.proThumbnailDescription}</p>
           
    `;

    /* Creating a closing button ( X ) */
    
    const close = document.createElement('i');
    close.classList.add('fa-solid','fa-xmark','iClose');

    //Adding event listener to close button
    close.addEventListener('click',()=>{
        shopMain.classList.remove('hidePage'); 
        prodetails.classList.add('hidePage');
    });

   

    //Appending elements to prodetails
    prodetails.appendChild(productImage);
    prodetails.appendChild(productDescription);
    prodetails.appendChild(close);

     //Adding event listener to Add to Cart Button
    const addToCartButton = document.querySelector('.productDescription form button');
    const count = document.querySelector('.productDescription form input');
    const form = document.querySelector('.productDescription form'); 
    addToCartButton.addEventListener('click',(e)=>{
        e.preventDefault();

        //Checking validity
        if(form.reportValidity()){
        
        const quantity = parseInt(count.value); //input value is string 
        const numberOfItems = localStorage.getItem('numberOfItems');
        const itemCount = numberOfItems ? parseInt(numberOfItems) : 0;
        if(itemCount + quantity <=10){
        
        cartCountDisplay(quantity); //quantity is the value of input field of type string
        cartItems(proCard,quantity); //updating local storage with cart items  
        }else{
        alert('!!!Maximum cart value of 10 exceeded\nPlease remove some items from your cart.');

        }
        }
    });

}

//function to generate random images
    function getRandomProductImages(count,excludeSrc){
        const filtered = products.map(p=>p.img).filter(src => src !== excludeSrc);

        //Shuffle (Fisher-Yates Shuffle)
        for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
        }
        return filtered.slice(0,count);
    }

 //cartCountDisplay function to display number of products added to cart
    function cartCountDisplay(quantity){
        let input = parseInt(quantity);
        //Assign input value 1 if clicked on the addToCart icon in proCard
        if(input===0){
            input=1;
        }

        //Updating if needed  the localStorage with total no of items
        if(!localStorage.getItem('numberOfItems')){    
        localStorage.setItem('numberOfItems',input);
        }else{
        const currNumberOfItems = parseInt(localStorage.getItem('numberOfItems'));
        const totalItems = currNumberOfItems + input;
        
        localStorage.setItem('numberOfItems',totalItems);
        
        
    }
        

        const cartIcon = document.querySelectorAll('#header span');
        cartIcon.forEach((spanElement)=>{
            if(spanElement.classList.contains('cartCount')){
            spanElement.classList.remove('cartCount');
            }
            spanElement.textContent=localStorage.getItem('numberOfItems');
        });
        
        
}    

 //function to update localStorage with cart Items
    function cartItems(proCard,quantity=1){
        const productId = proCard.dataset.productId;
        const productImg = proCard.querySelector('img').src;
        const productName = proCard.querySelector('.des h5').textContent;
        const productPrice = proCard.querySelector('.des h4').textContent;

        //Merged the product with quantity
        const newProduct = {
            id:productId,
            img:productImg,
            name:productName,
            price:productPrice,
            quantity:parseInt(quantity)
        };

        //Get Current Cart
        let existingCart = localStorage.getItem('cartItems');
        existingCart = existingCart ? JSON.parse(existingCart) : {} ;

        if(existingCart[productId]){
            existingCart[productId].quantity += parseInt(quantity);
        }else{
            //Add new Product
            existingCart[productId] = newProduct;
        }

        //Save updated Cart
        localStorage.setItem('cartItems',JSON.stringify(existingCart));


}

//Upon Page refreshing cart items count
    function cartItemsCountDisplay(){
        const cartIcon = document.querySelectorAll('#header span');
        if(!localStorage.getItem('numberOfItems') || localStorage.getItem('numberOfItems')==='0'){
            cartIcon.forEach((spanElement)=>{
                spanElement.classList.add('cartCount');
            });
        }else{
            
            cartIcon.forEach((spanElement)=>{
            spanElement.classList.remove('cartCount');
            spanElement.textContent=localStorage.getItem('numberOfItems');
        });
        }
    }

//Upon page loading
window.addEventListener('load',()=>{
    cartItemsCountDisplay();       //Display the total no of items in cart upon page load or refresh
    shopNow();
    displayProductCardsFeatured();  //Display the Featured proCards 
    displayProductCardsNewArrival();//Display the new Arrivals
});