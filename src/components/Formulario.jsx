import React, { useState } from 'react';
import CampoInput from './CampoInput.jsx';

function Formulario() {
  // Creamos un "estado" (una memoria) para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');

  return (
    <form>
      <CampoInput
        label="Nombre del Producto:"
        type="text"
        placeholder="Ej: Reactivo de Glucosa"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <CampoInput
        label="Marca:"
        type="text"
        placeholder="Ej: Roche"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />
    </form>
  );
}

export default Formulario;