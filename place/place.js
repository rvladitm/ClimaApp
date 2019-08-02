const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'b5ea768fe1msh8cdce8ce1ca1d7fp1b7f0bjsn107e0816a2d7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(` No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {

        direccion,
        lat,
        lon
    }

    // Otra forma de encontrar los datos
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('Error', err);
    //     });

}

module.exports = {

    getLugarLatLng

}