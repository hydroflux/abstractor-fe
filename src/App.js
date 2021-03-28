import './App.css';

import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import Main from './containers/main/Main';

import Home from './containers/main/Home';
import Submit from './containers/main/Submit';
import Review from './containers/main/Review';

import { useState } from 'react'

function App() {

  // const backendURL = `http://localhost:8000`

  const [ abstraction , setAbstraction ] = useState({})

  const [ loggedIn , setLogin ] = useState(false)
  const toggleLogin = () => setLogin(!loggedIn)

  const routes = [
    { title: `Home`, path: `/home`, component: Home },
    { title: `Submit`, path: `/submit`, component: Submit },
    { title: `Review`, path: `/review`, component: Review }
  ]

  return (
    <div className="App">
      <Header routes={routes} loggedIn={loggedIn}/>
      <Main 
        toggleLogin={toggleLogin}
        loggedIn={loggedIn}
        routes={routes}
        setAbstraction={setAbstraction}
        abstract={abstraction}
      />
      <Footer/>
    </div>
  );
}

export default App;
