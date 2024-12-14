import './App.css'
import { useState } from 'react'
import Button from './button';

function App() {
  let [counter, setCounter] = useState(0);
  
  function increase() {
    setCounter(counter + 1);
  }
  
  function decrease() {
    if (counter >0) {
          setCounter(counter - 1);
    }
  }
  return (
    <>
      <Button btn={{ counter, increase, decrease }}></Button>
      <Button btn={{ counter, increase, decrease }}></Button>
      <Button btn={{ counter, increase, decrease }}></Button>
    </>
  );
}

export default App
