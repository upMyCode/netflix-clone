import React from 'react'
import './SignupScreen.css'

function SignupScreen() {
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input 
                    type='email'
                    placeholder='Email'
                />
                <input 
                    type='Password'
                    placeholder='password'
                />
                <button 
                    type='submit'>Sign In

                </button>
            </form>
        </div>
    )
}

export default SignupScreen
