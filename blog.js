import blogs from './blogDescription.js';



// Pagination

function pagination(){
    const pagination = document.querySelector('#pagination');
    const perPage = 5;
    const buttonRefs = [];
    const totalPages = Math.ceil(blogs.length/perPage);
    let currentPage=1;
    
    //Creating Buttons
    for(let i=1;i<=totalPages+1;i++){
        const button = document.createElement('button');
        const currPage=i;
        
        if(i===totalPages+1){
            button.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
            button.addEventListener('click',()=>{
                if(currentPage<totalPages){
                    currentPage++;
                }
                else {
                    currentPage=1;
                }
                displayBlog(currentPage,perPage);
            });
            
        }else{
        button.textContent = i;
        button.addEventListener('click',()=>{
            currentPage=currPage;
            displayBlog(currentPage,perPage);
        });
        }
        button.classList.add('paginationButton');
        pagination.appendChild(button);
        buttonRefs.push(button);

        
    }
}

// Displaying blogs as per currentPage

function displayBlog(currentPage,perPage){

    const blogContainer = document.querySelector('#blogContainer');
    blogContainer.innerHTML = "";
    const start = (currentPage-1)*perPage;
    const end  = start + perPage;
    
    const currentBlogsArray = blogs.slice(start,end);

    currentBlogsArray.forEach((blog)=>{
       //blogCard Container
       const blogCard = document.createElement('div');
       blogCard.classList.add('blogCard');
       //Appending blogCard to blogContainer
       blogContainer.appendChild(blogCard);

       //div containing blogImage
       const blogImageDiv = document.createElement('div');
       blogImageDiv.classList.add('blogImageDiv');
       //Appending to blogCard
       blogCard.appendChild(blogImageDiv);

       //creating img element for blogImageDiv
        const blogImage = document.createElement('img');
        blogImage.src = blog.img; 

        //Appending blogImage to blogImageDiv
        blogImageDiv.appendChild(blogImage);

        //Creating desciptionDiv
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');

        //Appending descriptionDiv to blogCard
        blogCard.appendChild(descriptionDiv);

        //descriptionDiv Elements
        //h4Element
        const h4title = document.createElement('h4');
        h4title.textContent = blog.title;

        //Appending h4
        descriptionDiv.appendChild(h4title);

        //Describing the blog
        const blogRead = document.createElement('p');
        blogRead.textContent = blog.blogRead;

        //Appending blogRead to descriptionDiv
        descriptionDiv.appendChild(blogRead);

        //Hidden blogRead part
        const blogReadMore = document.createElement('span');
        blogReadMore.classList.add('conReadingText');
        blogReadMore.textContent = blog.blogReadMore;

        //Appending hidden part to original
        blogRead.appendChild(blogReadMore);

        //Creating anchor 
        const contRead = document.createElement('a');
        contRead.href="#";
        contRead.textContent = "CONTINUE READING..."
        
        //Appending it to descriptionDiv
        descriptionDiv.appendChild(contRead);

        //Creating Date
        const dateElement = document.createElement('h1');
        dateElement.textContent= blog.date;

        //Appending Date
        blogCard.appendChild(dateElement);

    });

    
}



window.addEventListener('load',()=>{
    pagination();
    displayBlog(1, 5);
});


