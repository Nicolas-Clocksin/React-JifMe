
// import Header from './Components/Header.js';
//import Holder from './Components/Holder';
// import Containers from './Components/Container.js';
// import ButtonBar from './Components/ButtonBar';


import './App.css';
import AddToLibrary from './Pages/AddToLibrary';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
 
  
  

  //App returns Routes to be used by different pages and sets the calls to each page within the
  //application 
  return (
    <Router>
         
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AddToLibrary" element={<AddToLibrary/>}/>
        </Routes>
    
    </Router>
  );
}

export default App;
