import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function Password() {
   const [password, setPassword] = useState();
    const [length, setLength] = useState(8);
    const [numberAllowed, setnumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
  
    const passwordGenerator = useCallback(() => {
      
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
      if (numberAllowed) {
        str += "0123456789";
      }
      if (characterAllowed) {
        str += "<>?{})(*&^%$#@/"
      }
  
      for (let i = 1; i <= length; i++){
        let char =Math.floor( Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      
      setPassword(pass);
    }, [length, numberAllowed, characterAllowed, setPassword])
    
    const copyClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,26)
      window.navigator.clipboard.writeText(password);
    },[password])
  
    useEffect(() => {
       passwordGenerator()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [length, numberAllowed, characterAllowed])
    
  
    //use ef
    const passwordRef = useRef(null);
   

  return <>
    <div className=" w-full max-w-lg mx-auto shadow-xl h-40 rounded-lg px-4 my-8 text-orange-500 bg-gray-700 
    hover:rotate-3 translate-y-90 cursor-pointer
    origin-bottom-left">
      <h1
        className="text-fuchsia-300 mb-4 mt-6 text-xl 
        font-bold
        "
      >
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-5">
        <input
          type="text"
          className="outline-none w-full py-1 px-3 "
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 w-16 roundedr-md text-white hover:bg-green-700"
          onClick={copyClipboard}
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white">Length :({length})</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />
          <label className="text-white">numberAllowed</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="numberInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label className="text-white">CharacterAllowed</label>
        </div>
      </div>
    </div>
  </>;
}

export default Password;