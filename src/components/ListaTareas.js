import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup>
      {
       props.stateTareas.map((valor,indice)=> <ItemTarea key={indice} tarea={valor}></ItemTarea>) 
      }
     
    </ListGroup>
  );
};

export default ListaTareas;
