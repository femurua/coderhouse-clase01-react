import './App.css';

function App() {
  let imagen = "producto21.jpg";
  let titulo = "Tutores";
  let descripcion = "Altura: 50cm Color: Negro Material: Chapa. Podes elegir la forma que quieras";
  const productos = {id:1, imagen:imagen, titulo:titulo, descripcion:descripcion}
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 offset-md-2'>
            <img src={productos.imagen} alt={productos.titulo}  className='img-fluid'/>
        </div>
        <div className='col-md-4'>
          <h1>{productos.titulo}</h1>
          <p>{productos.descripcion}</p>
        </div>
      </div>
    </div>

  );
}

export default App;
