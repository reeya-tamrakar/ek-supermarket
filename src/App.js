import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/skdslider.css';
import './assets/css/style.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Faq from './pages/Faq';
import {Routes, Route} from 'react-router-dom'
import ShortCodes from './pages/ShortCodes';
import Gourmet from './pages/Gourmet';
import About from './pages/About';
import Single from './pages/Single';

function App() {
  return (
  <>
  <Routes>
  <Route path ="/" element = {<Home />}/>
  <Route path ="login" element = {<Login />}/>
  <Route path ="register" element = {<Register />}/>
  <Route path ="contact" element = {<Contact />}/>
  <Route path ="offers" element = {<Offers />}/>
  <Route path ="faq" element = {<Faq />}/>
  <Route path ="short-codes" element = {<ShortCodes />}/>
  <Route path ="gourmet" element = {<Gourmet />}/>
  <Route path ="about" element = {<About />}/>
  <Route path ="single" element = {<Single />}/>
  </Routes>
  </>
  );
}

export default App;
