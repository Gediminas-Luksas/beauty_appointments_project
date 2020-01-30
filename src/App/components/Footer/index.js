import React from 'react';
import './index.css';

import logo from '../../../images/logo.png';
import img from '../../../images/zemelapis_684x434.jpg';

const Footer = () => {
	return (
		<footer>
			<div className="footer_row">
				<div className="footer_info">
					<img src={logo} alt="Logo" />
					<p>
						Rinktines 40, Vilnius
						<br />
						Tel: 8611 11111
						<br />
						Mon-Fri:8AM-8PM
					</p>
					<br />
					<button className="btn-footer">Book Now</button>
				</div>
				<div className="footer_map">
					<h2>SERVICES</h2>
					<img src={img} alt="map" />
				</div>
				<div className="footer_icons">
					<h2>INFORMATION</h2>
					<button className="fa fa-facebook"></button>
					<button className="fa fa-instagram"></button>
					<button className="fa fa-linkedin"></button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
