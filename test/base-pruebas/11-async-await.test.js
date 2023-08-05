import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas para 11 async', () => { 
    
    test('Debe retornar la direccion de  la imagen', async () => { 
        
        const url = await getImagen();
        console.log('la url', url);

        expect(typeof(url)).toBe('string');

     })
 })