import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Navbar from './components/Navbar'
import { Route, Routes ,Navigate} from 'react-router-dom';
function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
   </>
  );
}
export default App;
