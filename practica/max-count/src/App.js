
import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';


function App() {
  const [numClick,setNumClick]=useState(0);
  const click=()=>{
    setNumClick(numClick+1);
  }

  return (
    <div className="App">
        <div className='contenedor'> <Contador nroClicks={numClick}/></div>

        <div className='contenedor-boton'><Boton funcionclick={click}></Boton></div>

        

        
          

    </div>
  );
}

export default App;