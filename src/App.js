
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [inputText , setInputText] = useState('');
  const [startTime , setStartTime] = useState(null);
  const [typingSpeed , setTypingSpeed ] = useState(0);

  useEffect(() => {
    if(startTime){
      const endTime = new Date().getTime();
      const timeElapsedInsecond = (endTime - startTime) / 1000 ;
      const wordTyped = inputText.trim().split(/\s+/).length;
      const speed =  Math.round((wordTyped / timeElapsedInsecond * 60));
      setTypingSpeed(speed);
    }
  }, [inputText , startTime]);
  
  const handleInputChange = (e) => {
    if(!startTime){
      setStartTime(new Date().getTime());
    }
    setInputText(e.target.value)
  }

  return (
    <div className="App">
      <h2>typing speed calculator</h2>
      <textarea name="" id="" cols="50" rows="5" value={inputText} onChange={handleInputChange} placeholder='typing..'/>
      <p>your typing speed : {typingSpeed} words per minute</p>
    </div>
  );
}

export default App;
