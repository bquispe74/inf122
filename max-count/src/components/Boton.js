import React from "react";
import {useState,useEffect} from 'react';
import '../styles/Boton.css'


function Boton({funcionclick}) {
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const [tiempoRestante, setTiempoRestante] = useState(10);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTiempoRestante(prevTiempoRestante => {
          const nuevoTiempoRestante = prevTiempoRestante - 1;
  
          if (nuevoTiempoRestante <= 0) {
            setMostrarBoton(false);
            clearInterval(intervalId);
            return 0; // Detener el contador
          }
  
          return nuevoTiempoRestante;
        });
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div>
        <p>Time left {tiempoRestante} seconds</p>
        {mostrarBoton ? (
          <div>
            <button className="boton" onClick={funcionclick}>
              +
            </button>
          </div>
        ) : null}
        
      </div>
    );
  }
  
  export default Boton;