import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom"

import "./App.css"
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import PorfileView from './views/PorfileView'
import CertificatesView from './views/CertificatesView'
import ActiviesView from './views/ActiviesView'


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
					<Route exact path="/signup" component={RegisterView} />
					<Route exact path="/porfile" component={PorfileView} />
					<Route exact path="/certificates" component={CertificatesView} />
					<Route exact path="/activies" component={ActiviesView} />
					
				</div>
				
			</Router>
		</>
	)
}