import React from 'react'
import '../src/Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <div className='nav__contents'>
                <img 
                    className='nav__logo'
                    src='https://cdn.vox-cdn.com/thumbor/lfpXTYMyJpDlMevYNh0PfJu3M6Q=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png' 
                    alt=''
                />
                <img 
                    className='nav__avatar'
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
                    alt=''
                />
            </div>
        </div>
            
    )
}

export default Nav
