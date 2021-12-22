import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormTareas from './components/FormTareas';

function App() {
  //zona donde agregamos logica
  let prueba = 123
  return (
   <section className='container'>
     {/* esto es un comentario html */}
     <Titulo></Titulo>
     {/* <Titulo/> */}
     <Subtitulo comision='c18i' estado={true} prueba={prueba}/>
     <hr/>
     <FormTareas></FormTareas>
   </section>
  );
}

export default App;
