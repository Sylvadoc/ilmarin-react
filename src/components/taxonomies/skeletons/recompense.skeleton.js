// Squelette de la page Récompense
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


class AwardSkeleton extends Component {

	componentDidMount() {
		// fermeture préventive de la navigation
		this.props.closeBurger();
	}

	render() {

		const { burgerIsDisplayed, allBooksByAward, award } = this.props;
		const page = "page-taxonomie-bib";

		// construction de la preview
		const itemByAward = allBooksByAward.map((livre, index) => {
			return (
				<div className="flex-item" key={"tax-g-" + index}>
					<article>
						<Link to={"/bibliotheque/" + livre.id + '/' + livre.slug} className="entry-header">
							{livre._embedded['wp:featuredmedia'] ? <img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + livre.title.rendered} /> : 'pas de couverture' }
							<p><span dangerouslySetInnerHTML={ {__html: livre.title.rendered} }></span></p>
						</Link>
						{livre.acf.auteur[0] && <p className="genre">de {livre.acf.auteur[0].post_title}</p>}
						<div className="entry-meta">
							par <Link to={"/profil/" + livre._embedded.author[0].id + '/' + livre._embedded.author[0].slug}>{livre._embedded.author[0].slug}</Link>
						</div>
					</article>
				</div>
			)
		});

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">
						<Breadcrumb page={page} item={award} />

						<section id="list-taxonomies" className="liste_ouvrage grey-section">
							<div className="row">
								<h1 className="simili-title">Tous les livres ayant reçu le <strong>{award.name}</strong></h1>
								<div className="small-12 medium-10 large-12 columns">
									<div className="def-taxo">
										<p>{award.description}</p>
									</div>
									<ul className="flex-list">
										{itemByAward}
									</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(AwardSkeleton);