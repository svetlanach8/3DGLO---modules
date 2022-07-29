import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';

      if (document.documentElement.clientWidth >= 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalContent.style.top = progress * 10 + '%';
          }
        });
      }
    })
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  })
}

export default modal;
