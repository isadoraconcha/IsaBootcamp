const products = [
    {
       nombre: 'Nikon d750 kit 24-120mm'
       precio: 1.600.000
       estaVendido: false
    },

    {
        nombre: 'Kit de Estudio Visico 2x VL 300W'
        precio: 299.990
        estaVendido: false
    },

    {
        nombre: 'Flash Nikon SB700'
        precio: 294.990
        estaVendido: false
    },

    {
        nombre: 'Lente Nikkor 50mm FX'
        precio: 239.900
        estaVendido: false
    },

    {
        nombre: 'Lente Nikkor 55-300mm DX'
        precio: 249.496
        estaVendido: false
    },

    {
        nombre: 'Lente Tokina 11-16mm DX'
        precio: 489.990
        estaVendido: false
    },

    {
        nombre: 'Reflector Plegable'
        precio: 22.990
        estaVendido: false
    },

    {
        nombre: 'Soporte de Fondo Manfrotto 1314b'
        precio: 167.192
        estaVendido: false
    },

    {
        nombre: 'Trípode Manfrotto 290 Light'
        precio: 99.990
        estaVendido: false
    },

    {
        nombre: 'Filtro Eclipse'
        precio: 105.990
        estaVendido: false
    }
];

const filtrarPorPrecio = async(numero) => {
    const filtroPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const arregloFiltrado = productos.filter(({precio}) => {
                return precio <= numero; 
            });        
            resolve(arregloFiltrado); 
}, 5000)
});

let result = await filtroPromesa;
return result; 
}

filtrarPorPrecio(99.990).then(result => console.log(result));