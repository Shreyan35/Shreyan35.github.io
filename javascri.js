const hambuger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hambuger_icon.addEventListener('click',() => {
   nav_list.classList.toggle('open');
   hambuger_icon.classList.toggle('active');    
});