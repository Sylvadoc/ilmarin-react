// Composant Liste de tous les thèmes
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class ContainerAllGenres extends Component {

    constructor() {
        super();
        this.state = {
            themes: []
        }
    }

    componentDidMount() {
        // appel du json de wordpress consacré à la taxonomie "thème"
        let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/themes";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    themes: res
                })
            });
    }

    render() {

        // construction de la liste de thèmes
        let listThemes = this.state.themes.map((theme, index) => {
            return (
                <li key={index}>
                    <Link to={"/theme/" + theme.id + "/" + theme.slug}>{theme.name}</Link>
                </li>
            )
        });

        return (
            <aside className="classement">
                <h2>Par thème</h2>
                <ul className="basic_list">
                    {listThemes}
                </ul>
            </aside>
        );
    }
}

export default ContainerAllGenres;