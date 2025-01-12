const html = document.querySelector('html');
const togleTheme = document.querySelector('#chk-theme');
const floatingMenu = document.querySelector('.floating-menu');
const floatingMenuLinks = document.querySelectorAll('.floating-menu__link');
const menuToggle = document.querySelector('#menu-toggle');
const headerMenu = document.querySelector(".header__menu");
const main = document.querySelector('main')
togleTheme.addEventListener('change', () => {
    const theme = togleTheme.checked
        ? html.setAttribute('theme', 'claro')
        : html.setAttribute('theme', 'noturno')
})

// Adiciona o evento de click de cada item do menu e oculta o menu
floatingMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
        floatingMenu.style.display = 'none'
        headerMenu.classList.remove("icone_fechar") ;
        headerMenu.classList.add("icone_hamburger") ;
        main.style.zIndex  = "1"; 
    })
});


headerMenu.addEventListener("click", () => {
    console.log('headerMenu');
    if (floatingMenu.style.display === 'flex') {
        floatingMenu.style.display = 'none';
        headerMenu.classList.remove("icone_fechar") ;
        headerMenu.classList.add("icone_hamburger") ;        
        main.style.zIndex  = "1"; 

    }
    else {
        floatingMenu.style.display = 'flex'
        headerMenu.classList.add("icone_fechar") ;
        headerMenu.classList.remove("icone_hamburger") ;
        main.style.zIndex  = "-1"; 

    }

})