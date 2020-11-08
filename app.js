const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./porHacer/porHacer');


let comando = argv._[0];

let crear = () => {
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
}

let listar = () => {
    let listado = porHacer.getListado();
    for (let tarea of listado){
        console.log('======Por Hacer======'.green);
        console.log(tarea.descripcion);
        console.log('Estado: ', tarea.completado);
        console.log('======================'.green);
    }
}

let actualizar = () => {
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
}

let borrar = () => {
    let borrado = porHacer.borrar(argv.descripcion);
}

switch (comando) {
    case 'crear':
        crear();
    break;
    case 'listar':
        listar();
    break;
    case 'actualizar':
        actualizar();
    break;
    case 'borrar':
        borrar();
    break;
    default:
    console.log('Comando no es reconocido');
}