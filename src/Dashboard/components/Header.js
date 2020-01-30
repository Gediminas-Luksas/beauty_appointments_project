import React from 'react';

const Header = (props) => {
	return (
		<div className="header">
			<div className="logo">
				<a href="/">
					<h2>Dashboard</h2>
				</a>
			</div>
			<div className="user-img">
				<h3>Gediminas</h3>
				<img src={props.user} alt="avatar" />
			</div>
			<div className="burger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	);
};

export default Header;
