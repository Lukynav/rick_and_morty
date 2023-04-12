export const validate = ({ user, password }) => {
    const errorObJ = { user: '', password: '' }
    const emailReguex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const passwordReguex = /[0-9]/
    if (user === '') errorObJ.user = 'The email is required'
    if (!emailReguex.test(user)) errorObJ.user = 'The email is not valid'
  
    if (!(password.length >= 6 && password.length <= 10)) errorObJ.password = 'should be between 6 and 10 characters'
    if (!passwordReguex.test(password)) errorObJ.password = 'should have almost one number'
    return errorObJ
  }
  