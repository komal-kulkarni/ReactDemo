import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import App from "./App";

const history = createHashHistory();


export class Home extends React.Component {

	back() {
		history.replace({ pathname: '/' });
	}

	render() {
		return(
			<Router history={history}>
				<Switch>
    			<div>
    				<h3>Hi, this is Home page</h3>
    				<hr />
    				<hr />
    				<div id="aboutDiv">
    					<h4>About Us</h4>
    					<input type="button" id="backButton" onClick={this.back.bind(this)}  value="Go Back"/>
    				</div>
      					<ul>
					        <li><Link to="/profile">Profile</Link></li>
					        <li><Link to="/team">Team</Link></li>
					        <li><Link to="/contact">Contact</Link></li>
			      		</ul>

      				<hr/>

		    		<Route path="/profile" component={Profile}/>
		    		<Route path="/team" component={Team}/>
		    		<Route path="/contact" component={Contact}/>
		    		<Route exact path="/" component={App} />
    			</div>
    			</Switch>
  			</Router>
		);
	}
	
}

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
)

const Team = () => (
  <div>
    <h2>Team</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)
