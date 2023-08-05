import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07 deses arra', () => { 
    test('should return letter and numbers', () => { 
        
        const [ letras, numeros ] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

     })
 })