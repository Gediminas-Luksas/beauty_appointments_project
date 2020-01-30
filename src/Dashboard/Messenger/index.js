import React from 'react';

import Header from '../components/Header';
import DashboardNavBar from '../components/NavBar';
import Join from './Join';

const Messenger = () => {
	return (
		<div>
			<Header />
			<DashboardNavBar />
			<Join />
		</div>
	);
};

export default Messenger;
