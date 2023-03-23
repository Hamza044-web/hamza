
import './App.css';

import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const togmode= ()=>{
    if(mode==='light')
   { 
   setMode('dark');
   document.body.style.backgroundColor = '#153064';
   showAlert("Dark mode is enabled.","success");
   }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled.","primary");
    }
  }
//-------------------Green-----------------------------------

/*const togmodeG= ()=>{
  if(mode==='light')
 { 
 setMode('dark');
 document.body.style.backgroundColor = '#3F7856';
 
 showAlert("Green mode is enabled.","success");
 }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled.","primary");
  }
}*/


//------------------------------------------------------
 const [alert,setAlert]= useState('null');

const showAlert=(message,type)=>{

  setAlert({
    msg: message,
    type: type
  })

}


 
 
  return (
  <>
<Router>
<Navbar title="React Learnings" about="About us" mode={mode} togmode={togmode} />
<Alert alert={alert}/>
<Switch>
<div className="container">

     

            <Route exact path="/about">
              <About />
            </Route>
         
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode}/>
            </Route>
            </div>
        </Switch>
 

</Router>
</>
  );
}

export default App; 
