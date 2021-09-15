import './DailyWeather.scss';

const DailyWeather = ({ dailyData }) => {

    /* var seconds = dailyData.dt;
    var date = new Date(seconds * 1000);
    var timeStr = date.toString().split(' ', 3).join(' ');

    return(
        <div>
            <h3>{ timeStr }</h3>
            <img 
                // className={`${className} alpacaImg`}
                src={require(`../icons/${dailyData.weather[0].icon}.png`).default}
                alt={dailyData.weather[0].description}
            />
            <p>{ Math.round(dailyData.temp.max) }&#176;/{ Math.round(dailyData.temp.min) }&#176;</p>
        </div>
    ) */

    const renderDailyWeather = () => {
        const dailyWeather = dailyData.map((day, index) => {
            if(index !== 0 && index < 5) {
                var seconds = day.dt;
                var date = new Date(seconds * 1000);
                var timeStr;
                if(index === 1) {
                    timeStr = "Tomorrow";
                } else {
                    timeStr = date.toString().split(' ', 1);
                }
                            
                return(
                    <div 
                        className="daily_weather__box"
                        key={index}>
                        <h3>{ timeStr }</h3>
                        <img 
                            className="daily_weather__icon"
                            src={require(`../icons/${day.weather[0].icon}.png`).default}
                            alt={day.weather[0].description}
                        />
                        <p className="daily_weather__temp">{ Math.round(day.temp.max) }&#176; / { Math.round(day.temp.min) }&#176;</p>
                    </div>
                )
            } else {
              return true;
            }
        })
        return(
            <div>
                <div className="daily_weather">{ dailyWeather }</div>
            </div>
        )
    }

    return(
        renderDailyWeather() 
    )
}

export default DailyWeather;