// Composant Liste de tous les auteurs
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerListAuthors extends Component {

    constructor() {
        super();
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        // appel du json de wordpress consacré aux auteurs
        let dataURL = REST_URL + "/auteur?per_page=20&_embed=1";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    authors: res
                })
            });
    }

    render() {

        // construction de la liste de genres
        let listAuthors = this.state.authors.map((author, index) => {
            return (
                <li key={index}>
                    <Link to={"/auteur/" + author.id + "/" + author.slug}><span dangerouslySetInnerHTML={ {__html: author.title.rendered} }></span></Link>
                </li>
            )
        });

        return (
            <aside className="classement">
                <h2>Par auteur</h2>
                <p>champ recherche auteur</p>
                <h3>Dernières mises à jour</h3>
                <ul className="basic_list">
                    {listAuthors}
                </ul>
            </aside>
        );
    }
}

export default ContainerListAuthors;