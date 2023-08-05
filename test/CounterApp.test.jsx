/** * @jest-environment jsdom */
import { render } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => { 
    
    test('debe ser igual a la muestra', () => { 
        
        const name = 'Glendy Perez';
        const { container } = render(<CounterApp name={name}/>)
        // console.log(container);

        // expect(container).toMatchSnapshot()
     })

     test('debe mostrar titulo en h1', () => { 
        
        const name = 'CounterApp'
        const { container, getByText } = render(<CounterApp name={name}/>)
        expect(getByText(name)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(name);

      })

     test('debe mostrar subtitulo', () => { 
        
        const subtitle = 'Soy un subtitulo'
        const { container, getByText } = render(<CounterApp/>)
        expect(getByText(subtitle)).toBeTruthy();


        expect(getByText(subtitle).innerHTML).toContain(subtitle);

      })

     test('debe mostrar subtitulo dos veces', () => { 
        
        const subtitle = 'subtitulo2'
        const { container, getByText, getAllByText } = render(<CounterApp/>)
        expect(getAllByText(subtitle).length).toBe(2);

      })
 })