import logo from './logo.svg';
import './App.css';

function App() {
    let counter= 15

   var  addValue=()=>{
     console.log("Clicked",counter);
     counter=counter+1
   }

  return (
   <>
   <h1>React Project</h1>
   <h2>counter value: 5</h2>

   <button onClick={addValue()}>Add Value</button>
   <br></br>
   <button>Remove Value</button>
   </>
  );
}

export default App;
