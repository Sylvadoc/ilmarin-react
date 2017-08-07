import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/home/home.root'
import Bibliotheque from './components/bibliotheque/bibliotheque.root'

const App = () => (
	<div>
		<main>
			<Route exact path="/" component={Home} />
			<Route exact path="/bibliotheque" component={Bibliotheque} />
		</main>
	</div>
)

export default App