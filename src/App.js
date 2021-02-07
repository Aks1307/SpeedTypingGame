import "./styles.css";
import {useState,useEffect} from 'react';


 function App() {
  const [text,SetText] = useState("");
  const [timer,setTimer] = useState(5);
  const [state,setState] = useState(false);
  const [wordCount,setWordCount] = useState(0);
  function handleChange(event){
       SetText((ps)=> event.target.value) 
  }
  function countWords(){
      let subString = text.split(" ");
      subString = subString.filter((str)=> str!=="");
      return subString.length;
  }
 
  useEffect(()=>{
        if(timer>0 && state===true){
    setTimeout(()=>{
        setTimer((prev) => prev-1);
},1000);
}else if(timer===0){
setTimer(5);
setState(false);
setWordCount(countWords());
}
  },[timer,state])
  function handleClick(){
    setState(true);
    setWordCount(0);
    SetText("");
  }
  return (
      <div>
      <h1>Speed Typing Game</h1>
      <textarea name="text" onChange={handleChange} value={text}/>
      <h4>Time Remaining : {timer}</h4>
      <button onClick={handleClick}>Start Game</button>
      <h1>Word Count : {wordCount}</h1>
      </div>
  );
}
export default App;