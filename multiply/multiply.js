const fs = require('fs');

const colors = require('colors');

let createFile = (base, limit = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${ base }', no es un número`);
            return
        }

        let data = '';

        for (let index = 1; index <= limit; index++) {
            data += `${ base } * ${ index } = ${ base * index }\n`;
        }

        fs.writeFile(`tables/table-${ base }-al-${ limit }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${ base }-al-${ limit }.txt`)
        });

    })
}

let listTable = (base, limit = 10) => {

    console.log('==============='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('==============='.green);

    for (let index = 1; index <= limit; index++) {
        console.log(`${ base } * ${ index } = ${ base * index }`);
    }
}

module.exports = {
    // createFile: createFile
    createFile, // ES6
    listTable
}