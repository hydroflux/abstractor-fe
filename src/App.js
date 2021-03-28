import './App.css';

import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import Main from './containers/main/Main';

import Home from './containers/main/Home';
import Review from './containers/main/Review';

import { useState } from 'react'
import CreateAbstraction from './components/CreateAbstraction';

function App() {

  const [ abstraction , setAbstraction ] = useState({})

  const [ loggedIn , setLogin ] = useState(false)
  const toggleLogin = () => setLogin(!loggedIn)

  const routes = [
    { title: `Home`, path: `/home`, component: Home },
    { title: `Create`, path: `/submit`, component: CreateAbstraction, abstraction, setAbstraction },
    { title: `Review`, path: `/review`, component: Review }
  ]

  return (
    <div className="App">
      <Header routes={routes} loggedIn={loggedIn}/>
      <Main 
        toggleLogin={toggleLogin}
        loggedIn={loggedIn}
        routes={routes}
      />
      <Footer/>
    </div>
  );
}

export default App;
