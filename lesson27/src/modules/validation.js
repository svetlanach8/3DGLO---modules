const validation = () => {
  const inputCalc = document.querySelectorAll('.calc-item:not(:first-child)');
  const inputEmail = document.querySelectorAll('input[type=email]');

  inputCalc.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "")
    })
  })

  inputEmail.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\w\-\@\.\!\~\*\']/gi, "")
    })
  })
}

export default validation;

