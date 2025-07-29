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
});