import './App.css';
import Introduction from './components/Introduction.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Introduction/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
