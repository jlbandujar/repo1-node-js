const { dividir }  = require("./mod_promesas");
const colors = require('colors');
const { argv }  = require('yargs');

const persona = {
    nombre: 'Juan',
    apellido: 'López',
    departamento: 'Informática',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} depto: ${this.departamento} `
    }
}

let { nombre, apellido, departamento} = persona;
console.log( nombre, apellido,'depto:', departamento)

//console.log(persona.getNombre());

const plantilla = [ 'Juan','María','Rosa'];
let [n1,n2,n3] = plantilla;
console.log( n1,n2,n3);

const suma = (n1,n2) =>n1+n2;

console.log( 'suma: ', suma(3,4));

//setTimeout( ()=>{ console.log('Hola Mundo')},1500)

const getUsuarioById = (id) =>{
    const plantilla = [ { id: 1,
        nombre: 'Juan'
    }, { 
        id: 2,
        nombre: 'María'
    }]

    const miPromesa = new Promise( 
        (resolve, reject) =>{
            let usuario = plantilla.find( persona => persona.id == id)?.nombre;
            if ( usuario ) {
                resolve(usuario)
            } else {
                reject(`Error usuario con id ${id} NO EXISTE`)
            }
        }
    )
    return miPromesa;

}

getUsuarioById(1)
.then( ( usuario)=>console.log('Usuario encontrado: '.blue + usuario.rainbow))
.catch( (msg)=>console.log(msg))

console.log('DIVISION'.bgBlue);
console.log( argv);
n1 = argv.n1;
n2 = argv.n2;
dividir(n1,n2)
.then( function ( resultado ) {console.log(`resultado ${resultado}`.rainbow)})
.catch( (msg)=>console.log(msg));