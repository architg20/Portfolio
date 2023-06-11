import { Routes,Route,useLocation } from 'react-router-dom';
import './App.scss';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import particles from './utils.js/particles';

function App() {
   const location=useLocation();
   console.log(location)
  
  const handleInit= async (main) =>{
    await loadFull(main)
  }

  const renderParticleJsHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* particles js*/}
        <Particles id="particles" options={particles} init={handleInit}/>
      {/* Navbar */}
      <Navbar/>
      {/* main page content*/}
      <div className="App__main-page-content">
      <Routes>
         <Route index path ="/" element={<Home/>}/>
         <Route path ="/about" element={<About/>}/>
        
         <Route path ="/contact" element={<Contact/>}/>   
      </Routes>


      </div>

      

    </div>
  );
}

export default App;
