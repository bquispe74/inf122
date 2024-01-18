import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  
  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };
  
  return (
    <div className="App">
       
      <div className="contenedor-principal">
      <h1 > Timer </h1> 
        <Contador nroClicks={timer}  />
        <div className='contendedor-botones'>
          
            <Boton className="Start" texto="INICIAR" esBotonClick={true}
              funcionClick={startTimer} />
            <Boton className="Stop" texto="DETENER" esBotonClick={true}
              funcionClick={stopTimer} />
            <Boton className="Reset" texto="REINICIAR" esBotonClick={true}
              funcionClick={resetTimer} />
            
         

        </div>
      </div>
    </div>
  );
  };
  
  
export default App;