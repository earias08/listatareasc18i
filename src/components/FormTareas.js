import React, {useState} from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
    //aqui va la logica
    const [arregloTareas, setArregloTareas] = useState([]);
    const [tarea, setTarea] = useState('');

    //crear funciones
    const handleSubmit = (e) =>{
      e.preventDefault();
      //guardar una tarea en el arregloTareas
      setArregloTareas([...arregloTareas,tarea]);
      //limpiar el input
      //e.target.reset();
      setTarea('');
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={e=> setTarea(e.target.value)} value={tarea}/>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas stateTareas={arregloTareas}></ListaTareas>
    </div>
  );
};

export default FormTareas;
