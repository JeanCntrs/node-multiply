const argv = require('./config/yargs').argv;

const colors = require('colors/safe'); // Es más seguro, evita posibles errores con propiedades que puedan tener nombre de colores

const { createFile, listTable } = require('./multiply/multiply'); // Destructuración

let command = argv._[0];

switch (command.toLowerCase()) {
    case 'listar':
        listTable(argv.base, argv.limit);
        break;

    case 'crear':
        createFile(argv.base, argv.limit)
            .then(file => console.log('Archivo creado: ', colors.green(file)))
            .catch(error => console.log(error))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


/* console.log(module); */ // Objeto global que esta disponible a lo largo de toda la aplicación