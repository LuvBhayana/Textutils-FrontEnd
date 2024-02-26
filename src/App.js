
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
   //const [mode,setMode] = useState('light');
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
     }, 1500);

  }
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode is enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("light mode is enabled","success");
    }

  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText={"dfsfdf"}/> */}
<BrowserRouter>
<Navbar title =  "TextUtils" mode={mode} aboutText={"About"} toggleMode ={toggleMode}/>
<Alert alert = {alert}/>
<div className='container'>


<Routes>
<Route path="/about" element={<About/>}/>

<Route path="/" element={<Textform showAlert={showAlert} heading="Try My website for free work with text:)" mode={mode}/>}> 
</Route>
</Routes>
</div>
</BrowserRouter>



    </>
  );
}
export default App;
