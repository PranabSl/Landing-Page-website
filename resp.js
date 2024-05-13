burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
icon= document.querySelector('.icon')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    icon.classList.toggle('v-class-resp');
    
    

})