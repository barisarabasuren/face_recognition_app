import React, { useState } from 'react';
import './app.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: '4b62e0aeabc74411aaf03f6296f4463c'
//  });

const App = () => {
  const [input, setInput] = useState(0);
  const [imageUrl, setImageUrl] = useState(0);
  const [route, setRoute] = useState('signin');
  const [isSignIn, setIsSignIn] = useState(true)

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onRouteChange = (route) => {
    if(route === 'signin') {
      setIsSignIn(true) 
    } else if (route === 'register') {
      setIsSignIn(true)
    } else if (route === 'home') {
      setIsSignIn(false)
    }
    setRoute(route);
  }

  const onButtonSubmit = (e) => {
    setImageUrl(input);
    e.preventDefault();
    // app.models
    //   .predict(
    //     Clarifai.COLOR_MPDEL, {input})
    //     .then(
    //       function(response) {
    //         console.log(response);
    //       },
    //       function(err) {
    //         //there was an error
    //       }
    //     );
    // e.preventDefault();
  }

  return (
    <div className='App body'>
      <Navigation onRouteChange={onRouteChange} isSignIn={isSignIn}/>
      {route === 'home'
      ?<div className='mt5 mb5'>
          <ImageLinkForm 
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
            imageUrl={imageUrl}
          /> 
        </div>
      : (
        route === 'signin'
        ? <SignIn onRouteChange={onRouteChange}/>
        :<Register onRouteChange={onRouteChange}/>
        )
      }
      
      
    </div>
  );
}

export default App;
