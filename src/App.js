import React, { useEffect, useState} from 'react';
import './app.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';
import Clarifai from 'clarifai';

// eslint-disable-next-line no-unused-vars
const app = new Clarifai.App({
  apiKey: '{d7d55c92dfe1415687a937fa7c8a1495}'
 });

const App = () => {
  const [input, setInput] = useState(0);
  const [imageUrl, setImageUrl] = useState(0);
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [isSignIn, setIsSignIn] = useState(true);

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

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onSubmit = (e) => {
    setImageUrl(input);
    e.preventDefault();
  };

  useEffect(() => {
    const calculateFaceLocation = (data) => {
      if(imageUrl !== 0) {
        const clarifaiFace = data.outputs[0].data.regions;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        let allBoxValues = {}

        for(let i = 0; i < clarifaiFace.length; i++) {
          let boxValue = clarifaiFace[i].region_info.bounding_box;
          
          allBoxValues[i] = {
            leftCol: boxValue.left_col * width,
            topRow: boxValue.top_row * height,
            rightCol: width - (boxValue.right_col * width),
            bottomRow: height - (boxValue.bottom_row * height)  
          }
        }
        setBox(allBoxValues);
      }
    }

    const raw = JSON.stringify({
      "user_app_id": {
            "user_id": "urq6aynz6wdi",
            "app_id": "faceRecognition"
        },
      "inputs": [
        {
          "data": {
            "image": {
              "url": imageUrl
            }
          }
        }
      ]
    });
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key e15aa8e6b57442b8bcf0d6a186c5c4fc'
      },
      body: raw
    }
    if(imageUrl !== 0) {
      fetch("https://api.clarifai.com/v2/models/f76196b43bbd45c99b4f3cd8e8b40a8a/outputs", requestOptions)
      .then(response => response.json())
      .then(result => calculateFaceLocation(result))
      .catch(error => console.log('error', error));
    }
    
  }, [imageUrl])

  return (
    <div className='App body'>
      <Navigation onRouteChange={onRouteChange} isSignIn={isSignIn}/>
      {route === 'home'
      ? <div className='mt5 mb5'>
          <ImageLinkForm 
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            imageUrl={imageUrl}
            box={box}
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
