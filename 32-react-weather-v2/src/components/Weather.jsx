

const Weather = ({ message, weatherInfo, showLocation, showTemp, showPressure }) => {
    return (
        <div>
            {message && <p>{message}</p>}
            {weatherInfo && (
                <div>
                    {showLocation && <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>}
                    {showTemp && <p>Temperature: {weatherInfo.temp}°C</p>}
                    {showPressure && <p>Pressure: {weatherInfo.pressure} hPa</p>}
                </div>
            )}
        </div>
    );
};

export default Weather;