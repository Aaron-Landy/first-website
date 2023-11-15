const mainMenu = document.querySelector('.navBar');
const closeMenu = document.querySelector('.closeBar');
const openMenu = document.querySelector('.openBar');
const menu_items = document.querySelectorAll('nav .navBar li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// welcome animation 
/*
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.animated-title');
    title.classList.add('animated');
});
*/



//contact js
var contactBtn = document.getElementById("contact-btn")


