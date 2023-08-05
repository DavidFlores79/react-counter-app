import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09 promesas', () => { 
    
    test('debe retornar un heroe', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync(id)
        .then( heroe => {
            expect(heroe).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });
     })

    test('debe retornar un error si el heroe no existe', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync(id)
        .then( heroe => {
            
        }).catch(error => {
            console.log('entro al catch', error);
            expect(error).toBe('No se pudo encontrar el héroe');

            done();
        });
     })
 })