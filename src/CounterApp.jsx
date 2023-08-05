import React, { useState } from 'react'
import { FirstApp } from './components/FirstApp'
import PropTypes from 'prop-types';




export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    const increment = () => {
        console.log('increment');
        setCounter( counter + 1 )
    }

    const decrement = () => {
        console.log('decrement');
        setCounter( counter - 1 )
    }

    const reset = () => {
        console.log('reset');
        setCounter( value )
    }


    return (
        <div>
            <h1>CounterApp</h1>
            <p>Soy un subtitulo</p>
            <p>subtitulo2</p>
            <p>subtitulo2</p>
            <h2>{counter}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button aria-label='btn-reset' onClick={reset}>Reset</button>
            {/* <FirstApp name="David" edad={ 44 } /> */}
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
