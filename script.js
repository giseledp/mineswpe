const homebtn = document.getElementById("homebtn");
const projectsbtn = document.getElementById("projectsbtn");
const contactbtn = document.getElementById("contactsbtn");
const body = document.getElementById("body");
const content = document.querySelectorAll('.card')

content.forEach(element => {
    element.addEventListener('click', growcard)
});

function switchpage(element){
    let id = element.target.value
    console.log(element.target)
    let pages = body.children;
    console.log(pages)

    for(let i = 0; i< pages.length; i++){
        if (pages[i].id === id){
            pages[i].style.display = "block";
    
        }else{
            pages[i].style.display = "none";
        } 
        
    }
}           


homebtn.addEventListener("click", switchpage)
projectsbtn.addEventListener("click", switchpage)
contactbtn.addEventListener("click", switchpage)


function growcard(element){
    witdh = 441;
    height = 82    
    id = window.setInterval(function(){
        if(width >= 1200){
            window.clearInterval(id)
        
        }
        else{
            witdh++;
            height++;
            target.style.width = witdh + "px";
            target.style.height = height + "px"
        }
    }
}

