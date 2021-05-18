// 1)
// Crear una función que tome una palabra y determine si empieza con 'G' (Mayúscula)
const startsWithG = (word) => {
    return word.substr(0, 1) === 'G';
}

    console.log(startsWithG('Avocado'));
    console.log(startsWithG('Grand Avocado'));
​
// 2)
// Crear una función que toma un arreglo de nombres y devuelva otro sólo con lo que empiezan con G
// Usar la función startsWithG
const namesWithG = (names) => {
    return names.filter(startsWithG);
}
​
console.log(namesWithG(['Barbara', 'Cristian', 'Gino', 'Isadora', 'Joaquín', 'Manuel', 'Ramiro']));
​
​
​
// 3)
// Crear una función que tome un número y devuelva su valor absoluto
const abs = (num) => {
    // Do something
}
​
console.log(abs(1), abs(-6), abs(0));
​
​
​
// 4)
// Crear una función que tome un arreglo de números y devuelva su valor absoluto
const abs2 = (numbers) => {
    // Do something
}
​
console.log(abs([1, -6, 0]));
​
​
​
// Extra
// Crear una función que tome un arreglo de números y devuelva su suma
const sum = (numbers) => {
    // Do something
}
​
// Ahora hacer lo mismo pero sin usar ningúna otra función o sentencia
// Ni reduce, ni forEach, ni for
const sumNoFunctions = (numbers) => {
    // Do something
}