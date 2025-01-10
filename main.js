const html = document.querySelector('html');
const togleTheme = document.querySelector('#chk-theme');
const floatingMenu = document.querySelector('.floating-menu');
const floatingMenuLinks = document.querySelectorAll('.floating-menu__link');
const menuToggle = document.querySelector('#menu-toggle');
const headerMenu = document.querySelector(".header__menu");

togleTheme.addEventListener('change', () => {
    const theme = togleTheme.checked
        ? html.setAttribute('theme', 'claro')
        : html.setAttribute('theme', 'noturno')
})

// Adiciona o evento de click de cada item do menu e oculta o menu
floatingMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
        
    })
});


floatingMenu.addEventListener('mouseover', ()=>{
    if(!menuToggle.checked)
        floatingMenu.style.display = 'none'   

})

