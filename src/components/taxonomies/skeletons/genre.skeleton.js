// Squelette de la page Genre
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


class GenreSkeleton extends Component {

    componentDidMount() {
        // fermeture préventive de la navigation
        this.props.closeBurger();
    }

    render() {

        const { burgerIsDisplayed, allBooksByGenre, genre } = this.props;
        const page = "page-taxonomie-bib";

        // construction de la preview
        const itemByGenre = allBooksByGenre.map((livre, index) => {
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
                        <Breadcrumb page={page} item={genre} />
                        <h1>Tous les livres du genre {genre.name}</h1>
                        <p>{genre.description}</p>
                        <ul>
                            {itemByGenre}
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

export default connect(mapStateToProps, mapDispatchToProps)(GenreSkeleton);