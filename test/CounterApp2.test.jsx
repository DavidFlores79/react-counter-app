import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas refactorizadas en CounterAPP', () => {

    const initialValue = 15;

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar valor unicial de 100', () => {

        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy()
    })

    test('debe mostrar un h2', () => {

        render(<CounterApp value={100} />)
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('100')
    })

    test('debe incrementar valor con boton +1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('16')).toBeTruthy();
    })

    test('debe decrementar valor con boton -1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('14')).toBeTruthy();
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('13')).toBeTruthy();
    })

    test('debe funcionar el boton reset', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText(initialValue)).toBeTruthy();
    })
    
    test('debe funcionar el boton reset aria-label', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(
            screen.getByRole('button', { name: 'btn-reset'})
        )
        expect(screen.getByText(initialValue)).toBeTruthy();
    })




})