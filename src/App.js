import logo from './logo.svg';
import Header from './components/Header.js';
import Weather from './components/Weather.js';
import React from 'react';
class App extends React.Component {
	render(){
		return (
			<div className="App">
				<Header/>
				<Weather/>
			</div>
		  );
	}
}

export default App;
