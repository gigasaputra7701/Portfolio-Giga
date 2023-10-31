//navbar 
window.onscroll = function(){
    const header = document.querySelector('header');
    const pageUp = document.querySelector('#pageUp');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset>fixedNav){
        header.classList.add('navbar-fixed');
        pageUp.classList.add('active');
       
    }
    else{
        header.classList.remove('navbar-fixed');
        pageUp.classList.remove('active');
        
    }
}



//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    
});

//portfolio

const imgport = document.querySelector('#imgport');

imgport.addEventListener('click',function(){
    imgport.classList.toggle('imgport-active');
});



