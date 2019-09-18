const options = {
    base: {
        demand: true, // Obligatorio
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs') // Paquete que se encuentra en la carpeta node_modules
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}