import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faThermometerHalf, faWind } from '@fortawesome/free-solid-svg-icons';
import './CurrentWeather.scss';

const CurrentWeather = ({ data }) => {

    const currentData = data.current;
    
    var realFeel = currentData.weather[0].description;
    realFeel = realFeel.trim();
    realFeel = realFeel.charAt(0).toUpperCase() + realFeel.slice(1);
    
    return(
        <div>
            <div className="tempWrapper">
                <b className="tempWrapper__temp">{ Math.round(currentData.temp) }&#176;</b>
                <img 
                    className="tempWrapper__icon"
                    src={require(`../icons/${currentData.weather[0].icon}.png`).default}
                    alt={currentData.weather[0].description}
                />
            </div>

            <p>{ realFeel }</p>
            <p>Feels like { Math.round(currentData.feels_like) }&#176;</p>

            <div className="parameters">
                <div className="parameters__humidity">
                    <FontAwesomeIcon icon={faUmbrella} size="lg"/>
                    <p>{ currentData.humidity } %</p>
                </div>

                <div className="parameters__temp">
                    <FontAwesomeIcon icon={faThermometerHalf} size="lg" />
                    <p>{ Math.round(data.daily[0].temp.max) }&#176; / { Math.round(data.daily[0].temp.min) }&#176;</p>
                </div>

                <div className="parameters__wind">
                    <FontAwesomeIcon icon={faWind} size="lg" />
                    <p>{ Math.round(currentData.wind_speed) } km/h</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;