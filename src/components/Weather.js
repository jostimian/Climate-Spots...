import React from 'react'
import axios from 'axios';

const apiKey = "&appid=6a6bfcb730cdf7f8507bb5c849d13fe1&units=metric";
const urlPlace = "https://api.openweathermap.org/data/2.5/weather?q=";

class Weather extends React.Component {
	constructor(props){
		super();
		this.state ={
			Temp:"",
			Humid:"",
			Wthr:"",
			country:""
		}
	}
	getWeatherData = async(event) =>{
		try{
			console.warn(event.target.value);
			let res = await axios.get(urlPlace+event.target.value+apiKey);
			this.setState({
				Temp:res.data["main"]["feels_like"],
				Humid:res.data["main"]["humidity"],
				Wthr:res.data["weather"][0]["main"],
				country:res.data["sys"]["country"],
				name:res.data["name"]
			});
		}
		catch(err){
			console.warn("Country / Place Not Found!!!");
		}
	}
	render(){
		return (
			<div className="weather">
				<div className="ctry">
					<p>Country: {this.state.country} {this.state.name}</p>
				</div>
				<div className="temp">
					<p>Temperature: {this.state.Temp} °C</p>
				</div>
				<div className="humid">
					<p>Humidity: {this.state.Humid} %</p>
				</div>
				<div className="localwthr">
					<p>local Weather: {this.state.Wthr}</p>
				</div>
				<div className="userContainer">
					<div className="locationinp">
						<input onChange={this.getWeatherData} type="text" name ="locationBar"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Weather
