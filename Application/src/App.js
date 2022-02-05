//import the libraries and components to be rendered throughout the application
import './App.css';
import AddToLibrary from './Pages/AddToLibrary';
import Home from './Pages/Home';
import ViewLibrary from './Pages/ViewLibrary';
import Likes from './Pages/Likes';
import Dislikes from './Pages/Dislikes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  //App returns Routes to be used by different pages and sets the calls to each page within the
  //application 
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddToLibrary" element={<AddToLibrary />} />
        <Route path="/ViewLibrary" element={<ViewLibrary />} />
        <Route path="/Likes" element={<Likes />} />
        <Route path="/Dislikes" element={<Dislikes />} />
      </Routes>

    </Router>
  );
}

export default App;
