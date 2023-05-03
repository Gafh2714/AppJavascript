console.log('Promesas');

function saludar(nombre = 'Por defecto', callback) {    
    console.log('Dentro de la función');
    callback(`Hola ${nombre}`);
}

function callback( saludo ){
    console.log('Función callback ' + saludo);
}

/*console.log('Inicio Programa');
saludar('Giovanny', callback);
console.log('Finalizo el proceso');*/


function saludar2(nombre = 'Por defecto', callback) {    
    console.log('Dentro de la función');
    setTimeout(()=>{
        callback(`Hola ${nombre}`);
    }, 2000);
}

/*console.log('Inicio Programa');
saludar2('Giovanny', callback);
console.log('Finalizo el proceso');*/


export function saludar3(nombre = 'Por defecto') {

    return new Promise((resolve, reject) => {
        try {

            const mensaje = {
                saludo : `saludo ${nombre}`,
                valid: true
            }
            resolve(mensaje);
            
        } catch (error) {
            reject(error);
        }
    });



    /*
        Forma larga para retornar una promesa
    const promesa = new Promise(resolve => {
        resolve(`Saludo a ${nombre}`);
        
    }, reject => {
        reject('Error');
    });    

    return promesa;
    */
}




console.log('Inicio Programa');

saludar3('Giovanny').then(resolve => {
    console.log(resolve);
}).catch(error => {
    console.error(error);
}).finally(()=>{
    console.log('Se ejecuta de todas formas');
});

console.log('Finalizo el proceso');








