// Composant Liste de tous les genres
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerAllGenres extends Component {

    constructor() {
        super();
        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        // appel du json de wordpress consacré à la taxonomie "genre"
        let dataURL = REST_URL + "/genre?per_page=20";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    genres: res
                })
            });
    }

    render() {

        // construction de la liste de genres
        let listGenres = this.state.genres.map((genre, index) => {
            return (
                <li key={index}>
                    <Link to={"/genre/" + genre.id + "/" + genre.slug}>{genre.name}</Link>
                </li>
            )
        });

        return (
            <aside className="classement">
                <h2>Par genre</h2>
                <ul className="basic_list">
                    {listGenres}
                </ul>
            </aside>
        );
    }
}

export default ContainerAllGenres;