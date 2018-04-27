// Composant conteneur de tout le site
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { Route } from "react-router-dom";

// redux
import { connect } from 'react-redux';
import { setMessage } from './store/appReducer';

// les différentes sections
import Home from './components/home/home.root'
import Bibliotheque from './components/bibliotheque/bibliotheque.root'
import Tolkien from './components/tolkien/tolkien.root'
import Fantasy from './components/fantasy/fantasy.root'
import Emissions from './components/emissions/emissions.root'

// les différentes pages
import PageNews from './components/actualites/post.root'
import PageArticle from './components/actualites/articles-itws.root'
import PageLivre from './components/bibliotheque/livres/livres.root'
import PageAuteur from './components/bibliotheque/auteurs/author.root'
import PageMaisonEdition from './components/taxonomies/maison-edition.root'
import PageTheme from './components/taxonomies/theme.root'
import PageGenre from './components/taxonomies/genre.root'
import PageRecompense from './components/taxonomies/recompense.root'
import PageArticleEmission from './components/emissions/article.emissions.root'
import PageArticlePrix from './components/prix-elbakin/prix-elbakin.root'

// composants divers
import SpriteSvg from './components/sprite-svg'

class App extends Component {

    componentDidMount() {
        if(!this.props.message) {
            this.props.updateMessage("Hi, I'm from client!");
        }
    }

	render() {

		return (
			<div id="app">
                <h1>Redux: { this.props.message }</h1>
				<SpriteSvg />
                <Route exact path="/" component={Home} />
                    <Route path="/actualites/news/:postId/:slug" component={PageNews} />
                    <Route path="/actualites/articles/:postId/:slug" component={PageArticle} />
                    <Route path="/actualites/interviews/:postId/:slug" component={PageArticle} />
                <Route exact path="/bibliotheque" component={Bibliotheque} />
                    <Route path="/bibliotheque/:itemId/:slug" component={PageLivre} />
                    <Route path="/auteur/:itemId/:slug" component={PageAuteur} />
                    <Route path="/edition/:itemId/:slug" component={PageMaisonEdition} />
                    <Route path="/theme/:itemId/:slug" component={PageTheme} />
                    <Route path="/genre/:itemId/:slug" component={PageGenre} />
                    <Route path="/recompense/:itemId/:slug" component={PageRecompense} />
                <Route exact path="/tolkien" component={Tolkien} />
                <Route exact path="/fantasy" component={Fantasy} />
                <Route exact path="/emissions/:catId/:slug" component={Emissions} />
                    <Route path="/emissions/articles/:postId/:slug" component={PageArticleEmission} />
                <Route path="/prix-elbakin/:postId/:slug" component={PageArticlePrix} />
			</div>
		)
	}
}

export default connect(
    ({ app }) => ({
        message: app.message,
    }),
    dispatch => ({
        updateMessage: (messageText) => dispatch(setMessage(messageText)),
    })
)(App);