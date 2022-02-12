var navGroup = document.getElementById("navLinks");
var seleccion = navGroup.getElementsByClassName("seleccion");

for (var i = 0; i < seleccion.length; i++){
    seleccion[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
        document.querySelector(".navLinks").classList.toggle("navLinks_visible");
    })
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navLinks");

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("navLinks_visible");
})


