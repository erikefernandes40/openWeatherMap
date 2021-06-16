import axios from 'axios';


const URL = ''
const API_KEY = '2beb05488f95140ad48910f0d8dfbe58';

export const top5 = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            name: undefined,
            country: undefined,
            units: 'metric',
            lang: 'pt_br',
            APPID: API_KEY,
        },

        if(){}
    });

    return (
        <div>
            <div>
              <h2>Top cidades mais buscadas</h2>
                <div>
                  <div>
                    <h2>Sao Paulo Br</h2>
                    http://api.openweathermap.org/data/2.5/weather?q=Sao%20Paulo&appid=2beb05488f95140ad48910f0d8dfbe58
                    <span>{weather.name}{' '}</span> 
                  <span>{weather.sys.country}</span>
                  </div>
                  <h2>Rio de janeiro</h2>
                  http://api.openweathermap.org/data/2.5/weather?q=Rio%20de%20janeiro&appid=2beb05488f95140ad48910f0d8dfbe58
                  <h2>Belo horizonte</h2>
                  http://api.openweathermap.org/data/2.5/weather?q=belo%20horizonte&appid=2beb05488f95140ad48910f0d8dfbe58
                  <h2>Ubatuba</h2>
                  http://api.openweathermap.org/data/2.5/weather?q=ubatuba&appid=2beb05488f95140ad48910f0d8dfbe58
                  <h2>Gramado</h2>
                  http://api.openweathermap.org/data/2.5/weather?q=gramado&appid=2beb05488f95140ad48910f0d8dfbe58
            
                  
                </div>
            </div>
        </div>
    );
}
