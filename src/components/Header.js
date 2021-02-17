import React from 'react';
class Header extends React.Component {
	render(){
		return (
			<div className="Header">
				<div className="logo">
					<h2>Climate Spots...</h2>
				</div>
				<div className="creator">
					<h3>Created By <a href="https://github.com/jostimian">Timothy Ganoza </a>🔥</h3>
				</div>
			</div>
		);
	}
}

export default Header;
