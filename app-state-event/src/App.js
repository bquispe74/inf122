import './App.css';
import Boton from './components/Boton.js';
import Contador from './components/Contador.js';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);

  }
  const reiniciar = () => {
    setNumClicks(0);

  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={false}
            funcionClick={"click"} />
          <Boton texto="+3" esBotonClick={false}
            funcionClick={"click"} />
          <Boton texto="-1" esBotonClick={false}
            funcionClick={"click"}/>
          <Boton texto="+1" esBotonClick={false}
            funcionClick={"click"}/>  
          
        </div>

      </div>
    </div>
  );
} 

export default App;