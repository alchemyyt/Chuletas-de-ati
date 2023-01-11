const menuSpan = document.getElementById('menuSpan');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
const menuIcon = document.getElementById('menuIcon');
const navRight = document.querySelector('.navRight');
const closeMenuMobile = document.getElementById('closeMenuMobile');
function desactive(element) {
  let isElementClose = element.classList.contains('inactive');
  if (isElementClose === false) {
      element.classList.add('inactive')
  }
};
menuIcon.addEventListener('click',()=>{
  navRight.style.display='flex';
});
closeMenuMobile.addEventListener('click',()=>{
  navRight.style.display='none';
})
menuSpan.addEventListener('click',()=>{
  menu.classList.toggle('inactive');
});
closeMenu.addEventListener('click',()=>{
  desactive(menu);
});