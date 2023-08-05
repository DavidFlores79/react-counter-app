import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('pruebas en 08-imp-exp', () => {

    test('debe retornar heroe by id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        console.log('heroe', heroe);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('debe ser 3 para DC y 2 para Marvel', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        const heroesMarvel = getHeroesByOwner('Marvel');


        expect(heroesDC.length).toEqual(3);
        expect(heroesDC).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },]);

        expect(heroesMarvel.length).toEqual(2);
        expect(heroesMarvel).toEqual([{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        },]);

    })
})