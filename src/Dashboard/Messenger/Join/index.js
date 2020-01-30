import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class SignIn extends React.Component {
	state = {
		name: '',
		room: '',
	};
	// const [name, setName] = useState('');
	// const [room, setRoom] = useState('');

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="container">
				<div className="innerContainer">
					<h1 className="heading">ask questions</h1>
					<div>
						<input
							placeholder="Name"
							className="input"
							type="text"
							name="name"
							onChange={this.onChange}
						/>
					</div>
					<div>
						<input
							placeholder="Room"
							className="input mt-20"
							type="text"
							name="room"
							onChange={this.onChange}
						/>
					</div>
					<Link
						onClick={(e) => (!this.state.name || !this.state.room ? e.preventDefault() : null)}
						to={`/chat?name=${this.state.name}&room=${this.state.room}`}
					>
						<button className={'button mt-20'} type="submit">
							Sign In
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default SignIn;
