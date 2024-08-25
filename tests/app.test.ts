// A A A => Arrange, Act, Assert
describe('Test in the App File', () => {

    test('should be true', () => {
        expect(true).toBe(true);

        // 1. Arrange --> Preparamos las variables que utilizaremos
        const num1 = 10;
        const num2 = 20;
        
        // 2. Act --> Se realizan las pruebas de la funcionalidad
        const result = num1 + num2;

        // 3. Assert --> Comprobamos si obtenemos el resultado que deseamos
        expect(result).toBe(30);

    })
})