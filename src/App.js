import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';

function App() {
  //zona donde agregamos logica
  let prueba = 123
  return (
   <section>
     {/* esto es un comentario html */}
     <Titulo></Titulo>
     {/* <Titulo/> */}
     <Subtitulo comision='c18i' estado={true} prueba={prueba}/>
     <hr/>
   </section>
  );
}

export default App;
