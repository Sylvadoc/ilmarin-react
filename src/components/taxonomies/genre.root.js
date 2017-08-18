// Composant conteneur de la page Genre
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import GenreSkeleton from './skeletons/genre.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class GenreRoot extends Component {

    constructor() {
        super();
        this.state = {
            genre: undefined,
            allBooksByGenre: []
        }
    }

    componentDidMount() {
        const itemId = this.props.match.params.itemId;
        // liste de tous les livres du genre X
        let allBooksByGenreURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre?genre=" + itemId;
        fetch(allBooksByGenreURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allBooksByGenre: res
                })
            });
        // Définition du thème X
        let genreURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/genre/" + itemId;
        fetch(genreURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    genre: res
                })
            });
    }

    render() {

        if (this.state.genre) {

            const genre = this.state.genre;
            const allBooksByGenre = this.state.allBooksByGenre;

            return (
                <div className="page-taxonomie">
                    <Helmet
                        link={[
                            getPageCss('chronique')
                        ]}
                        title={"Tous les livres du genre " + genre.name}
                    />
                    <GenreSkeleton allBooksByGenre={allBooksByGenre} genre={genre} />
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default GenreRoot;