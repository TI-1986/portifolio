/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//validando form
//
//
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const mensagem = document.getElementById('mensagem')
form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value
  const emailValue = email.value
  const assuntoValue = assunto.value
  const mensagemValue = mensagem.value

  if (usernameValue === '') {
    setErrorFor(username, 'O nome é obrigatório.')
  } else {
    setSuccessFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, 'O email é obrigatório.')
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Por favor, insira um email válido.')
  } else {
    setSuccessFor(email)
  }

  if (assuntoValue === '') {
    setErrorFor(assunto, 'O assunto é obrigatório.')
  } else {
    setSuccessFor(assunto)
  }

  if (mensagemValue === '') {
    setErrorFor(mensagem, 'digite sua mensagem.')
  } else {
    setSuccessFor(mensagem)
  }

  const formControls = form.querySelectorAll('.form-control')

  const formIsValid = [...formControls].every(formControl => {
    return formControl.className === 'form-control success'
  })

  if (formIsValid) {
    console.log('O formulário está 100% válido!')
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  // Adiciona a mensagem de erro
  small.innerText = message

  // Adiciona a classe de erro
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement

  // Adicionar a classe de sucesso
  formControl.className = 'form-control success'
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 60) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
