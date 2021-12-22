import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';

function App() {
  //zona donde agregamos logica
  
  return (
   <section>
     {/* esto es un comentario html */}
     <Titulo></Titulo>
     {/* <Titulo/> */}
     <Subtitulo></Subtitulo>
     <hr/>
   </section>
  );
}

export default App;
