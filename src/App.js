import './App.css';
import Introduction from './components/Introduction';
import UserInformation from './components/UserInformation';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
}

export default App;
