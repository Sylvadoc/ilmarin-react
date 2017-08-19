// Squelette de la page Thème
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../action-creators';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'
import Breadcrumb from '../../breadcrumb'

// special


class ThemeSkeleton extends Component {

    componentDidMount() {
        // fermeture préventive de la navigation
        this.props.closeBurger();
    }

    render() {

        const { burgerIsDisplayed, allBooksByTheme, theme } = this.props;
        const page = "page-taxonomie-bib";

        // construction de la preview
        const itemByTheme = allBooksByTheme.map((livre, index) => {
            return (
                <li key={index}>
                    <Link to={"/bibliotheque/" + livre.id + '/' + livre.slug}>{livre.acf.titre_original}</Link>
                </li>
            )
        });

        return (
            <div>
                <Navigation />
                <div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
                    <Header />
                    <main role="main" className="m-page">
                        <Breadcrumb page={page} item={theme} />
                        <h1>Tous les livres du thème {theme.name}</h1>
                        <p>{theme.description}</p>
                        <ul>
                            {itemByTheme}
                        </ul>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ closeBurger }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSkeleton);