const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const sliders = document.querySelectorAll('.portfolio-item');
  const dotsBlock = document.querySelector('.portfolio-dots');

  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;
  let dots = [];
  
  for (let i = 0; i < sliders.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dotsBlock.append(dot);
    dots.push(dot);
  }

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const autoSlide = () => {
    prevSlide(sliders, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    currentSlide++;

    if (currentSlide >= sliders.length) {
      currentSlide = 0;
    }

    nextSlide(sliders, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  }

  const stopSlide = () => {
    clearInterval(interval);
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return
    }

    prevSlide(sliders, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index
        }
      })
    }

    if (currentSlide >= sliders.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = sliders.length - 1;
    }

    nextSlide(sliders, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  })

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide()
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval);
    }
  }, true)

  startSlide(timeInterval);
}

export default slider;
