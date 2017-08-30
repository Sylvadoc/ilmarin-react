// Composant conteneur de la page Emission
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopEmissionsSkeleton from './skeletons/emissions-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';
import { REST_URL } from '../../constants/pathname'

class EmissionsRoot extends Component {

    constructor() {
        super();
        this.state = {
            categorie: undefined
        }
    }

    componentDidMount() {
        const catId = this.props.match.params.catId;

        // Définition de la categorie X
        let dataCatURL = REST_URL + "/categories";
        fetch(dataCatURL + "/" + catId)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    categorie: res
                })
            });
    }

	render() {

        const catSlug = this.props.match.params.catId;

        if (this.state.categorie) {

            const categorie = this.state.categorie;

            return (
                <div className="page-emission">
                    <Helmet
                        link={[
                            getPageCss('emissions')
                        ]}
                        title="Les émissions & podcasts ~ Elbakin.net"
                    />
                    <DesktopEmissionsSkeleton categorie={categorie} categorieSlug={catSlug} />
                </div>
            )
        } else {
            return null;
        }
	}
}
export default EmissionsRoot;