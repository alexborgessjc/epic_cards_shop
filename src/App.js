import './App.css';
import {Routes, Route} from 'react-router-dom';
import Cards from './pages/Cards';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return(
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cards/:category" element={<Cards />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  ) 
}

export default App;
