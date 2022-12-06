const homebtn = document.getElementById("homebtn");
const projectsbtn = document.getElementById("projectsbtn");
const contactbtn = document.getElementById("contactsbtn");
const body = document.getElementById("body");
const content = document.querySelectorAll('.card')
const meme = document.getElementById("ay");
const bigMan = document.getElementById("AY");

// content.forEach(element => {
//     element.addEventListener('click', growcard)
// });

function switchpage(element){
    // try{
    let id = element.target.value
    console.log(element.target)
    let pages = body.children;
    console.error(pages)

    for(let i = 0; i< pages.length; i++){
        if (pages[i].id === id){
            pages[i].style.display = "block";
    
        }else{
            pages[i].style.display = "none";
        } 
        
    }
    // }catch(err){
    //     console.error(err.toString());
    // }
}           


homebtn.addEventListener("click", switchpage)
projectsbtn.addEventListener("click", switchpage)
contactbtn.addEventListener("click", switchpage)



function growcard(element){
    let witdh = 441;
    let height = 82    
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
    })
}

function imgpopup(element){
    element = document.getElementById(element)
    console.log(element)
    element.style.position = "absolute"
    element.style.width = "100%"
    element.style.height = "100%"
    element.style.zIndex = "3"
}

function dissapear(element){
    element = document.getElementById(element)
    element.style.opacity = "0"
}