import products from './products.js';

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

/* hamburger menu ends here */

/* pagination */

const proContainer = document.querySelector('.pro-container');
const paginationButtonContainer = document.getElementById('pagination');
const perPage = 4;
const buttonRefs = [];
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
        proCard.innerHTML = `
        <img src=${product.img} />
        <div class="des">
        <span>${product.brand}</span>
        <h5>${product.productName}</h5>
        
        <h4>${product.price}</h4>
        
        
        `;

        proCard.children[1].insertBefore(starDiv,proCard.children[1].children[2]);
        proContainer.appendChild(proCard);
    });
}

function setupPagination(){
    const numberOfButtons = Math.ceil(products.length/perPage);
    
    //paginationButtonContainer.innerHTML = "";
    
    for(let i=1;i<=numberOfButtons;i++){
        const button = document.createElement('button');
        button.textContent = i;
        const currentPage = i;

        button.addEventListener('click',()=>{
            displayProducts(currentPage);
        });
        button.classList.add('paginationButton');
        paginationButtonContainer.appendChild(button);
    }
}

window.addEventListener('load',()=>{
    setupPagination();
    displayProducts(1);
});



