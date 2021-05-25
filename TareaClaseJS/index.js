//1 Crear una funcionque tome una palabra y determine si empieza con 'G'
const startsWithG = (word) => {
    return word.startsWith("G");
}
console.log(startsWithG("Caballo"));
console.log(startsWithG("Oveja"));
console.log(startsWithG("Gallina"));
console.log(startsWithG("Cabrito"));

//2 Crear una funcion que toma un arreglo de nombre y devuelve otro 
//solo con lo que empieza con 'G'

const namesWithG = (names) => {
    return names.filter(startsWithG);
}
console.log(namesWithG(['Barbara', 'Cristian', 'Gino', 'Isadora', 'Joaquín', 'Manuel', 'Ramiro']));

//3 Crear una funcion que tome un numero y devuelta su valor absoluto

const abs = (num) => {
    return (Math.abs(num));
}
console.log(abs(0), abs(-2), abs(5));

//4 Crear una funcion que tome un arreglo de numeros y devuelva su valor absoluto

const absArray = (numbers) => {
    return (Math.abs([numbers]));
}
console.log(absArray([0, -2, 5]));

// Extra
// Crear una función que tome un arreglo de números y devuelva su suma

const sum = (numbers) => {
    return numbers.reduce((a,b) => a + b);
}
console.log(sum([5, 7, 2, 1]));

// Ahora hacer lo mismo pero sin usar ningúna otra función o sentencia
// Ni reduce, ni forEach, ni for
// const sumNoFunctions = (numbers) => {
//    if (numbers.length === 0) {
//        return 0;
//      } else {
//        return numbers[0] + sumNoFunctions(numbers.slice(1));
//      }
//}

//console.log(sumNoFunctions([3, 2, 1, 4]));

// 

//const absArrayNumbers = (numbers) => {
//  return numbers.map(abs);
//}

//console.log(absArrayNumbers([1, -6, 0]));