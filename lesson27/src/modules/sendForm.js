const sendForm = ({ formId, someElem = [] }) => {
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется!';

  const validate = (list) => {

    let success = true;

    if (list.querySelector('input[name=user_message]')) {
      if (/[^а-я\s\d\.\,\!\?\;\:\-\(\)\"\']/gi.test(list.querySelector('input[name=user_message]').value)) {
        success = false
      }
    }

    if (/[^\d\(\)\-\+]/g.test(list.querySelector('input[name=user_phone]').value) ||
      /[^а-я\s]/gi.test(list.querySelector('input[name=user_name]').value)) {
      success = false
    }

    return success;
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = (blockForm) => {
    const formElements = blockForm.querySelectorAll('input');
    const formData = new FormData(blockForm);
    const formBody = {};

    statusBlock.textContent = loadText;
    statusBlock.style.color = 'white';
    blockForm.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id)
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    })

    if (validate(blockForm)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText;

          formElements.forEach(input => {
            input.value = ''
          })
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        })
    } else {
      alert('Данные не валидны!!!');
      statusBlock.textContent = '';
    }
  }

  try {
    formId.forEach(id => {
      const form = document.getElementById(id);

      if (!form) {
        throw new Error('Верните форму на место, пожалуйста!')
      }
  
      form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        submitForm(form);
      })
    }) 
  } catch (error) {
      console.log(error.message)
  }

}

export default sendForm;
