// Squelette de la page Auteur : version desktop
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../../action-creators';

// composants
import Header from '../../../header'
import Footer from '../../../footer'
import Navigation from '../../../navigation'
import Breadcrumb from '../../../breadcrumb'

// special

class AuthorDesktop2Skeleton extends Component {

    constructor() {
        super();
        this.state = {
            hisBooks: []
        }
    }

    componentDidMount() {

        // recuperation de toute la fiche auteur
        const { item } = this.props;

        // fermeture préventive de la navigation
        this.props.closeBurger();

        // recuperation de tous ses livres
        const allOfHisBooks = item.acf['bibliographie'].map((sonLivre) => {
            return sonLivre.ID
        });

    }

    render() {

        const { burgerIsDisplayed, item } = this.props;
        const page = "page-auteur";

        let sexe;
        if(item.acf.genre === "homme") {
            sexe = "&Eacute;crivain"
        } else if(item.acf.genre === "femme") {
            sexe = "&Eacute;crivaine"
        } else {
            sexe = "&Eacute;crivain"
        }

        return (
            <div>
                <Navigation />
                <div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
                    <Header />
                    <main role="main" className="m-page">
                        
                        <Breadcrumb page={page} item={item} />
                        
                        <section id="author_biography">
                            <div className="row clearfix" itemScope itemType="http://schema.org/Person">
                                <div className="small-12 medium-4 large-5 columns">
                                    <div className="portrait">
                                        <div className="blason">
                                            <img src={item.acf['photophoto-auteur-auteur'].sizes.medium_large} alt={"" + item.acf['photophoto-auteur-auteur'].description + " " + item.acf['photophoto-auteur-auteur'].caption} />
                                        </div>
                                        <div className="ruban">
                                            <span className="ruban-text" dangerouslySetInnerHTML={ {__html: item.title.rendered} }></span>
                                            <span className="ruban-deco"><span>*</span></span>
                                            <span className="ruban-text-02" dangerouslySetInnerHTML={ {__html: sexe} }></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-12 medium-8 large-7 columns">
                                    <h1 className="bio-title" itemProp="name" dangerouslySetInnerHTML={ {__html: item.title.rendered} }></h1>
                                    <ul className="basic_list">
                                        <li><strong>Né en :</strong> {item.acf.date_de_naissance} {item.acf.date_de_deces && <span>| <strong>Mort en</strong> {item.acf.date_de_deces}</span>}</li>
                                        {item.acf.site_web && <li><strong>Site web :</strong> <span itemProp="mainEntityOfPage"><a href={item.acf.site_web} target="_blank" rel="noopener noreferrer" title={"Site web de " + item.title.rendered + " (nouvelle fenêtre)"}>{item.acf.site_web}</a></span></li>}
                                        <li><strong>Pays :</strong> <span itemProp="nationality">{item.acf.pays_auteur}</span></li>
                                    </ul>
                                    <div className="bio" itemProp="description" dangerouslySetInnerHTML={ {__html: item.content.rendered} } />
                                </div>
                            </div>
                        </section>

                        <section id="author_bibliography" className="liste_ouvrage">
                            <div className="row clearfix">
                                <span className="simili-title">Sa <strong>bibliographie</strong></span>
                                <div className="flex-list">
                                    flex items
                                </div>
                            </div>
                        </section>
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDesktop2Skeleton);