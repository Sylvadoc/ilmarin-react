// Composant conteneur de tout le site
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

// les différentes sections
import Home from './components/home/home.root'
import Bibliotheque from './components/bibliotheque/bibliotheque.root'
import Tolkien from './components/tolkien/tolkien.root'
import Fantasy from './components/fantasy/fantasy.root'
import Emissions from './components/emissions/emissions.root'

// composants divers
import SpriteSvg from './components/sprite-svg'

class App extends Component {

	render() {

		return (
			<div id="app">
				<SpriteSvg />
				<Route exact path="/" component={Home}/>
				<Route exact path="/bibliotheque" component={Bibliotheque}/>
				<Route exact path="/tolkien" component={Tolkien}/>
				<Route exact path="/fantasy" component={Fantasy}/>
				<Route exact path="/emissions" component={Emissions}/>
			</div>
		)
	}
}

export default App;