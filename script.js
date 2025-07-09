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


/* pagination functionality and dynamic creation of product cards*/

const proContainer = document.querySelector('.pro-container');
const paginationButtonContainer = document.getElementById('pagination');
const shopMain = document.querySelector('#shopMain');
const prodetails = document.querySelector('#prodetails');
const perPage = 4;
const buttonRefs = [];
let currentPage = 1;
paginationButtonContainer.classList.add('pagination');

function displayProducts(currentPage){
    const start = (currentPage-1)*perPage;
    const end = start + perPage;

    proContainer.innerHTML ="";

    const currentItems = products.slice(start,end);
    

    currentItems.forEach((product)=>{
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
        proCard.classList.add('proCard');
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

        proCard.children[1].insertBefore(starDiv,proCard.children[1].children[2]);
        proContainer.appendChild(proCard);

        proCard.addEventListener('click',()=>{
        shopMain.classList.add('hidePage'); 
        prodetails.classList.remove('hidePage');
        productThumbnail(proCard);
        });
    });
}
/* Product thumbnail and description */
/* The product page */


function productThumbnail(proCard){
    const productImage = document.createElement('div');
    productImage.classList.add('productImage');

    const mainImage = document.createElement('img');
    mainImage.src = proCard.querySelector('img').src;


    productImage.appendChild(mainImage);

    //Similar Image Container
    const productSimilar = document.createElement('div');
    productSimilar.classList.add('productSimilar');

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
            <select class="selectSize" name="size" >
                <option value="" disabled selected hidden>Select Size</option>
                <option value="small">Small</option>
                <option value="large">Large</option>
                <option value="extra large">XL</option>
                <option value="extra extra large">XXL</option>
            </select>
            <form>
                <input type="text" min="1" max="4"/>
                <button>Add to Cart</button>
            </form>
            <h2>Product Details</h2>
            <p>${proCard.dataset.proThumbnailDescription}</p>
           
    `;

    
    prodetails.appendChild(productImage);
    prodetails.appendChild(productDescription);
    

}
    function getRandomProductImages(count,excludeSrc){
        const filtered = products.map(p=>p.img).filter(src => src !== excludeSrc);

        //Shuffle (Fisher-Yates Shuffle)
        for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
        }
        return filtered.slice(0,count);
    }

/* Pagination */

function setupPagination(){
    const numberOfButtons = Math.ceil(products.length/perPage);
    
    //paginationButtonContainer.innerHTML = "";
    
    for(let i=1;i<=numberOfButtons;i++){
        const button = document.createElement('button');
        button.textContent = i;
        

        button.addEventListener('click',()=>{
            currentPage = i;
            displayProducts(currentPage);
            updateActiveButton();
        });
        button.classList.add('paginationButton');
        paginationButtonContainer.appendChild(button);
        buttonRefs.push(button);
    }
}
function updateActiveButton(){
    buttonRefs.forEach((button,index)=>{
        if(index+1 ===currentPage){
            button.classList.add('active');
        }else{
            button.classList.remove('active');
        }
    });
  

}

window.addEventListener('load',()=>{
    setupPagination();
    displayProducts(1);
    updateActiveButton();
    
   
});








