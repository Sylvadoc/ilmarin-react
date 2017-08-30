// Composant conteneur de la page Genre
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import GenreSkeleton from './skeletons/genre.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';
import { REST_URL } from '../../constants/pathname'

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
        let allBooksByGenreURL = REST_URL + "/livre?genre=" + itemId + "&_embed=1";
        fetch(allBooksByGenreURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allBooksByGenre: res
                })
            });
        // Définition du thème X
        let genreURL = REST_URL + "/genre/" + itemId;
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