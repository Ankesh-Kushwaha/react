import { useState } from 'react'
import './App.css'
import Buttons from './buttons';

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg font-semibold px-2 py-2">
            <Buttons setColor={setColor}></Buttons>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
