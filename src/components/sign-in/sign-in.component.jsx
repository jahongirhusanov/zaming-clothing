import React, { useState } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

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

        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
