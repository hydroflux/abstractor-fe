import './App.css';

import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import Main from './containers/main/Main';

import Home from './containers/main/Home';

import { useEffect, useState } from 'react'
import Login from './components/Login';

function App() {

  const backendURL = `http://localhost:8000`
  const parseHTTPResponse = response => response.json()

  const [ abstraction , setAbstraction ] = useState({})
  const [ isLoggedIn , setIsLoggedIn ] = useState(false)

  const loginUser = ( user, history ) => {
    fetch(`${backendURL}/login/`, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then( parseHTTPResponse )
      .then( ({access}) => {
        localStorage.setItem('token', access)
      })
      .then(() => setIsLoggedIn(true))
      .then(() => history.push("/home"))
  }

  useEffect(() => {
    if (localStorage.token){
      console.log(isLoggedIn)
    }
  }, [isLoggedIn])  

  const logoutUser = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }

  const routes = [
    { title: `Login`, path: `/`, component: Login },
    { title: `Home`, path: `/home`, component: Home, setAbstraction, abstraction},
    // { title: `Create`, path: `/submit`, component: CreateAbstraction, abstraction, setAbstraction }
  ]

  return (
    <div className="App">
      <Header routes={routes} isLoggedIn={isLoggedIn} logoutUser={logoutUser} abstraction={abstraction} setAbstraction={setAbstraction}/>
      <Main 
        isLoggedIn={isLoggedIn}
        loginUser={loginUser}
        routes={routes}
      />
      <Footer/>
    </div>
  );
}

export default App;
