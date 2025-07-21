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

//Displaying cart items from localStorage on the cart page
function cartItemsDisplay(){
    const tbody = document.querySelector('#cart tbody');  //Accessing <tbody> element 

    //Creating a remove element which will be appended to all the rows
    const iElement = document.createElement('i');
    iElement.classList.add('fa-regular',' fa-circle-xmark');

    const anchorElement = document.createElement('a');
    anchorElement.href="#";

    //Appending iElement to anchor Element 
    anchorElement.appendChild(iElement);

}


//Upon Page refreshing cart items count
    function cartItemsCountDisplay(){
        if(!localStorage.getItem('numberOfItems')){
            //Do nothing
        }else{
            const cartIcon = document.querySelectorAll('#header span');
            cartIcon.forEach((spanElement)=>{
            spanElement.classList.remove('cartCount');
            spanElement.textContent=localStorage.getItem('numberOfItems');
        });
        }
    }

//Upon page loading
window.addEventListener('load',()=>{
    cartItemsCountDisplay();       //Display the total no of items in cart upon page load or refresh
});