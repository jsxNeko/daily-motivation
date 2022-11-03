import './App.css';
import CustomCursor from 'custom-cursor-react';
import Introduction from './components/Introduction';
import EnterUserInformation from './components/EnterUserInformation';
import ParticlesBox from './components/Particles';
import Home from './components/Home';
import Quote from './components/Quote';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ParticlesBox/>
      <CustomCursor
      className="pos-absolute"
      targets={['.App']}
      customClass="custom-cursor"
      dimensions={58}
      fill="TRANSPARENT"
      strokeColor="#FFF"
      opacity={1}
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.5,
      }}
      strokeWidth={5}
      targetOpacity={0.9}
      targetScale={1}
      />
      <div className="App">
      <ToastContainer position="top-center" limit={1} theme="dark"/>
        <Routes>
          <Route index element={<Introduction/>}/>
          <Route path="/get-started" element={<EnterUserInformation/>}/>
          <Route path="planning-your-day">
            <Route index element={<Home/>}/>
            <Route path="get-quote" element={<Quote/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
