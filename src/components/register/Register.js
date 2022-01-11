import { useState } from 'react';
import './register.css';

const Register = ( { onRouteChange, loadUser } ) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')


    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onSubmitRegister = (e) => {
        e.preventDefault();
        fetch('https://pacific-retreat-37314.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
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
                onSubmit={onSubmitRegister}
                >
                <div id="sign_up" className="input-wrapper">
                    <legend className="f2 fw5 ph0 mh0">Register</legend>
                    <div className="mt3 w-100">
                        <label className="db fw6 lh-copy f6 tc">Name</label>
                        <input 
                            className="input"  
                            type="text" name="name"  
                            id="name"
                            onChange={onNameChange}
                            />
                    </div>
                    <div className="mt3 w-100">
                        <label className="db fw6 lh-copy f6 tc">Email</label>
                        <input 
                            className="input"  
                            type="email" name="email-address"  
                            id="email-address"
                            onChange={onEmailChange}
                            />
                    </div>
                    <div className="mv3 w-100">
                        <label className="db fw6 lh-copy f6 tc">Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={onPasswordChange}
                            />
                    </div>
                </div>
                <button 
                    type='submit' 
                    className='fw f4 pa2 ba pointer button'
                >
                    <span>Register</span>
                </button>
                <div className="lh-copy mt3">
                    <a href="#0" onClick={() => onRouteChange('signin')} className="f5 link dim black db">Sign In</a>
                </div>
            </form>
        </div>
        
    )
}

export default Register;