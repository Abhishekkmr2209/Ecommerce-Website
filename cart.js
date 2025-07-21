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

    //Getting the cartItems object
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    //Displaying empty cart message
    if(!cartItems || Object.keys(cartItems).length===0){
        tbody.innerHTML = `<tr><td colspan="6"><b>Your cart is Empty.</b> </td></tr>`;
        return;
    }

    //Looping through cartItems
    Object.values(cartItems).forEach((product)=>{

        //Create a table row
        const  tableRow = document.createElement('tr');

        //Creating a remove element 
        const iElement = document.createElement('i');
        iElement.classList.add('fa-regular','fa-circle-xmark');

        const anchorElement = document.createElement('a');
        anchorElement.href="#";

        //Appending iElement to anchor Element 
        anchorElement.appendChild(iElement);


        //All <td> element will be created
        //1st <td> element
        const tdElement1 = document.createElement('td');
        tdElement1.appendChild(anchorElement);

        //Appending 1st  <td> element to <tr>
        tableRow.appendChild(tdElement1);

        //Creating second <td> element containing imgSrc
        const tdElement2 = document.createElement('td');
        
        //Creating imgElement
        const imgElement = document.createElement('img');
        imgElement.src = product.img;
        
        //Appending 2nd <td> element to <tr>
        tdElement2.appendChild(imgElement);
        tableRow.appendChild(tdElement2);

        //Creating 3rd <td> element containing product name
        const tdElement3 = document.createElement('td');
        tdElement3.textContent = product.name;

        //Appending 3rd<td> element to <tr>
        tableRow.appendChild(tdElement3);

        //Creating 4th <td> element containing product name
        const tdElement4 = document.createElement('td');
        tdElement4.textContent = product.price;

        //Appending 4th<td> element to <tr>
        tableRow.appendChild(tdElement4);

        //Creating 5th <td> element
        const tdElement5 = document.createElement('td');

        //Creating an input Element
        const inputElement = document.createElement('input');
        inputElement.type='number';
        inputElement.min = '1';
        inputElement.max = '10';
        inputElement.placeholder = 'Quantity';
        //Displaying the initial quantity of the cart item
        inputElement.value = product.quantity;

        //Appending inputElement to 5th tdElement
        tdElement5.appendChild(inputElement);
        //Appending 5th<td> element to <tr>
        tableRow.appendChild(tdElement5);

        //Creating 6th <td> Element
        const tdElement6 = document.createElement('td');

        //Subtotal
        const priceValue = parseFloat(product.price.replace('$','').trim());
        const subTotal = '$' + (priceValue * product.quantity).toFixed(2);

        tdElement6.textContent = subTotal;
        

        //Appending 6th<td> element to <tr>
        tableRow.appendChild(tdElement6);
        

        //Appending tableRow to <tbody>
        tbody.appendChild(tableRow);

    });



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
    cartItemsDisplay();            //Displaying all the cart items from localStorage
});