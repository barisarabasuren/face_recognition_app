import { useState } from 'react';
import './signIn.css';

const SignIn = ( { onRouteChange, loadUser } ) => {
    const[signInEmail, setSignInEmail] = useState('')
    const[signInPassword, setSignInPassword] = useState('')

    const onSignInEmailChange = (e) => {
        setSignInEmail(e.target.value);
    }

    const onSignInPasswordChange = (e) => {
        setSignInPassword(e.target.value);
    }

    const onSubmitSignIn = (e) => {
        e.preventDefault();
        fetch('https://pacific-retreat-37314.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user[0].id) {
                    loadUser(user[0])
                    onRouteChange('home')
                }
            });
    }

    return(
        <div className='form-wrapper'>
            <form 
                className="form"
                onSubmit= {onSubmitSignIn} 
                >
                <div id="sign_up" className="input-wrapper">
                    <legend className="f2 fw5 ph0 mh0">Sign In</legend>
                    <div className="mt3 w-100">
                        <label className="db fw6 lh-copy f6 tc">Email</label>
                        <input 
                            className="input"  
                            type="email" name="email-address"  
                            id="email-address"
                            onChange = {onSignInEmailChange}
                        />
                    </div>
                    <div className="mv3 w-100">
                        <label className="db fw6 lh-copy f6 tc">Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange = {onSignInPasswordChange}
                        />
                    </div>
                </div>
                <button 
                    type='submit' 
                    className='fw f4 pa2 ba pointer button'
                >
                    <span>Sign In</span>
                </button>
                <div className="lh-copy mt3">
                    <a href="#0" onClick={() => onRouteChange('register')} className="f5 link dim black db">Register</a>
                </div>
            </form> 
        </div>
               
    )
}

export default SignIn;