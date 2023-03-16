// Fibonacci recursivo
// Escribe rFib(num). Calcule recursivamente y devuelva el valor número Fibonacci. Como antes, trate los primeros dos (num = 0, num = 1) valores de Fibonacci como 0 y 1. Ejemplos:

// rFib(2) = 1 (0+1);

// rFib(3) = 2 (1+1);

// rFib(4) = 3 (1+2);

// rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

const rFib = number => {
    if (number === 0) return 0
    if (number === 1) return 1
    return rFib(number-1) + rFib(number-2)
}
console.log('Test rFib: ', rFib(9))



// “Tribonacci” recursivo
// Escriba la función rTrib(num) para imitar a Fibonacci, agregando los tres valores anteriores en lugar de dos. Los tres primeros números de Tribonacci son 0, 0, 1, 
// por lo que rTrib(3) = 1 (0+0+1); rTribu(4) = 2 (0+1+1); rTribu(5) = 4 (1+1+2); rTribu(6) = 7 (1+2+4). Manejar negativos y números no enteros de forma adecuada y económica.
const rTrib = number => {
    if (number === 0) return 0
    if (number === 1) return 0
    if (number === 2) return 1
    return rTrib(number-1) + rTrib(number-2) + rTrib(number-3)
}
console.log('Test rTrib: ', rTrib(6))


// Llamando al Dr. Ackermann
// La función de Ackermann se encuentra entre los primeros ejemplos de una función recursiva computable pero no primitiva. 
// Crece rápidamente y, por lo tanto, puede desbordar el marco de la pila de JavaScript incluso con valores muy bajos. 
// Esta función acepta dos valores enteros no negativos, num1 y num2, y sigue estas reglas:

// ackermann(0,num2) == num2+1;
// ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);
// ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).
// No se desanime si un valor num1 tan bajo como 4 "descubre su pila". ¡Esa es la naturaleza de esta función!
const ackermann = (num1, num2) => {
    if (num1 === 0) return num2 + 1
    if (num2 === 0) return ackermann(num1 - 1, 1)
    return ackermann(num1 - 1, ackermann(num1, num2 - 1))
}
//console.log('Test ackermann: ', ackermann(1))


// Zibonacci
// Esta función toma prestadas ideas de la serie de Fibonacci, pero los resultados calculados parecen zigzaguear, de ahí el nombre. 
// Una serie llamada 'Zibonacci' estaría definida por las siguientes reglas:

// Zib(0) == 1;
// Zib(1) == 1;
// Zib(2) == 2;
// Zib(2n+1) == Zib(n)+Zib(n-1)+1, si n > 0 (es decir, valores impares 3 y superiores);
// Zib(2n) == Zib(n)+Zib(n+1)+1, si n > 1 (es decir, valores pares de 4 y superiores).
// Cree la función Zibonacci(num). ¿Qué es Zibonacci(10)? Zibonacci(100)?

// Segundo: para un número dado que podría ser un resultado de Zibonacci, encuentre el índice más grande que corresponda a ese resultado. mejorZibNum(3186) == 2467, mejorZibNum(3183) == nulo.
const Zib = number => {
    if (number <= 0) return 1
    if (number === 1) return 1
    if (number === 2) return 2

    number = Math.trunc(number/2)
    // checkear por el ultimo bit si es impar o par
    if (number & 1) return Zib(number) + Zib(number-1) + 1
    else return Zib(number) + Zib(number+1) + 1
}
console.log('Test Zib: ', Zib(900000))