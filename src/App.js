import './App.css';
import { Button } from '@material-ui/core';
import HikingImg from './images/hiking2.png';
import Logo from './images/logo.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={Logo} alt="Travel"/>
        <div class="burger" onclick="toggleMenu()"></div>
        <ul class="navigation">
            <Button className="navBtn" variant="contained" color="primary">Login</Button>
            <Button className="navBtn" variant="outlined">Sign Up</Button>
        </ul>
    </header>

    <section class="banner" id="banner">
        <div class="content"> 
          <div class="info">
          
          </div>
          <img src={HikingImg} alt="Hiking"/>
        </div>
    </section>
    </div>
  );
}

export default App;
