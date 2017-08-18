// Squelette de la page Bibliotheque : version desktop
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

// special


class EditionSkeleton extends Component {

    componentDidMount() {
        // fermeture préventive de la navigation
        this.props.closeBurger();
    }

    render() {

        const { burgerIsDisplayed, item, maison } = this.props;

        // construction de la preview
        const itemByHouse = item.map((livre, index) => {
            return (
                <li key={index}>
                    <Link to={"/bibliotheque/" + livre.id + "/" + livre.slug}>{livre.acf.titre_original}</Link>
                </li>
            )
        });

        return (
            <div>
                <Navigation />
                <div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
                    <Header />
                    <main role="main" className="m-page">
                        <h1>Tous les livres de la maison d'édition {maison.name}</h1>
                        <p>{maison.description}</p>
                        <ul>
                            {itemByHouse}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditionSkeleton);