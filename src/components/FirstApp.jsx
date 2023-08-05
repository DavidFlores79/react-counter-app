import React from 'react';
import PropTypes from 'prop-types';

//ponerlo afuera de la funcion evita renderizarlo nuevamente
const name = 'David Flores' 

const myObject = {
    name: 'David',
    surname: 'Flores'
}

const myFuntion = (a, b) => {
    return a * b
}

export const FirstApp = ( props ) => {
  return (
    //Fragment
    <> 
    <h1>{ myFuntion(5,8) }</h1>
    <code>{ JSON.stringify(myObject) }</code>
    <h3>FirstApp</h3>
    <p>Soy un parrafo de { name }</p>
    <h1>Yo soy una prop: { props.name }</h1>
    </>
  )
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'No hay nombre',
}
