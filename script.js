window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("Sticky",window.scrollY>0);
})








