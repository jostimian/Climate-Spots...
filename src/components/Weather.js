import React from 'react'
import axios from 'axios';

const apiKey = "&appid=6a6bfcb730cdf7f8507bb5c849d13fe1";
const urlPlace = "api.openweathermap.org/data/2.5/weather?q=";

async function getdata(){
	let res = await axios.get(urlPlace+"Manila"+apiKey)
	let data = res.data;
	return data;
}
function Weather() {
	return (
		<div>
			<p>{getdata}</p>
		</div>
	)
}

export default Weather
