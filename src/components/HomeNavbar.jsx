import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeNavigation from './HomeNavigation.jsx';
import Home from './Home';
import About from './About';
import Endorsements from './Endorsements';
import System from './System';
import SignIn from './SignIn';
import SighUp from './SignUp';

const HomeNavbar = () => {
	return (
		<div className="Home-navbar">
			<BrowserRouter>
				<HomeNavigation></HomeNavigation>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/endorsements' component={Endorsements}/>
					<Route path='/system' component={System}/>
					<Route path='/sign-in' component={SignIn}/>
					<Route path='/sign-up' component={SighUp}/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default HomeNavbar;