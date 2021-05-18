const peliculas = [
    {
        'nombre' : 'Harry Potter y el Prisionero de Askaban',
        'año' : '2004',
        'genero' : 'Fantasía',
    },

    {
        'nombre' : 'Pasante de Moda',
        'año' : '2015',
        'genero' : 'Comedia',

    },

    {
        'nombre' : 'Were the Millers',
        'año' : '2013',
        'genero' : 'Comedia',
    },

    {
        'nombre' : 'Star Wars: El Despertar de la Fuerza',
        'año' : '2015',
        'genero' : 'Ciencia Ficción',
    },

    {
        'nombre' : 'El Viaje de Chihiro',
        'año' : '2001',
        'genero' : 'Fantasía',
    },

    {
        'nombre' : 'Cómo entrenar a tu dragón',
        'año' : '2010',
        'genero' : 'Fantasía',
    },

    {
        'nombre' : 'Lo Imposible',
        'año' : '2012',
        'genero' : 'Drama',
    }
]

const genero = 
    ["Fantasía", "Comedia", "Ciencia Ficción", "Drama"];
console.log(genero);

let filtro = genero.map(function(genero)
{return (peliculas.filter(function(peliculas)
    {return (peliculas.genero === genero); 
    }))
    
});

console.log(filtro);



