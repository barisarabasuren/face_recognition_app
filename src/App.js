import React, { useState, useEffect, useCallback } from 'react';
import './app.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';

const App = () => {
  const [input, setInput] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [renderedImage, setRenderedImage] = useState('')
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [isSignIn, setIsSignIn] = useState(true);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  })

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
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

  const handleSignOut = ()  => {
    setInput('')
    setImageUrl('')
    setRenderedImage('')
    setBox({})
    setUser({
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    })
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const calculateFaceLocation = (data) => {
    
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

  const onSubmit = (e) => {
    setImageUrl(input);
    setRenderedImage(input);
    e.preventDefault();
  };

  const updateEntries = useCallback(
    () => {
      if(imageUrl) {
        fetch('https://pacific-retreat-37314.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            entries: count,
            joined: user.joined
          })
        })
      }
    },[user, imageUrl],
  )

  useEffect(() => {
    const clarifiaCalculate = () => {
        fetch("https://pacific-retreat-37314.herokuapp.com/clarifai", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          imageUrl: imageUrl
        })
      })
        .then(response => {
          if(response.status === 200) {
            return response.json()
          } else {
            console.log('there is a problem with API')
          }
        })
        .then(data => {
          calculateFaceLocation(data)
          updateEntries()
          setImageUrl('')
        }) 
        .catch(error => console.log('error', error));
    }
    
    if(imageUrl){
      clarifiaCalculate()
    }
  }, [imageUrl, updateEntries])

  return (
    <div className='App body'>
      <Navigation onRouteChange={onRouteChange} handleSignOut={handleSignOut} isSignIn={isSignIn}/>
      {route === 'home'
      ? <div className='mt5 mb5'>
          <ImageLinkForm 
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            renderedImage={renderedImage}
            box={box}
            user={user}
          /> 
        </div>
      : (
        route === 'signin'
        ? <SignIn loadUser={loadUser} onRouteChange={onRouteChange}/>
        :<Register loadUser={loadUser} onRouteChange={onRouteChange}/>
        )
      }
    </div>
  );
}

export default App;
