import { useState ,useCallback,useEffect,useRef} from 'react'
import './index.css'

function App() {
  const [length,setLength]=useState(8);
  const [numallowed,setnumberallowed]=useState(false);
  const [charallowed,setcharallowed]=useState(false);
  const[password,setpassword]=useState("");
  
//useRef Hook
const passwordref=useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let bg="~`!@#$%^&*()_-+=|\}]{[:;'?/>.<"

    if(numallowed) str +="0123456789"
    if(charallowed) str+="!@#$%&*_{}()?"

   for(let i=1;i<=length;i++){
    let char  =Math.floor( Math.random()*str.length+1)
    pass +=str.charAt(char);
   }

   setpassword(pass)

  },[length,numallowed,charallowed,setpassword])

  const copypassonclip=useCallback(()=>{
     passwordref.current?.select();
     passwordref.current?.setSelectionRange(0,99);
      window.navigator.clipboard.writeText(password);
  },[passwordgenerator])

  useEffect(()=>{passwordgenerator()},[length,numallowed,charallowed,passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-8 bg-gray-700 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-8">
          <input type="text" value={password}  className="outline-none w-full py-1 px-3 bg-white" placeholder="Password" readOnly 
          ref={passwordref}/>   
          <button onClick={copypassonclip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numallowed} id="numberInput" onChange={()=>{
            setnumberallowed((prev)=>!prev );
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charallowed}
          id="charaterInput"
          onChange={()=>{
            setcharallowed((prev)=>!prev);
          }} />
          <label htmlFor="characterInput">Characters</label>
        </div>
       </div>
      </div>
    </>
  )
}

export default App