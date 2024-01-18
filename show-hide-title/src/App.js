
import './App.css';
import Boton from './componets/Boton.js';
import {useState} from 'react';
import Titulo  from './componets/Titulo.js';

function App() {
  const [show, setShow] = useState(true);
  const mostrar = () => {
    setShow(!show);
  }
  return (
    <div className="App">
      <div className='container'>
      <Boton  funcionClick={mostrar} />
      <Titulo mostrar={show} />
      </div>
      
      
    </div>
  );
}

export default App;