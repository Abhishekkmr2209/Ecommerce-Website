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

//Creating form 
function formDevelopment(){
    const formDetails = document.querySelector('#form-details');
    const peopleDiv = document.querySelector('.people');
    

    //Creating form element
    const formElement = document.createElement('form');
    formElement.id='contactForm';

    //Appending formElement to form-details
    formDetails.insertBefore(formElement,peopleDiv);

    //Creating a span element
    const spanElement = document.createElement('span');
    spanElement.textContent = "Leave a Message";

    //Appending a span element
    formElement.appendChild(spanElement);

    //Creating an h2 element
    const h2Element = document.createElement('h2');
    h2Element.textContent = 'We love to hear from you';

    //Appending the h2Element
    formElement.appendChild(h2Element);

    //Creating 1st input
    const input1 = document.createElement('input');
    input1.type='text';
    input1.id='name';
    input1.placeholder = 'Your Name';

    //Appending 1st input
    formElement.appendChild(input1);

    //Creating 2nd input
    const input2 = document.createElement('input');
    input2.type='text';
    input2.id='email';
    input2.placeholder = 'E-mail';

    //Appending 2nd input
    formElement.appendChild(input2);

    //Creating 3rd input
    const input3 = document.createElement('input');
    input3.type='text';
    input3.id='subject';
    input3.placeholder = 'Subject';

    //Appending 3rd input
    formElement.appendChild(input3);

    //Creating textarea Element
    const textareaElement = document.createElement('textarea');
    textareaElement.placeholder = 'Your Message';
    textareaElement.id='message';
    textareaElement.rows='10';
    textareaElement.cols = '30';

    //Appending textareaElement
    formElement.appendChild(textareaElement);

    //Creating button element having global class .normal
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.id='button';
    button.type='submit';
    button.classList.add('normal');

    //Appending button to formElement
    formElement.appendChild(button);

    //Adding form event listener
    formElement.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = input1.value;
    const email = input2.value;
    const subject = input3.value;
    const message = textareaElement.value;

    sendViaElasticAPI(name, email, subject, message);

    formElement.reset();
    });


    
}

function sendViaElasticAPI(name, email, subject, message) {
    fetch("https://api.elasticemail.com/v2/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            apikey: "5CE9893FF2E85E18335BD8BEC8AFB5C021D5B6459CE46CC1CCAEDD69DDB982E0129D4E2B5801432C774F9629FAE5F970", // API Key
            subject: subject,
            from: "abhi.yadav8911@gmail.com", 
            fromName: "Abhishek Kumar",
            to: "abhi.yadav8911@gmail.com",
            bodyHtml: `<b>New Message from:</b> ${name}<br/>
                       <b>Email:</b> ${email}<br/>
                       <b>Subject:</b> ${subject}<br/>
                       <b>Message:</b><br/>${message}`,
            isTransactional: true
        })
    }).then(response => response.json())
    .then(result => {
        if (result.success) {
            alert("Message sent successfully! ⚡\n\nNote: This service is currently using Elastic Email's free plan. Auto-reply emails can only be sent to the registered email address (abhi.yadav8911@gmail.com). Other recipients will not receive confirmation emails due to plan restrictions.");

            //  Auto-reply
            sendAutoReply(email, name, message);
        } else {
            console.error(result);
            alert("API error: " + result.error);
        }
    }).catch(error => {
        console.error("Fetch error:", error);
        alert("Network or CORS error");
    });
}

function sendAutoReply(email, name, message) {
    fetch("https://api.elasticemail.com/v2/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            apikey: "5CE9893FF2E85E18335BD8BEC8AFB5C021D5B6459CE46CC1CCAEDD69DDB982E0129D4E2B5801432C774F9629FAE5F970", //  Same key
            subject: "Thank You for Contacting Us!",
            from: "abhi.yadav8911@gmail.com",
            fromName: "Cara Shopping Pvt.Ltd.",
            to: email,
            bodyHtml: `Hi ${name},<br/><br/>
                       Thank you for contacting us. We received your message:<br/>
                       <i>"${message}"</i><br/><br/>
                       We’ll get back to you shortly.<br/><br/>
                       Regards,<br/>Abhishek Kumar`,
            isTransactional: true
        })
    }).then(response => response.json())
    .then(result => {
        if (result.success) {
            alert("Auto-reply also sent!");
        } else {
            console.error(result);
            alert("Auto-reply failed: " + result.error);
        }
    }).catch(error => {
        console.error("Auto-reply error:", error);
        alert("Network or CORS error in auto-reply");
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



//On window loading
window.addEventListener('load',()=>{
    formDevelopment();
    cartItemsCountDisplay();    //Display the total no of items in cart upon page load or refresh
});