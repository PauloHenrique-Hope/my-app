import React from 'react'
import '../styleLogin.css'
import Purchase from '../images/pexels-angela-roma-7319294.jpg'

export default function Login(){
    return(
            
                <div className='container'>
                    <div className='login--image-container'>
                            <img src={Purchase} alt="" className='login--image'/>
                        </div>
                    <div className='main'>
                
                        <div className='bg'>
                            <div className='login--main-container'>
                
                                    <div className='login--username'>
                                        <h3>Username or email address</h3>
                                        <input type="text" />
                                    </div>
                                    <div className='login--password'>
                                        <h3>Password</h3>
                                        <input type="password" />
                                    </div>
                                    <div className='login--btn'>
                                        <button type="submit">Sign in</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
           
    )
}