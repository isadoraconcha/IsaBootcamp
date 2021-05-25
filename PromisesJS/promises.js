//1. Crear una Promesa que resuelva ( resolve() ) con el nombre de ustedes.

const primeraPromesa = new Promise(function(resolve, reject) {
    resolve('Isadora')
    reject('Error')
 });
 console.log(primeraPromesa)

//2. Crear una Promesa que resuelva con el nombre de ustedes luego de 5 segundos (usar setTimeout)

const segundaPromesa = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('pos me llamo Isadora'), 5000);
});
segundaPromesa.then((resolve) => console.log(resolve));

//3. Crear una funcion esNumeroPar que reciba un numero, verifique si es par o no, y retorne una promesa, la promesa debe resolver con true o false segun la verificacion.

const esNumeroPar = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero % 2  == 0) {
            return resolve('par');
    }
        else {
            return reject('impar');
    }
    })
}
console.log(esNumeroPar(8))
console.log(esNumeroPar(4));

//4. A la funcion anterior, modificarla para que la promesa se rechace ( reject() ) con el error: 'Valor Invalido' si el valor enviado por parametro no es un numero.

const esUnNumero = (numero) => {
    return new Promise((resolve, reject) => {
        if (typeof(numero) === 'number') {
            resolve('si si, esto es un numero');
        }
        else {
            reject('oye, pero esto no es un numero');
        }
    })
}
console.log(esUnNumero(13));

//5. Crear un arreglo de 10 objetos productos, con la forma { nombre, precio, estaVendido }, crear una funcion filtrarPorPrecio que reciba un precio (numero) y retorne una promesa, la promesa debe filtrar el arreglo de productos y crear uno nuevo con los productos cuyos precios sean iguales o menores que el numero recibido, la promesa debe resolver, luego de 5 segundos, con el arreglo de productos filtrados. En este ejercicio usar async/await al momento de consumir la funcion.

//const products = [
//    {
//        nombre: 'Nikon d750 kit 24-120mm'
//        precio: 1.600.000
//        estaVendido: false
//    },

//    {
//        nombre: 'Kit de Estudio Visico 2x VL 300W'
//        precio: 299.990
//        estaVendido: false
//    },

//    {
//        nombre: 'Flash Nikon SB700'
//        precio: 294.990
//        estaVendido: false
//    },

//   {
//        nombre: 'Lente Nikkor 50mm FX'
//        precio: 239.900
//        estaVendido: false
//    },

//    {
//        nombre: 'Lente Nikkor 55-300mm DX'
//        precio: 249.496
//        estaVendido: false
//    },

//    {
//        nombre: 'Lente Tokina 11-16mm DX'
//        precio: 489.990
//        estaVendido: false
//    },

//    {
//        nombre: 'Reflector Plegable'
//        precio: 22.990
//        estaVendido: false
//    },

//    {
//        nombre: 'Soporte de Fondo Manfrotto 1314b'
//        precio: 167.192
//        estaVendido: false
//    },

//    {
//        nombre: 'Trípode Manfrotto 290 Light'
//        precio: 99.990
//        estaVendido: false
//    },

//    {
//        nombre: 'Filtro Eclipse'
//        precio: 105.990
//        estaVendido: false
//    }
//];

//const filtrarPorPrecio = async(numero) => {
//    const filtroPromesa = new Promise((resolve, reject) => {
//        setTimeout(() => {
//            const arregloFiltrado = productos.filter(({precio}) => {
//                return precio <= numero; 
//            });        
//            resolve(arregloFiltrado); 
//}, 5000)
//});

//let result = await filtroPromesa;
//return result; 
//}

//filtrarPorPrecio(99.990).then(result => console.log(result));

