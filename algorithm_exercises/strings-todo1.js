// Quitar espacios en blanco
// Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
// Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".
const removeWhitespaces = text => {
    // replace whitespace with regex
    return text.replace(/\s/g, '')
}

console.log('Test removeWhitespaces: ', removeWhitespaces('Pl ayTha tF u nkyM usi c'))


// Obtener dígitos
// Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los dígitos de la cadena. Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 1357924680.
const removeNoNumbers = text => {
    // replace no numbers with regex
    return text.replace(/\D/g, '')
}

console.log('Test removeNoNumbers: ', removeNoNumbers('0s1a3y5w7h9a2t4? 6! 8? 0'))


// Acrónimos
// Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras, en mayúscula). Dado "no hay almuerzo gratis. Debes pagar por tu comida", devuelve "NHAG-DPPTC".
// Dado "¡En vivo desde Nueva York, es sábado por la noche!", devuelve "ENDNYESPLN".
const acronym = text => {
    // create an array of words, create a new array with first letter and join
    return text.replace(/[¡,¿]/g, '').split(' ').map(word => word[0].toUpperCase()).join('')
}

console.log('Test acronym: ', acronym('¡En vivo desde Nueva York, es sábado por la noche!'))


// Contar no espacios
// Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.
// Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 29 (no 35).
const countCharacters = text => {
    // replace no numbers with regex
    return removeWhitespaces(text).length
}

console.log('Test countCharacters: ', countCharacters('Amor, me estás volviendo loca'))

// Quitar cadenas más cortas
// Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.
const removeByLength = (array, minLength) => {
    return array.filter(word => word.length >= minLength)
}

console.log('Test removeByLength: ', removeByLength(['Hi', 'Hi my name', 'Hi dojo'], 5))