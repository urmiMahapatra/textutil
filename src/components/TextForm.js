import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Upper Case has been enabled","success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Lower Case has been enabled","success");
    }
    const mirrorTextCase = ()=>{
        console.log("MIrrorcase was clicked" + text);
        let newText = text.split("").reverse().join("");
        setText(newText)
        props.showAlert("mirror Case has been enabled","success");
    }
    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const[text,setText] = useState('Enter text here2');
  return (
<>
 <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div>
    <button types="button" className="btn btn-primary mx-1" onClick={handleUpClick}> Convert To Uppercase</button>
    <button types="button" className="btn btn-primary mx-1" onClick={handleLoClick}> Convert To Lowercase</button>
    <button types="button" className="btn btn-primary mx-1" onClick={mirrorTextCase}> Convert To Mirrorcase</button>    
</div>
<div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
    <h1>Your Text Summery</h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter something to preview it here"}</p>

</div>
</>  
  )
}
