import React from 'react';
import './index.css';

import img from '../../../images/About.jpg';
import img2 from '../../../images/About2.jpg';

const About = () => {
	return (
		<section className="container">
			<div className="row">
				<div className="about_info">
					<h1>About Me</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error deserunt nihil dolorum
						rem nobis placeat molestiae facilis corporis numquam deleniti ducimus, voluptate vero
						perferendis iusto. Architecto quo voluptate ab minima?
					</p>
					<img src={img} alt="classic" />
				</div>
				<div className="about_img">
					<img src={img2} alt="about" />

					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ex, dignissimos est
						beatae voluptatum error? Magni pariatur vitae vel, vero fuga, non ab cupiditate eos ut
						obcaecati cum nostrum facilis!
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
