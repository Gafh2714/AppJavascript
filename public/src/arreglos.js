console.log('Arreglos');

let carros = ['hyundai','Renault', 'mazda', 'nissan','sanyong', 'ferrari', null];


//Agrega un nuevo objeto al array al final
carros.push('Alfa romeo');

console.log(carros);
//tamaño del array
console.log(carros.length);
var indiceFinal = carros.length - 1;
console.log(carros[indiceFinal]);
console.log(carros[3]);

console.log(carros[carros.length]);
console.log(carros[1]);


carros.push(function() { return 'Hola mundo'; });
var indiceFinal = carros.length - 1;

console.log(carros);

console.log(carros[indiceFinal]());


/*
    Este es un comentario en bloque
*/

// este es un comentario de una linea



console.log(carros.join(','))



let marcas = 
    [
        'cocacola', 
        'postobon', 
        ['colombiana', 'PonyMalta', ['1','2']]
    ];

console.log(marcas);
console.log(marcas[2]);
console.log(marcas[2][1]);

const sArray = marcas[2];
console.log(sArray[1]);


console.log(marcas[2][2][1]);


const nombre ='Pedro';
console.log(nombre[2]);











