import React from 'react';
import Helmet from 'react-helmet';


class NewUser extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<div className="register">
				<Helmet title="Register" />
				<h1>Register</h1>
				{error ? <p style={{color: 'red'}}>{error}</p> : null}
				<form>
					<input ref="name" type="text" placeholder="Name" />
					<input ref="email" type="email" placeholder="Email" />
					<input ref="password" type="password" placeholder="Password" />
					<button onClick={this.createUser.bind(this)} type="submit">Sign Up</button>
				</form>
			</div>
		)
	}

	createUser(e) {
		e.preventDefault();
		const {create} = this.props;
		const {name, email, password} = this.refs;
		create(name.value, email.value, password.value);
		email.value = '';
		password.value = '';
	}
}

export default NewUser;
