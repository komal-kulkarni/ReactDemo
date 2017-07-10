import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";

class App extends React.Component {
	
	constructor() {
		super();
	}

	submit() {
		var email = ReactDom.findDOMNode(this.refs.emailId).value;
		var pass = ReactDom.findDOMNode(this.refs.pass).value;
	    this.props.dispatch({
	      type: 'VALIDATE_USER',
	      payload: {email: email, pass: pass}
	    });
	}

	validateEmail() {
		var email = ReactDom.findDOMNode(this.refs.emailId).value;
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) == false) 
        {
            alert('Invalid Email Address');
        }
	}

	render() {
		return(
			<div>
				<h3>Login</h3>
				<form>
					<input type="email" placeholder="Enter your email Id" ref="emailId" onBlur={this.validateEmail.bind(this)}/><br/><br/>
					<input type="password" placeholder="Enter your password" ref="pass"/><br/><br/>
					<input type="button" id="loginButton" onClick={this.submit.bind(this)}  value="Submit"/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		myReducer: state.myReducer
	};
};

export default connect(mapStateToProps)(App);