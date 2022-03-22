import './styles/main.pcss'
import isEmail from './validation/isEmail'
import { emailInvalid, emailValid, form, inputEmail } from './UI/get-started-form'

const emailFormState = {
  isDirty: false,
  isValid: false
}

const validateEmail = () => {
  if(emailFormState.isDirty && emailFormState.isValid) {
    emailValid()
  } else {
    emailInvalid()
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(!emailFormState.isDirty) {
    emailFormState.isDirty = true
    validateEmail()
  }

  if(emailFormState.isDirty && emailFormState.isValid) {
    console.log('email valid')
  } else {
    emailInvalid()
  }
})

inputEmail.addEventListener('keyup', (e) => {
  const el = e.target as HTMLInputElement
  emailFormState.isValid = isEmail(el.value)
})

inputEmail.addEventListener('blur', (e) => {
  const el = e.target as HTMLInputElement
  if(el.value.trim() === '') return

  emailFormState.isDirty = true
  emailFormState.isValid = isEmail(el.value)

  validateEmail()
})
