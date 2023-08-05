import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        /**
         * Cuando es un objeto en lugar de toBe se usa toEqual
         */
        expect(testUser).toEqual( user );

    }
    )
    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'David'

        const user = getUsuarioActivo( nombre );

        /**
         * Cuando es un objeto en lugar de toBe se usa toEqual
         */
        expect(user).toEqual( {
            uid: 'ABC567',
            username: nombre
        } );

    })
})