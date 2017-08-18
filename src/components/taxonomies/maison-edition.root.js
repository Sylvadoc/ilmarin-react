// Composant conteneur de la page Livre
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import EditionSkeleton from './skeletons/maison-edition.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class MaisonEditionRoot extends Component {

    constructor() {
        super();
        this.state = {
            edition: undefined,
            allBooksByHouse: []
        }
    }

    componentDidMount() {
        const itemId = this.props.match.params.itemId;
        // liste de tous les livres de la maison d'édition X
        let allBooksByHouseURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre?maison_edition=" + itemId;
        fetch(allBooksByHouseURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allBooksByHouse: res
                })
            });
        // Définition de la maison d'édition X
        let maisonURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/maison_edition/" + itemId;
        fetch(maisonURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    edition: res
                })
            });
    }

    render() {

        if (this.state.edition) {

            const maison = this.state.edition;
            const item = this.state.allBooksByHouse;

            return (
                <div className="page-roman">
                    <Helmet
                        link={[
                            getPageCss('chronique')
                        ]}
                        title={"Tous les livres de la maison d'édition " + maison.name}
                    />
                    <EditionSkeleton item={item} maison={maison} />
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default MaisonEditionRoot;