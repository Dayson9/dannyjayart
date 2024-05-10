const nav = document.querySelector(".nav"), anchors = nav.querySelectorAll("a"), trig = document.querySelector("#trigger"), width = window.innerWidth;

var nav_is_opened = false;

const toggleNav = () =>{
if(nav_is_opened){
nav.style.transform = "translateX(-70vw)";
trig.className = "bx bx-menu-alt-left";
nav_is_opened = false;
}else{
nav.style.transform = "translateX(0vw)";
trig.className = "fa fa-times";
nav_is_opened = true;
}
}

anchors.forEach((a) =>{
a.addEventListener("click", function() {
if(width < 769){
this.parentElement.style.transform = "translateX(-70vw)";
trig.className = "bx bx-menu-alt-left";
nav_is_opened = false;
}
})
})