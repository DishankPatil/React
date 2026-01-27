import { useState } from 'react';
import './index.css';

function App() {
  const [color,setcolor]=useState("olive");
  
  const handleColorChange = (newColor) => {
    console.log(`Color displaying: ${newColor}`);
    setcolor(newColor);
  };
  
  return (
  
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl'>
            <button onClick={()=>handleColorChange("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-red-700' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=>handleColorChange("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-green-700' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=>handleColorChange("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-blue-700' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=>handleColorChange("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-yellow-600' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=>handleColorChange("purple")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-purple-700' style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={()=>handleColorChange("deeppink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-pink-700' style={{backgroundColor: "deeppink"}}>Deeppink</button>
          </div>
        </div>
      </div>
  
  )
}

export default App
