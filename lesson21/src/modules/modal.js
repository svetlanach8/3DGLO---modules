const modal = () => {
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  let count;
  let idInterval;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      count = 0;
      AnimateModal();
      modal.style.display = 'block';
    })
  })

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.style.top = '';
  })

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
}

export default modal;
