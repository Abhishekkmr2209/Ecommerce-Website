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
            displayBlog(currentPage);
        });
        }
        button.classList.add('paginationButton');
        pagination.appendChild(button);
        buttonRefs.push(button);

        
    }
}

// Displaying blogs as per currentPage

function displayBlog(currentPage,perPage){
    const start = (currentPage-1)*perPage;
    const end  = start + perPage;
    
    const currentBlogsArray = blogs.slice(start,end);
    
}



window.addEventListener('load',()=>{
    pagination();
});
