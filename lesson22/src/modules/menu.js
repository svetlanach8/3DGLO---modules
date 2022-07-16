const menu = () => {
  const mainHeader = document.querySelector('.main-header');
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  mainHeader.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handleMenu();
    }
  })

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || e.target.matches('menu>ul>li>a')) {
      handleMenu();
    }
  })
}

export default menu;
