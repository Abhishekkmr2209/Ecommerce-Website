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

    //Clearing  tbody to avoid duplication
    tbody.innerHTML = '';
    const thead = document.querySelector('#cart thead');  //Accessing <thead> element for current column count
    
    //Getting the cartItems object
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    

    //Displaying empty cart message
    if(!cartItems || Object.keys(cartItems).length===0){
        const totalColumns = thead.querySelector('tr').children.length;
        tbody.innerHTML = `<tr class='empty-cart'><td colspan="${totalColumns}"><b>Your cart is Empty.</b> </td></tr>`;

       // Updating spanElement to hide the countDisplay on the cart icon
        const cartIcon = document.querySelectorAll('#header span');
        cartIcon.forEach((spanElement)=>{
        spanElement.classList.add('cartCount');
        });
        return;
    }

    //Looping through cartItems
    Object.values(cartItems).forEach((product)=>{

        //Create a table row
        const  tableRow = document.createElement('tr');
        tableRow.id = product.id;

        //Creating a remove element 
        const iElement = document.createElement('i');
        iElement.classList.add('fa-regular','fa-circle-xmark');

        //Attaching event Listener to remove Element
        iElement.addEventListener('click',(e)=>{
            e.preventDefault();     //Will prevent the anchorElement action
            
            //Accessing updated localStorage
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));
            
            //Removing the rowfrom DOM
            tableRow.remove();
            
            //Removing the object key
            delete cartItems[product.id];

            //Updating localStorage after removal
            localStorage.setItem('cartItems',JSON.stringify(cartItems));
            

            //Updating numberOfItems
            const inputAll = document.querySelectorAll(`#cart tbody input[type='number']`);
            let totalQuantity=0;
            inputAll.forEach(input=>{
                totalQuantity += parseInt(input.value);
            });

            //Updating localStorage numberOfItems
            localStorage.setItem('numberOfItems',totalQuantity);
            updateCartQuantity();

            //If cart becomes empty re-render with empty message
            if(Object.keys(cartItems).length ===0){
                cartItemsDisplay();          //Will render cart empty message
            }
            subTotalCartValue();             //Will render the updated cart Value

        });

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

//Updating quantity of cartItems by user
function cartLiveQuantityUpdate(){

    const inputAll =  document.querySelectorAll(`#cart tbody input[type="number"]`);
    if(!inputAll){
        return;
    }
    
    
    //Adding event listener to each input element
    inputAll.forEach((inputElement)=>{
        inputElement.addEventListener('input',()=>{
            

            //Total quantity of cartItems after input has been triggered
            const inputAllUpdated =  document.querySelectorAll(`#cart tbody input[type="number"]`);
            let totalQuantity = 0;
            for(let i=0;i<inputAllUpdated.length;i++){
                //If user pressed backspace 
                if(!inputAllUpdated[i].value || isNaN(inputAllUpdated[i].value)){
                totalQuantity += 0; 
                }else{
                totalQuantity += parseInt(inputAllUpdated[i].value); 
                }
            }
            
            //
            let requiredKey = inputElement.closest('tr').id;
            let cartItems = JSON.parse(localStorage.getItem('cartItems'));
            let initialInputValue = parseInt(cartItems[requiredKey].quantity);
            

            //Checking if totalQuantity is more than cartItem value of 10
            if(totalQuantity>10){
                alert('Cart item max value of 10 exceeded!!!');
                inputElement.value = initialInputValue;
            }else{
              
              let newQuantity = parseInt(inputElement.value);
              if(isNaN(newQuantity) || !newQuantity){
                newQuantity=0;
              }
             
              cartItems[requiredKey].quantity = newQuantity; 

              //  Save the updated cartItems back to localStorage
              localStorage.setItem('cartItems',JSON.stringify(cartItems));

                
              const price = cartItems[requiredKey].price;
              const priceValue = parseFloat(price.replace('$','').trim());

              const subTotal = '$' +(priceValue * newQuantity).toFixed(2);


              //Accessing the SubTotal Element
              const subTotalElement = inputElement.closest('tr').querySelector('td:last-child');
              subTotalElement.textContent = subTotal;

              //Updating bagCount
              localStorage.setItem('numberOfItems',totalQuantity);

              //To display the updated Bag Count
              updateCartQuantity();
              
              //Updating the subTotal Cart Value
              subTotalCartValue();
              
            }
            
        });
        
        //Adding another event listener to  address the backspace done by user, on loosing focus it will change to 1 
        inputElement.addEventListener('blur', () => {
        //If the inputElement Value is 1 or more than 1
        if(parseInt(inputElement.value)>0){
            //Nothing to do
            return;
        }
        if (!inputElement.value || isNaN(inputElement.value) || inputElement.value==='0') {
            if(parseInt(localStorage.getItem('numberOfItems'))=== 10){
                inputElement.value=0;
                return;
            }else{
            inputElement.value = 1;
            }
        }
        //Total quantity of cartItems after input has been triggered
            const inputAllUpdated =  document.querySelectorAll(`#cart tbody input[type="number"]`);
            let totalQuantity = 0;
            for(let i=0;i<inputAllUpdated.length;i++){
                totalQuantity += parseInt(inputAllUpdated[i].value); 
                
            }
            
            //
            let requiredKey = inputElement.closest('tr').id;
            let cartItems = JSON.parse(localStorage.getItem('cartItems'));
            
            let newQuantity = parseInt(inputElement.value);
              
             
            cartItems[requiredKey].quantity = newQuantity; 

              //  Save the updated cartItems back to localStorage
              localStorage.setItem('cartItems',JSON.stringify(cartItems));

                
              const price = cartItems[requiredKey].price;
              const priceValue = parseFloat(price.replace('$','').trim());

              const subTotal = '$' +(priceValue * newQuantity).toFixed(2);


              //Accessing the SubTotal Element
              const subTotalElement = inputElement.closest('tr').querySelector('td:last-child');
              subTotalElement.textContent = subTotal;

              //Updating bagCount
              localStorage.setItem('numberOfItems',totalQuantity);

              //To display the updated Bag Count
              updateCartQuantity();
              
              //Updating the subTotal Cart Value
              subTotalCartValue();
              
            });

    });
    
}

