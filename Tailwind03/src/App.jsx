import './App.css'
import Card from './components/card.jsx'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4  rounded-xl'>Tailwind Test</h1>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
   <Card username='Tailwind CSS'/>
   <Card username='React seriies'/>
    </>
  )
}

export default App;