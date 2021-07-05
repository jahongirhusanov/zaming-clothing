import React, { useState } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

function SignIn() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleSubmit(e) {
    setData({ email: '', password: '' })
    e.preventDefault()
  }

  function handleChange(event) {
    const { value, name } = event.target
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })

    // setData({[name]: value})
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={data.email}
          required
          handleChange={handleChange}
          label='Email'
        />
        <FormInput
          name='password'
          type='password'
          value={data.password}
          required
          handleChange={handleChange}
          label='Password'
        />
        <CustomButton type='submit'>Sign In</CustomButton>
        {/* <input type='submit' value='Submit Form' /> */}
      </form>
    </div>
  )
}

export default SignIn
