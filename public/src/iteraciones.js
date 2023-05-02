console.log('itereaciones ciclos');

let carros = ['hyundai','Renault', 'mazda', 'nissan','sanyong', 'ferrari'];

for(let i = 0; i < carros.length - 1; i++ ){
    console.log(carros[i]);
    if(i == 1){
        console.log('este Renault');
    }
    
}


console.log('DO WHILE');
let i = 0;

do {
    console.log(carros[i]);
    i++;
}
while(i < 10);


console.log('FOR OFF');

for(let elemento of carros){
    console.log(elemento);
}

console.log('FOR IN');
for(let indice in carros){
    console.log(carros[indice]);
}

carros.forEach(function(valor, indice) {
    console.log(indice + 1 + ':' + valor);
})