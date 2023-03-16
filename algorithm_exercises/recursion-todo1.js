// Sigma recursivo
// Escribe una función recursiva que, dado un número, devuelva la suma de números enteros desde 1 hasta ese número. Ejemplo: rSigma(5) = 15 (1+2+3+4+5); 
// rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
const rSigma = number => {
    number = Math.trunc(number)
    if (number <= 0) return 0
    return number + rSigma(--number)
}
console.log('Test rSigma: ', rSigma(5))

// Factorial recursivo
// Dado num, devuelve el producto de ints desde 1 hasta num. 
// Si es menor que cero, trátalo como cero. Si no es un número entero, truncar. 
//¡Los expertos nos dicen 0! es 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
const rFact = number => {
    number = Math.trunc(number)
    if (number <= 0) return 1
    return number * rFact(--number)
}
console.log('Test rFact: ', rFact(6.5))


