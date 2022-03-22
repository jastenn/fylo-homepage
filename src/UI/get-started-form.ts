export const form = document.querySelector('#form-email') as  HTMLFormElement
export const inputEmail = form.querySelector('[name="email"]') as HTMLInputElement

const errorId = 'email-error'


const error = document.createElement('span')
inputEmail.parentElement!.style.position = 'relative'
error.id = errorId
error.style.position = 'absolute'
error.style.bottom = '-16px'
error.style.left = '1.5rem'
error.style.color = 'var(--accent-red)'
error.style.fontWeight = '700'
error.style.fontSize = '0.625rem'
error.innerText = 'please enter a valid html'

export const emailInvalid = () => {
  const prevErrorElement = document.getElementById(errorId)
  if(prevErrorElement) prevErrorElement.remove() 
  
  inputEmail.insertAdjacentElement('afterend', error)
}

export const emailValid = () => {
  const prevErrorElement = document.getElementById(errorId)
  if(prevErrorElement) prevErrorElement.remove() 
}