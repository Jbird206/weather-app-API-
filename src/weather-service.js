export class WeatherService {
    async getWeatherByCity(city) {
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acd1196ba2169878e1449978dc3cdda4`);
            let jsonifiedResponse;
            if (response.ok && response.status == 200) {
                jsonifiedResponse = await response.json();
            } else {
                jsonifiedResponse = false;
            }
            return jsonifiedResponse;
        } catch(error) {
            return false;
        }
    }
}