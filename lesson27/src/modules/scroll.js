const scroll = () => {
  const menuItems = document.querySelectorAll('ul>li>a');
  const scrollBtn = document.querySelector('main>a');
  let scrollBtnLink;
  let menuItemLink;

  menuItems.forEach(menuItem => menuItem.addEventListener('click', (e) => {
    e.preventDefault();
    scroll(menuItemLink, menuItem);
  }));

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scroll(scrollBtnLink, scrollBtn);
  })

  const scroll = (link, blockLink) => {
    link = blockLink.getAttribute('href');
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
}

export default scroll;
