// Composant Liste des pages du prix Elbakin.net
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerListElbakinAward extends Component {

    constructor() {
        super();
        this.state = {
            postsPrix: []
        }
    }

    componentDidMount() {

        // recuperation de l'information idoine
        const categorie = "228";

        // appel du json de wordpress consacré aux articles pour tel catégorie
        let dataPostsURL = REST_URL + "/posts";
        // seulement les pages dont le parent est "prix elbakin"
        fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1&per_page=10")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    postsPrix: res
                })
            });

    }

    render() {

        if (this.state.postsPrix.length > 0) {

            // construction de la preview des différentes pages associatives
            let listePrix = this.state.postsPrix.map((post, index) => {
                return (
                    <li key={"prix-elbk-" + index}>
                        <Link to={"/prix-elbakin/" + post.id + "/" + post.slug}>{post.title.rendered}</Link>
                    </li>
                )
            });

            return (
                <aside id="linked" className="sidebar_card to_be_fixed">
                    <h2><span className="icon icon-heart" /> Vous aimerez aussi</h2>
                    <ul className="basic_list">
                        {listePrix}
                    </ul>
                </aside>
            );

        } else {
            return null;
        }
    }
}

export default ContainerListElbakinAward;