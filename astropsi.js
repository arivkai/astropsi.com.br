window.onscroll = function() {
    var navbar = document.getElementById("sticky-navbar");
    var navbarPos = document.getElementById("navbar").offsetTop;
    var scrollPos = window.scrollY;
      
    if (scrollPos >= navbarPos){
        navbar.classList.remove("hide");
    }else{
        navbar.classList.add("hide");
    }
};