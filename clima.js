const place = require('./place/place');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: ' Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {

        const data = await place.getLugarLatLng(direccion);
        const longitud = data.lon;
        const latitud = data.lat;
        const info = await clima.getClima(latitud, longitud);
        return `El clima en ${direccion} es de ${info}º`;

    } catch (error) {

        return `No se pudo determinar el clima de ${direccion}`;

    }

    // if (data === 0) {
    //     throw new Error(`No hay resultados para ${direccion}`);

    //     return console.log(`No se puede determinar`);
    // }

    // console.log(`El clima en ${direccion} es de ${info}º`);

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);