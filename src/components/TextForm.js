import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick= ()=>{
        // console.log("click hua hai " + text);
        let newtext = text.toUpperCase()
        settext(newtext)

    }
    const clearclick= ()=>{
        // console.log("click hua hai " + text);
        let newtext = text.toUpperCase()
        settext(" ")

    }
    const handleonchange= (event)=>{
        // console.log("change hua hai ");
        settext(event.target.value)

    }
    const handleCopy=()=> {
        var text = document.getElementById("comment")
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
const [text,settext] = useState('Enter text here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
  
    <div className="TextForm">
  <label for="comment">Comment:</label>
  <textarea className="form-control" rows="8" value={text} onChange={handleonchange} id="comment"></textarea>
</div>
<button className="btn btn-primary my-3" onClick={handleupclick} > Change to uppercase</button >
&nbsp;&nbsp;
<button className="btn btn-primary" onClick={handleCopy} >Copy</button>
<button className="btn primary"onClick ={clearclick}>Clear</button>
    </div>
    <div className='container my-3'>
        <h2>summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words {text.length} char</p>

    </div>
    </>
  )
}
