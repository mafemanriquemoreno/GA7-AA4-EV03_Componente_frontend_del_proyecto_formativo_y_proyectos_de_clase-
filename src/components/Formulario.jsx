import React, { useState } from 'react';
import CampoInput from './CampoInput.jsx';
import styles from './Formulario.module.css';

function Formulario() {
  // Utilizamos el hook 'useState' para crear un "estado" o "memoria" para cada campo.
  // Cada estado se inicializa como una cadena de texto vacía ('').
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [lote, setLote] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [existencias, setExistencias] = useState('');

  // Esta función se activa cuando el usuario envía el formulario.
  const handleSubmit = (event) => {
    // event.preventDefault() evita que el navegador se recargue, que es su comportamiento por defecto.
    event.preventDefault();
    
    const datosDelFormulario = { nombre, marca, lote, fechaVencimiento, existencias };

    // Verificamos en la consola que los datos se están capturando correctamente.
    console.log('Datos a enviar:', datosDelFormulario);
  };

  return (
    // La propiedad onSubmit del formulario se enlaza a nuestra función handleSubmit.
    <form onSubmit={handleSubmit}>
      {/* Reutilizamos nuestro componente CampoInput para cada campo del formulario.
        - 'value' conecta el campo con su estado correspondiente.
        - 'onChange' actualiza el estado cada vez que el usuario escribe.
      */}
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
      <CampoInput
        label="Lote:"
        type="text"
        placeholder="Ej: LOTE-2025-A1"
        value={lote}
        onChange={(e) => setLote(e.target.value)}
      />
      <CampoInput
        label="Fecha de Vencimiento:"
        type="date"
        value={fechaVencimiento}
        onChange={(e) => setFechaVencimiento(e.target.value)}
      />
      <CampoInput
        label="Existencias:"
        type="number"
        placeholder="0"
        value={existencias}
        onChange={(e) => setExistencias(e.target.value)}
      />

      <button type="submit" className={styles.boton}>
        Guardar Elemento
      </button>
    </form>
  );
}

export default Formulario;