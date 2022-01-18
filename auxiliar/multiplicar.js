const fs = require('fs');
function multiplicapordos(n) {
    return n*2;
}
function crearArchivo(base=3){
    console.clear();
    console.log('====================');
    console.log('    tabla del '+ base);
    console.log('====================');
    let salida='';
    for(let i=1; i<=10; i++){
        salida += `${ base } por ${i } = ${base*i}\n`;
    }
    console.log(salida);
    fs.writeFile( `tabla-${base}.txt`,salida,  ( error ) => {
     if ( error) throw error;
     })

}

module.exports = { crearArchivo, multiplicapordos };

