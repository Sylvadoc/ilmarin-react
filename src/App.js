// Composant conteneur de tout le site
// =============================================

// methodes et fonctions react ou associées
import React from 'react';
import { Route } from 'react-router-dom'

// composants en commun
import Header from './components/header'
import Footer from './components/footer'
import Navigation from './components/navigation'

// les différentes sections
import Home from './components/home/home.root'
import Bibliotheque from './components/bibliotheque/bibliotheque.root'
import Tolkien from './components/tolkien/tolkien.root'
import Fantasy from './components/fantasy/fantasy.root'
import Emissions from './components/emissions/emissions.root'

const App = () => (
	<div>
		<Navigation />
		<div className="m-scene">
			<Header />
			<main>
				<Route exact path="/" component={Home} />
				<Route exact path="/bibliotheque" component={Bibliotheque} />
				<Route exact path="/tolkien" component={Tolkien} />
				<Route exact path="/fantasy" component={Fantasy} />
				<Route exact path="/emissions" component={Emissions} />
			</main>
			<Footer />
		</div>
	</div>
)

export default App