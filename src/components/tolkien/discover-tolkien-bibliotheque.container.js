// Composant Liste bibliotheque tolkien sur la section tolkien
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerDiscoverTolkienLibrary extends Component {

    constructor() {
        super();
        this.state = {
            selected: 0,
            livresTolkien: []
        };
        this.selectSubnav = this.selectSubnav.bind(this);
    }

    // selectionner un onglet
    selectSubnav(index) {
        this.setState({ selected: index });
    }

    componentDidMount() {

        // appel du json de wordpress consacré aux derniers livres
        let AllLastLivresURL = REST_URL + "/livre?genre=277&_embed=1&per_page=6";
        fetch(AllLastLivresURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    livresTolkien: res
                })
            });
    }

    render() {

        let whichSelected = this.state.selected;

        // construction de la preview des derniers livres chroniqués
        let fromTolkien = this.state.livresTolkien.map((livre, index) => {
            return (
                <li className="small-4 medium-3 large-2 columns" key={"derniers-" + index}>
                    <Link to={"/bibliotheque/" + livre.id + '/' + livre.slug}>
                        {livre._embedded['wp:featuredmedia'] ? <img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + livre.title.rendered} className="preview-cover" /> : 'pas de couverture' }
                    </Link>
                    <span></span>
                    <div dangerouslySetInnerHTML={ {__html: livre.excerpt.rendered} } />
                </li>
            )
        });

        return (
            <section id="all_new_chronique" className="jeff">
                <div className="row">
                    <span className="simili-title"><strong>Bibliographie</strong></span>
                    <aside id="chroniques" className="small-12 medium-12 large-12 columns">
                        <Link className="shadow-btn light-shadow-btn" to="/bibliotheque">Toute la bibliographie</Link>
                        <ul className="tabs">
                            <li><a onClick={() => this.selectSubnav(0)} className={"btn-tab " + (whichSelected === 0 ? 'active' : '')} href="#from_tolkien">De Tolkien</a></li>
                            <li><a onClick={() => this.selectSubnav(1)} className={"btn-tab " + (whichSelected === 1 ? 'active' : '')} href="#on_tolkien">Sur Tolkien</a></li>
                        </ul>
                        <div className="row row_tab_all">
                            <div className={"row_tab " + (whichSelected === 0 ? 'open' : '')} id="from_tolkien">
                                <ul className="critiques">
                                    {fromTolkien}
                                </ul>
                            </div>
                            <div className={"row_tab " + (whichSelected === 1 ? 'open' : '')} id="on_tolkien">
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}

export default ContainerDiscoverTolkienLibrary;