//Function to provide subTotal
function subTotalCartValue(){

    //Accessing the subTotal td Element
    const cartSubtotalValue = document.querySelector('#subTotalRow td:nth-child(2)');
    const cartTotalValue = document.querySelector('#totalRow td:nth-child(2)');

    const cartItems =  JSON.parse(localStorage.getItem('cartItems'));
    let subTotalValue = 0;

    //Checking against null
    if (!cartItems || Object.keys(cartItems).length === 0) {
        cartSubtotalValue.textContent = '$0.00';
        cartTotalValue.textContent = '$0.00';
        return;
    }
    
    //Calculating Subtotal based on localStorage 
    Object.values(cartItems).forEach((product)=>{
        const productPrice = parseFloat(product.price.replace('$','').trim());
        subTotalValue +=  (productPrice * product.quantity);
    });

    //Formatted subTotalValue
    subTotalValue = '$' + subTotalValue.toFixed(2);

    cartSubtotalValue.textContent = subTotalValue;
    cartTotalValue.textContent = subTotalValue;

}

    //Updating cart numberOfItems
    function updateCartQuantity(){
    const cartIcon = document.querySelectorAll('#header span');
    cartIcon.forEach((spanElement)=>{
    spanElement.textContent=localStorage.getItem('numberOfItems');
    });
              
}

//Clear Cart functionality
function clearCart(){
    const emptyCartButton = document.querySelector('.empty-cart-container button.emptyCart');
    const modalBackdrop = document.querySelector('.empty-cart-container .modal-backdrop');
    const yesBtn = document.querySelector('.empty-cart-container .modal-backdrop .yesButton');
    const noBtn = document.querySelector('.empty-cart-container .modal-backdrop .noButton');

    

    //Clear Cart button event listener
    emptyCartButton.addEventListener('click',()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const numberOfItems = localStorage.getItem('numberOfItems');
        if (!cartItems || Object.keys(cartItems).length === 0 || numberOfItems === "0"){
            alert('Cart is already empty,\nTry adding some items.');
            
        }else{
        modalBackdrop.classList.remove('hidden');
        document.body.classList.add('modal-open');
        }
    });

    //Adding event Listener to NO button
    noBtn.addEventListener('click',()=>{
        modalBackdrop.classList.add('hidden');
        document.body.classList.remove('modal-open');
    });

    //Adding event listener to YES button
    yesBtn.addEventListener('click',()=>{
        localStorage.clear();          // Clear the localStorage of all the quantity and item values
        cartItemsCountDisplay();
        cartItemsDisplay();
        cartLiveQuantityUpdate();
        subTotalCartValue();

        modalBackdrop.classList.add('hidden');
        document.body.classList.remove('modal-open');

    });


}
//Buy Now functionality
function buyNow(){
    const buyNowButton = document.querySelector('#cart-add #subtotal button');
    const modalBackdropCheckout = document.querySelector('#cart-add .modal-backdrop-checkout');
    const continueShoppingButton = document.querySelector('#cart-add .modal-checkout button');
    
    //Adding event listener to buyNowButton
    buyNowButton.addEventListener('click',()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const numberOfItems = localStorage.getItem('numberOfItems');
        if (!cartItems || Object.keys(cartItems).length === 0 || numberOfItems === "0"){
            alert('Cart is empty,\nTry adding some items first.');
            
        }else{
        modalBackdropCheckout.classList.remove('hidden');
        document.body.classList.add('modal-open');
        }
    });

    //ContinueShoppingButton event listener
    continueShoppingButton.addEventListener('click',()=>{
        localStorage.clear();          // Clear the localStorage of all the quantity and item values
        cartItemsCountDisplay();
        cartItemsDisplay();
        cartLiveQuantityUpdate();
        subTotalCartValue();

        //Closing the modal
        modalBackdropCheckout.classList.add('hidden');
        document.body.classList.remove('modal-open');
        
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
    cartItemsDisplay();            //Displaying all the cart items from localStorage
    cartLiveQuantityUpdate();      //Added event listeners to inputElement for live quantity update
    clearCart();                   //Event Listeners and modals
    subTotalCartValue();           //Displaying the subTotal of all the items in cart 
    buyNow();                      //Event Listeners and modals on  Buy Now 
});