const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");
const {argv} = require("./config/yargs");
const {colors} = require("colors");

let comando = argv._[0]

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log("Se ha creado exitosamente el archivo: "+archivo.green))
        .catch(e => console.log(e)); 
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    default:
        break;
}