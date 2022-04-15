/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const btnMenu = document.getElementById('btnMenu')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}
btnMenu.addEventListener('click', toggleMenu)

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('active')
  })
}

/* Botão voltar para o topo */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 30) {
    backToTopButton.classList.add('active')
  } else {
    backToTopButton.classList.remove('active')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
})

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
