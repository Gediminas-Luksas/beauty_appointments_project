import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class LoginFacebook extends React.Component {
	state = {
		isLoggedIn: false,
		userId: '',
		name: '',
		picture: '',
	};

	responseFacebook = (response) => {
		if (response === null) {
			this.setState({
				isLoggedIn: true,
				userId: response.userId,
				name: response.name,
				picture: response.picture.data.url,
			});
		}
		return null;
	};

	componentClicked = () => console.log('Clicked');

	render() {
		let fbContent;

		if (this.state.isLoggedIn) {
			fbContent = null;
		} else {
			fbContent = (
				<FacebookLogin
					appId="1248573601998690"
					autoLoad={true}
					fields="name,picture"
					onClick={this.componentClicked}
					callback={this.responseFacebook}
				/>
			);
		}

		return <div>{fbContent}</div>;
	}
}
