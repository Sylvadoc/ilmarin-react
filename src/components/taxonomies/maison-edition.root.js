// Composant conteneur de la page Maison d'édition
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import EditionSkeleton from './skeletons/maison-edition.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';
import { REST_URL } from '../../constants/pathname'

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
        let allBooksByHouseURL = REST_URL + "/livre?maison_edition=" + itemId + "&_embed=1";
        fetch(allBooksByHouseURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allBooksByHouse: res
                })
            });
        // Définition de la maison d'édition X
        let maisonURL = REST_URL + "/maison_edition/" + itemId;
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
            const allBooksByHouse = this.state.allBooksByHouse;

            return (
                <div className="page-taxonomie">
                    <Helmet
                        link={[
                            getPageCss('chronique')
                        ]}
                        title={"Tous les livres de la maison d'édition " + maison.name}
                    />
                    <EditionSkeleton allBooksByHouse={allBooksByHouse} maison={maison} />
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default MaisonEditionRoot;