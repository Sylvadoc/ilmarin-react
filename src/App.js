// Composant conteneur de tout le site
// =============================================

// methodes et fonctions react ou associées
import React from 'react';
import { Route } from 'react-router-dom'

// composants en commun
import Header from './components/header'
import Footer from './components/footer'

// les différentes sections
import Home from './components/home/home.root'
import Bibliotheque from './components/bibliotheque/bibliotheque.root'

const App = () => (
	<div>
		<Header />
		<main>
			<Route exact path="/" component={Home} />
			<Route exact path="/bibliotheque" component={Bibliotheque} />
		</main>
		<Footer />
	</div>
)

export default App