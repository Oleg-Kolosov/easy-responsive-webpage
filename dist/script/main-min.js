const menuBtn=document.querySelector(".menu-btn"),menuItems=document.querySelector(".menu-items"),menuItem=document.querySelectorAll(".menu-item");function toggle(){menuBtn.classList.toggle("open"),menuItems.classList.toggle("open")}menuBtn.addEventListener("click",()=>{toggle()}),menuItem.forEach(e=>{e.addEventListener("click",()=>{menuBtn.classList.contains("open")&&toggle()})});