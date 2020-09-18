burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navlist = document.querySelector('.nav-list')



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-res');
    navlist.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-resp');
})