// Composant conteneur de tout le site
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

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

class App extends Component {

	render() {

		const { burgerIsDisplayed } = this.props;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main>
						<Route exact path="/" component={Home}/>
						<Route exact path="/bibliotheque" component={Bibliotheque}/>
						<Route exact path="/tolkien" component={Tolkien}/>
						<Route exact path="/fantasy" component={Fantasy}/>
						<Route exact path="/emissions" component={Emissions}/>
					</main>
					<Footer />
				</div>
			</div>
		)
	}
}


const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

export default connect(mapStateToProps)(App);