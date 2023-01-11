//components
const navbar = `
<div class="navRight">
  <i class="fa-solid fa-xmark" id="closeMenuMobile"></i>
  <div id="menuMobile">
    <section>
      <h3> Web 💻</h3>
      <span class="webMenuSpan">

      </span>
    </section>
    <section>
      <h3> ingles 💻</h3>
      <span class="inglesMenuSpan">

      </span>
    </section>
  </div>
  <div id="menuCtn">
    <span id="menuSpan">menu</span>
    <i class="fa-solid fa-caret-down" id="menuArrow"></i>
    <div class="index inactive" id="menu">
      <i class="fa-solid fa-xmark" id="closeMenu"></i>
      <section>
        <h3> Web 💻</h3>
        <span class="webMenuSpan">

        </span>
      </section>
      <section>
        <h3> ingles 💻</h3>
        <span class="inglesMenuSpan">

        </span>
      </section>
    </div>
  </div>
  <div id="searchCtn">
    <label for="search">
      <i class="fa-solid fa-magnifying-glass" id="searchIcon"></i>
    </label>
    <input type="text" name="search" id="search" placeholder="Buscar">
    
  </div>
  <div class="socialMediaCtn" >
    <a href="#"><i class="fa-solid fa-briefcase"></i></a>
    <a href="#"><i class="fa-brands fa-linkedin-in" ></i></a>
    <a href="#"><i class="fa-brands fa-twitter" ></i></a>
  </div>
</div>`;

const footer = `<p>Desarrollado por ati</p> `
const navbarSpan = document.getElementsByClassName('navbarSpan');
const footerContent = document.getElementsByClassName('footerContent');

const writeComponent = (component,span)=>{
  for (const iterator of span) {
    iterator.innerHTML=component;
  }
};
writeComponent(navbar,navbarSpan)
writeComponent(footer,footerContent)

//menus templates
const webMenuTemplat = `<ol>
<a href="pages/html.html"><li>html</li></a>
<li>css</li>
<li>javascript</li>
<li>node</li>
<li>prueba</li>
</ol>`;
const inglesMenuTemplat = `<ol>
<a href="#"><li>A1</li></a>
<li>B1</li>
<li>C1</li>
<li>otros</li>
</ol>`;
let webMenuSpan = document.getElementsByClassName('webMenuSpan');
let inglesMenuSpan = document.getElementsByClassName('inglesMenuSpan');
const writeTemplate = (template,span)=>{
  for (const iterator of span) {
    iterator.innerHTML=template;
  }
}
writeTemplate(webMenuTemplat,webMenuSpan)
writeTemplate(inglesMenuTemplat,inglesMenuSpan)

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
