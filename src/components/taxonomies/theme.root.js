// Composant conteneur de la page Thème
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import ThemeSkeleton from './skeletons/theme.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class ThemeRoot extends Component {

    constructor() {
        super();
        this.state = {
            theme: undefined,
            allBooksByTheme: []
        }
    }

    componentDidMount() {
        const itemId = this.props.match.params.itemId;
        // liste de tous les livres du theme X
        let allBooksByThemeURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre?themes=" + itemId;
        fetch(allBooksByThemeURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allBooksByTheme: res
                })
            });
        // Définition du thème X
        let themeURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/themes/" + itemId;
        fetch(themeURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    theme: res
                })
            });
    }

    render() {

        if (this.state.theme) {

            const theme = this.state.theme;
            const allBooksByTheme = this.state.allBooksByTheme;

            return (
                <div className="page-taxonomie">
                    <Helmet
                        link={[
                            getPageCss('chronique')
                        ]}
                        title={"Tous les livres du thème " + theme.name}
                    />
                    <ThemeSkeleton allBooksByTheme={allBooksByTheme} theme={theme} />
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default ThemeRoot;