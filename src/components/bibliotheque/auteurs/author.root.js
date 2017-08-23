// Composant conteneur de la page Auteur
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopSkeleton from './skeletons/author-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../../utils/helmet';

class AuthorRoot extends Component {

    constructor() {
        super();
        this.state = {
            author: undefined,
            bibliographie: []
        }
    }

    componentDidMount() {
        // data de auteur X
        const itemId = this.props.match.params.itemId;
        let dataAuteurURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/auteur/" + itemId + "?_embed";
        fetch(dataAuteurURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    author: res
                })
            })
			.then(res => {
				this.setState({
					bibliographie: this.state.author.acf.bibliographie
				});
			});
    }

    render() {

        if (this.state.author && this.state.bibliographie) {

            const item = this.state.author;
            const bibliographie = this.state.bibliographie;

            return (
                <div className="page-auteur">
                    <Helmet
                        link={[
                            getPageCss('chronique')
                        ]}
                        title={item.author.rendered}
                    />
                    <DesktopSkeleton item={item} bibliographie={bibliographie} />
                </div>
            )
        }
        else {
            return null;
        }
    }
}
export default AuthorRoot;