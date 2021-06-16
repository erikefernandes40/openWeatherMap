import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2beb05488f95140ad48910f0d8dfbe58';

export const buscarTempo = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            lang: 'pt_br',
            APPID: API_KEY,
        }
    });

    return data;
}