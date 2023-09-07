import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz"
     if(numbers){
      str += "123456789"
     }
     if(characters){
      str += "~!@#$%^&*(){}'|`?"
     }
     for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
     setPassword(pass);


  }, [length, numbers, characters,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, numbers, characters,setPassword])

  return (
   <>
   
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
           
        />
        <button
        onClick = {copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={70}
        value={length}
         className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
          />
        <label>label : {length}</label>
      </div>


      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbers}
          id="numberInput"
          onChange={() => {
              setNumbers((prev) => !prev);
          }}
      />
      <label>Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={characters}
          id="numberInput"
          onChange={() => {
              setCharacters((prev) => !prev);
          }}
      />
      <label>Characters</label>
      </div>
     
</div>
   </div>
   </>
  )
}

export default App
