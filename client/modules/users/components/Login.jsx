import React from 'react';
import Helmet from 'react-helmet';


class Login extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<div className="login user-form">
				<Helmet title="Login" />
				<h1>Login</h1>
				{error ? <p style={{color: 'red'}}>{error}</p> : null}
				<form>
					<input ref="email" type="email" placeholder="Email" />
					<input ref="password" type="password" placeholder="Password" />
					<button onClick={this.login.bind(this)} type="submit">Login</button>
				</form>
			</div>
		)
	}

	login(e) {
		e.preventDefault();
		const {loginUser} = this.props;
		const {email, password} = this.refs;
		loginUser(email.value, password.value);
		email.value = '';
		password.value = '';
	}
}

export default Login;
