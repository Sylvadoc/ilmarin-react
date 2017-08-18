// Squelette de la page Livre : version desktop
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../../action-creators';

// composants
import Header from '../../../header'
import Footer from '../../../footer'
import Navigation from '../../../navigation'

// special

class LivreDesktop2Skeleton extends Component {

    constructor() {
        super();
        this.state = {
            maisonEdition: []
        }
    }

	componentDidMount() {

        const { item } = this.props;

		// fermeture préventive de la navigation
		this.props.closeBurger();

        // appel du json de wordpress consacré aux maisons d'éditions
        let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/maison_edition/" + item.maison_edition;
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    maisonEdition: res
                })
            })
	}

	render() {

		const { burgerIsDisplayed, item } = this.props;

        // construction du lien de la maison d'édition
		const maison = this.state.maisonEdition;
        const maisonEditionLink = <Link to={"/edition/" + maison.id + "/" + maison.slug}>{maison.name}</Link>;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">
						page du livre {item.title.rendered}
						<ul>
							{item._embedded['wp:featuredmedia'] && <li><img src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="*" /></li> }
							<li>Extrait : <div dangerouslySetInnerHTML={ {__html: item.excerpt.rendered} } /></li>
							<li>Format : {item.acf.format}</li>
                            {item.acf.cycle[0] && <li>Cycle : {item.acf.cycle[0].post_title}</li>}
							<li>&Eacute;diteur : {maisonEditionLink}</li>
                            {item.acf.auteur[0] && <li>Auteur : {item.acf.auteur[0].post_title}</li>}
                            {item.acf.illustration[0] && <li>Illustration : {item.acf.illustration[0].post_title}</li>}
							<li>Traduction : {item.acf.traduction}</li>
							<li>ISBN : {item.acf.isbn_13}</li>
							<li>Note : {item.acf.note} / 10</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(LivreDesktop2Skeleton);