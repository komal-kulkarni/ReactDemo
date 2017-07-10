import React from "react";
import ReactDom from "react-dom";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import renderer from 'react-test-renderer';
import App from "./components/App";
import {Home} from "./components/Home";

const history = createHashHistory();

class Login extends React.Component {
	render() {
		return(
			<Router history={history}>
		        <Switch>
		            <Route exact path="/" component={App} />
		            <Route exact path="/home" component={Home} />
		        </Switch>
		    </Router> 
		);
	}
}

const reducer = (
	state = {
		myEmail: "komal.kulkarni@gmail.com",
		myPass: "kk#12345"
	}, 
	action) => {
		switch (action.type) {
			case "VALIDATE_USER" :

				if(state.myEmail == action.payload.email && state.myPass == action.payload.pass) {
					console.log("hi");
					history.replace({ pathname: '/home' });
				}
				else{
					alert("Please enter valid email Id or password");
				}
				break;
		}

	return state;
};

const store = createStore(combineReducers({myReducer:reducer}), {});

store.subscribe(() => {
	console.log("updated value = "+store.getState());
});

ReactDom.render(
	<Provider store={store}>
		<Login />
	</Provider>,
	window.document.getElementById("app")
);