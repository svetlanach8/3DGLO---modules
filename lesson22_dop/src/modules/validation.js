const validation = () => {
  const inputCalc = document.querySelectorAll('.calc-item:not(:first-child)');
  const inputTel = document.querySelectorAll('input[type=tel]');
  const inputEmail = document.querySelectorAll('input[type=email]');
  const inputMessage = document.querySelector('*[placeholder="Ваше сообщение"]');
  const inputText = document.querySelectorAll('input[type=text]:not(.calc-item)');

  inputCalc.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "")
    })
  })

  inputText.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-я\-\s]/gi, "")
    })
  })

  inputMessage.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^а-я\-\s]/gi, "")
  })

  inputEmail.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\w\-\@\.\!\~\*\']/gi, "")
    })
  })

  inputTel.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]/g, "")
    })
  })
}

export default validation;
