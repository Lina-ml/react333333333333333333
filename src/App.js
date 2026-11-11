import { BrowserRouter , Route , Routes , Link } from "react-router-dom";


import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sign from "./components/sign/autorization/Sign";
import SignUp from "./components/sign/registration/SignUp.js";


function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    

    <Routes>
      <Route path="/" element={<Content/>} />
      <Route path="/login" element={<Sign/>} />
      <Route path="/registration" element={<SignUp/>} />
     
    </Routes>

    </BrowserRouter>
  );
}

export default App;
