const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=523b06e013cf511869b5a2db09b21723`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};