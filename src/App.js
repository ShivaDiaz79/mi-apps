import "./App.css";
import Testimonio from "./COMPONENTES/Testimonio.js";
import { dummyStatements } from "./config/statements";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <h2>Version mas limpia</h2>
        <div style={{ marginTop: 100 }}>
          {dummyStatements.map((statement, index) => (
            <Testimonio key={index} {...statement} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
