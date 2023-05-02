console.log('Estructuras');


/* 
Operadores
    =  asginación
    == comparar 
    === comparar adicional del valor me copara el tipo
    != Diferente 
    ++ Incrementar
    < Menor que
    > mayor que
    <= Menor o igual
    >= Igual
    && Y logico
    || Or O logico
    + operar Suma o concatenar
    

*/

let numero = 1;
numero++;
console.log(numero);

if( 1 == '1'  && true == true){
    console.log('Estructura 1');
}
else{
    console.log('Estructura 2');
}

const nombre     = 'Fernando';

switch(nombre){
    case 'Fernando':
        console.log('case1');
        break;
    case 'Pedro':
        console.log('case2');
        break;
    default:
        console.log('defecto');
        break;
}

const prueba = (1 == 1) ? 
            2 == 3 ? 'asdasd': '1'
         : 'no es igual';
console.log(prueba);
