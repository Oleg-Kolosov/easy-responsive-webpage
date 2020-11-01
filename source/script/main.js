const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');


// ! main toggle

menuBtn.addEventListener('click', () => {
    toggle();
})

// ! toggle menu item click if open 

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        if (menuBtn.classList.contains('open')) {
            toggle();
        }
    })
})

// ! function toggle class open

function toggle() {
    menuBtn.classList.toggle('open')
    menuItems.classList.toggle('open')
}