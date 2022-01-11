import Logo from './logo/Logo';

const Navigation = ( { onRouteChange, isSignIn, handleSignOut, route } ) => {
    const handleNavigator = () => {
        if(route === 'signin') {
            return <a href="#0" onClick={() => onRouteChange('register')} className="f4 ma3 link dim black db">Register</a>                    
        } else {
            return <a href="#0" onClick={() => onRouteChange('signin')} className="f4 ma3 link dim black db">Sign In</a>
        }
    }
    if(isSignIn === false) {
        return(
            <nav className="flex justify-between items-center shadow-5" style={{backgroundColor: '#e5e5e5'}}>
                <div className="ma3">
                    <Logo />
                </div>
                <a href="#0" 
                    onClick={() => {
                        onRouteChange('signin')
                        handleSignOut()
                    }} 
                    className="f4 ma3 link dim black db"
                    >
                    Sign Out
                </a>
            </nav>
        )    
    } else {
        return(
            <nav className="flex justify-between items-center shadow-5" style={{backgroundColor: '#e5e5e5'}}>
                <div className="ma3">
                    <Logo />
                </div>
                <div className='flex'>
                    {handleNavigator()}
                </div>

            </nav>
        )   
    } 
};

export default Navigation;