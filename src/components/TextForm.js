import React, { useState } from 'react'


export default function TextForm(props) {

  
const handleupclick= ()=>{
    
    let newtxt=text.toUpperCase();
    setText(newtxt);
    props.showAlert("Converted to Uppercase !","secondary");
}
const handleloclick= ()=>{
    
  let newtxt=text.toLowerCase();
  setText(newtxt);
  props.showAlert("Converted to LowerCase !","secondary");
}



const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
  props.showAlert("Text is downloading!","secondary");
}




const handleclclick= ()=>{
    
  
  setText('');
  props.showAlert("Textbox is Cleared !","danger");
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("you are listening the text!","secondary");
}

const onchangehandle = (event)=>{
    
    setText(event.target.value);
}

    const [text, setText] = useState('');
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
 
<div className="mb-3 " >
 <h1 className={"my-3"}>{props.heading}</h1>
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} placeholder='Enter your text' onChange={onchangehandle} id="myBox" rows="8" ></textarea>
  
</div>
<center><button className="btn btn-danger mx-2" id='btnclr' onClick={handleupclick}>Convert To UpperCase</button>
<button className="btn btn-danger mx-2" onClick={handleloclick}>Convert To LowerCase</button>
<button className="btn btn-danger mx-2" onClick={handleclclick}>Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-danger mx-2">Speak Text</button>
<button className='btn btn-danger mx-2' onClick={downloadTxtFile}>Download Text</button>

</center>
<h2 className={"my-5"}>TEXT SUMMARY</h2>
<p >{text.split(' ').length} Words ,{text.length} Characters</p>
<h2 className={"my-5"}>TEXT Preview</h2>
<p >{text}</p>
    </div>
    </>
  )
}
