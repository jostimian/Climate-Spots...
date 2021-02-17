import React from 'react'
import axios from 'axios';

const apiKey = "&appid=6a6bfcb730cdf7f8507bb5c849d13fe1";
const urlPlace = "api.openweathermap.org/data/2.5/weather?q=";

class Weather extends React.Component {
	constructor(props){
		super();
		this.state ={
			count:0,
		}
	}
	render(){
		return (
			<div className="weather">
				<div className="temp">
				<p>Temperature: </p>
					</div>
				<div className="humid">
					<p>Humidity: </p>
				</div>
				<div className="localwthr">
					<p>local Weather: </p>
				</div>
				<div className="userContainer">
					<div className="locationinp">
						<input type="text"/>
					</div>
					<div className="btn">
						<button>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Weather
