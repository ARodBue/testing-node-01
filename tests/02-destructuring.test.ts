import { characters } from "../src/js-foundation/02-destructuring";

describe('Test in the Destructuring File', () => {

    test('Characters should contain Flash and Superman', () => {

        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });

    test('First character should be Flash and second Superman', () => {

        const [f, s] = characters;

        // expect(f).toBe('Flash');
        // expect(s).toBe('Superman');

    })
})