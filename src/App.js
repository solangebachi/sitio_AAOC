import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom"

import "./App.scss"
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import ProfileView from './views/ProfileView'
import CertificatesView from './views/CertificatesView'
import ActivitiesView from './views/ActivitiesView'
import BillingView from './views/BillingView'


export default function App() {

	const home={
        backgroundColor:"blue"
    }
	return (
		<>
			<Router>
				<div className="App">
					<Route exact path="/" component={HomeView} />
					<Route exact path="/login" component={LoginView} />
					<Route exact path="/register" component={RegisterView} />
					<Route exact path="/profile" component={ProfileView} />
					<Route exact path="/certificates" component={CertificatesView} />
					<Route exact path="/activities" component={ActivitiesView} />
					<Route exact path="/billing" component={BillingView} />
				</div>
				
			</Router>
		</>
	)
}