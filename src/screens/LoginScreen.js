import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
    return (
        <div className='loginScreen'> 
            <div className ='loginScreen__background'>
                <img 
                    className='loginScreen__logo'
                    src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png' 
                    alt=''
                />
                <button className='loginScreen__button'>
                    Sign In
                </button>
                <div className='loginScreen__gradient'/>
            </div>
        </div>
    )
}

export default LoginScreen
