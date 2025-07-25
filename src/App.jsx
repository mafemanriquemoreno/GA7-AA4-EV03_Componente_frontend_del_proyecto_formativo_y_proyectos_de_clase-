import Formulario from './components/Formulario.jsx'; // Importamos el nuevo formulario
import './App.css'; // Importamos el CSS para centrar

function App() {
  return (
    <div className="app-container">
      <h1>Formulario de Inventario</h1>
      <Formulario /> {/* Usamos nuestro componente de formulario */}
    </div>
  )
}

export default App