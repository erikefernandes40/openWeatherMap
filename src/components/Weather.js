import React, { useState } from 'react';

import { buscarTempo } from '../api/axiosWeatherRoute';
import './weather.css';

function Weather(){
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const pesquisar = async (e) => {
        if(e.key === 'Enter') {
            const data = await buscarTempo(query);

            setWeather(data);
            setQuery('');
        }
    }
    return(
        <div className="box">
          <div className="container">
            
            <input type="text"className="search"placeholder="Nome da cidade"value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={pesquisar}/>
        
            {weather.main && (
              
                <div className="city">
                  <br/>
                    <h1 className="city-name">
                        <span>{weather.name}{', '}</span> 
                        <span>{weather.sys.country}</span>
                    </h1>
                    <br/>
                    <div className="city-temp"> 
                      <h2> Tempertura atual:{' '}{Math.round(weather.main.temp)}{'c°'}
                        <br/><br/>
                          umidade:{' '}{weather.main.humidity}{'%'}
                      </h2>
                    </div>
                    <div className="info">
                        <h3>{weather.weather[0].description}</h3>
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    </div>
                </div>
            )}
          </div>
              
          <div className="container">
              <h2>Top 5 mais Pesquisadas</h2>
            <div>
              <br/>
                  <h2>Ultimas Buscas</h2>
            </div>
          </div>
              
        </div>
    )
}

export default Weather