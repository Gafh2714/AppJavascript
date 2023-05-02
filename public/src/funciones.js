console.log('Funciones');
let perro = "Samoyedo";

(
    () => {
        function saludar(nombre = 'Por defecto', apellido) {
            apellido = apellido || 'por defecto';
        
            if(apellido === undefined){
                apellido = 'asd'
            }
        
            return `Hola ${nombre} ${apellido}`;
        }
        
        console.log(saludar('giovanny'));
        console.log(saludar());
        
        let carros = ['hyundai','Renault', 'mazda', 'nissan','sanyong', 'ferrari', 'Alfa romeo'];
        
        
        function getValueforIndexArray(array = []){
            if(array.length == 0) {
                console.error('El array esta vacio');
                return;
            }    
            return array[array.length -1 ];
        }
        
        console.log(getValueforIndexArray());
        console.log(getValueforIndexArray(carros));
        
        
        const myFunction = () => {
            return 'Función de flecha';
        }
        
        console.log(myFunction());
        
        
        console.log(carros.find( (valor) => { if(valor == 'Renault'){ return true; }  } ));
        
        console.log(carros.find( valor =>  valor === 'Renault'));
    }
)();


/*Objetos */

const carro = {
    color: 'rojo',
    tipo: 'Sedan',
    marca: 'Ferrari',
    modelo: '1989',
    rendimiendo: {
        'cv': '200hp',
        'consumo': '30 Galon'
    }
};

console.log(carro['tipo']);
console.log(carro.rendimiendo.cv);
console.log(carro.marca);


let otros = [carro];

let ferrari = carro;

ferrari.color = 'azul';

console.log(carro);




