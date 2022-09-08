import './App.css';
import Header from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';



function App() {
  
  return (
    <div>
      <Header/>
      <ItemListContainer titulo = "¡QUEREMOS QUE TE SUMES!" mensaje = "Estamos en Córdoba, Argentina. Venta de insumos y herramientas para mosaico. Envíos a todo el país. Cualquier consulta contactanos"/>

    </div>

  );
}

export default App;
