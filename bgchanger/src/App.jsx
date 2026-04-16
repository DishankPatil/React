import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState('olive');
  const [counts, setCounts] = useState({
    red: 0,
    green: 0,
    blue: 0,
    yellow: 0,
    purple: 0,
    deeppink: 0,
    brown: 0,
  });

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setCounts((prev) => ({
      ...prev,
      [newColor]: prev[newColor] + 1,
    }));
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 p-4 bg-white/90 rounded-3xl shadow-lg text-black">
        <h2 className="font-semibold">Color click counts</h2>
        <h2 className='outline-2 rounded-2xl px-3 py-1 text-black '>Color</h2>
        <div className="grid grid-cols-2 gap-2 text-sm md:text-base">
          <div>Red: {counts.red}</div>
          <div>Green: {counts.green}</div>
          <div>Blue: {counts.blue}</div>
          <div>Yellow: {counts.yellow}</div>
          <div>Purple: {counts.purple}</div>
          <div>Deep Pink: {counts.deeppink}</div>
          <div className="col-span-2">Brown: {counts.brown}</div>
        </div>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl p-3">
          <button
            onClick={() => handleColorChange('red')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-red-700"
            style={{ backgroundColor: 'red' }}>
            Red
          </button>
          <button
            onClick={() => handleColorChange('green')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-green-700"
            style={{ backgroundColor: 'green' }}>
            Green
          </button>
          <button
            onClick={() => handleColorChange('blue')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-blue-700"
            style={{ backgroundColor: 'blue' }}>
            Blue
          </button>
          <button
            onClick={() => handleColorChange('yellow')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-yellow-600"
            style={{ backgroundColor: 'yellow' }}>
            Yellow
          </button>
          <button
            onClick={() => handleColorChange('purple')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-purple-700"
            style={{ backgroundColor: 'purple' }}>
            Purple
          </button>
          <button
            onClick={() => handleColorChange('deeppink')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-pink-700"
            style={{ backgroundColor: 'deeppink' }}>
            Deeppink
          </button>
          <button
            onClick={() => handleColorChange('brown')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer hover:opacity-80 transition border-2 border-brown-700"
            style={{ backgroundColor: 'brown' }}>
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
