const modal = () => {
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');

  let count;
  let idInterval;

  const AnimateModal = () => {
    
    count++;
    idInterval = requestAnimationFrame(AnimateModal);

    if (count < 30) {
      modalContent.style.top = count * 3 + 'px';
    } else {
      cancelAnimationFrame(idInterval);
    }

    if (document.documentElement.clientWidth < 768) {
      cancelAnimationFrame(idInterval);
      modalContent.style.top = '85px';
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      count = 0;
      AnimateModal();
      modal.style.display = 'block';
    })
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
      modalContent.style.top = '';
    }
  })
}

export default modal;
