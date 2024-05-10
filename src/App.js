import './App.css';
import logoPc from './imagenes/pabloContrerasLogo.png';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
     <div className='pc-logo-contenedor'>
        <img
          src={logoPc}
          className='pc-logo'
          alt='logo de pc' />
     </div>
     <div className='contenedor-calculadora'>
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>2</Boton>
        <Boton>3</Boton>
        <Boton>4</Boton>
        <Boton>+</Boton>
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
     </div> 

    </div>
  );
}

export default App;
