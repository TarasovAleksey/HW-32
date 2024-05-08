//scc
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {Component} from "react";
import {API_KEY, BASE_URL} from "../utils/constants.js";
//TODO create styles
//TODO clen code
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: "",
            message: "Enter city name"
        };
    }

    getWeather =(city)=>{
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response=> response.json())
            .then(data => {
                this.setState({
                    weatherInfo: {
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure
                    },
                    message: null
                })
            })
            .catch(e=>console.log(e)) //TODO get view Error
    }
    render() {
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather message={this.state.message} weatherInfo={this.state.weatherInfo}/>
            </div>
        );
    }
}

export default Data;