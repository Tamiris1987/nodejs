const { calculator } = require ('../functions/calculator');
test ('funcao soma deve somar 1 e 2 e retornar 3',()=> {
    expect(calculator.sum(1, 2)).toBe(3);
})


test ('funcao subtracao deve subtrair 3 e 2 retornar 1',()=> {
    expect(calculator.subtract(3, 2)).toBe(1);
})

test ('funcao multiplicacao deve multiplicar 3 e 2 retornar 6',()=> {
    expect(calculator.multiply(3, 2)).toBe(6);
})

test ('funcao divisao deve dividir 6 e 2 retornar 3',()=> {
    expect(calculator.divide(6, 2)).toBe(3);
})