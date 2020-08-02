const fs = require("fs");
const {colors} = require("colors");

let data = "";

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) =>{

        if(!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
    
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (e) => {
            if(e) reject(e);
            else resolve(`tabla-${base}.txt`.green);
        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log(`================================`.green);
    console.log(`=======   tabla del ${base}   ========`.green);
    console.log(`================================\n`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`.red);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}