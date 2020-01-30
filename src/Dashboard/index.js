import React from 'react';
import './index.css';

import user from '../images/user.jpeg';
import img from '../images/background.jpg';

import Header from './components/Header';
import DashboardNavBar from './components/NavBar';
import Calendar from './components/DashCalendar';

const Dashboard = () => {
	const usr = 'as';
	return (
		<div>
			<Header user={user} />
			<DashboardNavBar />
			{usr ? (
				<Calendar />
			) : (
				<section>
					<div className="main-content">
						<h3 className="heading">Your Profile</h3>
						<div className="card-wrappre">
							<div className="row">
								<div className="card">
									<img className="card-img" src={img} alt="card-img" />
									<img className="profile-img" src={user} alt="profile" />
									<h1>Gediminas</h1>
									<button className="btn-dash">Edit Profile</button>
								</div>

								<div className="card-2">
									<div className="card-header">
										Your appointments
										<p>2019-12-12</p>
									</div>
									<ul>
										<li>10:30 AM</li>
										<button className="btn-dash">Edit</button>
									</ul>
									<div className="rules">You can edit appointment until one day left.</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	);
};

export default Dashboard;
