import './register.css';

const Register = ( { onRouteChange } ) => {
    return(
        <form 
            className="mt5 mb5  mw8 center bg-white br3 pa4 ba b--black-10 tc shadow-3"
            onSubmit={() => onRouteChange('home')}
        >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw5 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6">Name</label>
                    <input 
                        className="db w-50 f6 pa2 center mb4"  
                        type="text" name="name"  
                        id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6">Email</label>
                    <input 
                        className="db w-50 f6 pa2 center mb4"  
                        type="email" name="email-address"  
                        id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6">Password</label>
                    <input 
                        className="db w-50 f6 pa2 center mb4" 
                        type="password" 
                        name="password"  
                        id="password"/>
                </div>
            </fieldset>
            <button 
                type='submit' 
                className='w-30 fw f4 pa2 ba pointer button'
            >
                <span>Register</span>
            </button>
        </form>
    )
}

export default Register;