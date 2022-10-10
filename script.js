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
    
    console.log(element.target)
    let target = element.target;
    target.style.position = "absolute"
    for(let i =0; i<10 ; i++){
        console.log((target.offsetWidth + 5).toString())
        target.style.width =  (target.offsetWidth + 5).toString() + 'px'
        target.style.height =  (target.offsetHeight + 5).toString() + 'px'
        
        
        
    }
}
