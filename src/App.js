import './App.css';
import Introduction from './components/Introduction';
import UserInformation from './components/UserInformation';
import Home from './components/Home';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Upon window loading, check if the user has selected a color previously
window.onload = () => {
  if(localStorage.getItem("background")) { 
    document.body.style.backgroundColor = JSON.parse(localStorage.getItem("background"))
  }
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Introduction/>}/>
          <Route path="/get-started" element={<UserInformation/>}/>
          <Route path="/profile" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
