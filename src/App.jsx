import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('')

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (e) =>{
    setText(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col m-9 ">
        <div className="mb-3 flex flex-col gap-5">
          <label htmlFor="textBox" className="text-lg font-bold text-center">Count Character and words using reactjs</label>
          <textarea  id="textBox" cols="30" rows="10" value={text} onChange={handleOnChange} className=" p-5 border border-black rounded-2xl"></textarea>
        </div>
        <div className="flex flex-row gap-10 items-center">
        <button className="border p-4 rounded-full hover:bg-sky-500 hover:text-white" onClick={handleUpClick}>Click to uppercase</button>
        <button className="border p-4 rounded-full hover:bg-sky-500 hover:text-white" onClick={handleDownClick}>Click to lowercase</button>
        </div>
      </div>
      <div className="m-9">
        <h6 className="text-lg font-bold tracking-wide">Some Extra Information</h6>
        <p className="text-lg font-bold tracking-wide">{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  );
}

export default App;
