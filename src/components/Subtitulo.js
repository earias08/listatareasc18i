import React from 'react';

const Subtitulo = (props) => {
    console.log(props.estado)

    return (
        <div>
            <h3>Tareas de la comision {props.comision} </h3>
        </div>
    );
};

export default Subtitulo;