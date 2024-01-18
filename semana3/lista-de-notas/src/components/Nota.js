import React from "react";

function Nota({ onNota, onDelete, onEdit}) {

  return (
    <div>
      <p onClick={onNota}>nota</p>
      <div>
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
}

export default Nota;
