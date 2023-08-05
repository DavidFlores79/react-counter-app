import React, { useState } from 'react'
import { FirstApp } from './components/FirstApp'
import PropTypes from 'prop-types';




export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(0);

    const increment = () => {
        console.log('increment');
        setCounter( counter + 1 )
    }

    const decrement = () => {
        console.log('decrement');
        setCounter( counter - 1 )
    }


    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            {/* <FirstApp name="David" edad={ 44 } /> */}
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}
