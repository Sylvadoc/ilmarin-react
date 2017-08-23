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
import Breadcrumb from '../../../breadcrumb'
import DiscoverAlso from '../discover-also.container'

// special

class LivreDesktop2Skeleton extends Component {

	componentDidMount() {

		// fermeture préventive de la navigation
		this.props.closeBurger();

	}

	render() {

		const { burgerIsDisplayed, item, genreMain } = this.props;
        const page = "page-livre";

        // construction de tous les genres
        const allGenres = item._embedded['wp:term'][1];
        const itemAllGenres = allGenres.map((genre, index) => {
            return (
                <span className="tag-genre" key={"genre" + index}><Link to={"/genre/" + genre.id + '/' + genre.slug} title={"Rechercher tous les livres du genre : " + genre.name}>{genre.name}</Link></span>
            )
        });

        // construction de tous les thèmes
        const allThemes = item._embedded['wp:term'][2];
        const itemAllThemes = allThemes.map((theme, index) => {
            return (
                <span className="tag-theme" key={"theme" + index}><Link to={"/theme/" + theme.id + '/' + theme.slug} title={"Rechercher tous les livres ayant pour thème : " + theme.name}>{theme.name}</Link></span>
            )
        });

        // construction de toutes les maisons d'éditions
        const allHouses = item._embedded['wp:term'][3];
        const itemAllHouses = allHouses.map((house, index) => {
            return (
                <span className="tag-edition" key={"maison" + index}><Link to={"/edition/" + house.id + '/' + house.slug} title={"Rechercher tous les livres de la maison d'édition " + house.name}>{house.name}</Link></span>
            )
        });

        // construction de toutes les récompenses
        const allAwards = item._embedded['wp:term'][4];
        const itemAllAwards = allAwards.map((award, index) => {
            return (
                <li className="tag-award" key={"award" + index}><Link to={"/recompense/" + award.id + '/' + award.slug} title={"Rechercher tous les récompenses du " + award.name}>{award.name}</Link></li>
            )
        });

        // construction de l'image
        const itemImage = item._embedded['wp:featuredmedia'][0].media_details.sizes.medium ? <span><img itemProp="image" src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text} /></span> : <span><img itemProp="image" src={item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text} /></span>;

		return (

			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">
                        <Breadcrumb page={page} item={item} />
                        <div className="row">
                            <div className="small-12 medium-10 large-12 small-centered columns">
                                <article id="la_chronique" className="row" itemScope itemType="http://schema.org/Book">
                                    <div className="small-12 medium-4 large-3 columns">
                                        <div className="preview">
                                            {itemImage}
                                            <ul className="toolbar">
                                                <li>
                                                    <a className="print" href="/" title="Imprimer un avis">
                                                        <span className="icon icon-printer" aria-hidden="true"></span><span className="text">imprimer</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            {item.acf.cycle[0] && <h2>{item.acf.cycle[0].post_title}</h2>}
                                        </div>
                                    </div>
                                    <div className="small-12 medium-5 large-9 details columns">
                                        <p className="author">{item.acf.auteur[0] && <Link to={"/auteur/" + item.acf.auteur[0].ID + "/" + item.acf.auteur[0].post_name} itemProp="author" title={"Lire la fiche de " + item.acf.auteur[0].post_title}>{item.acf.auteur[0].post_title}</Link>}</p>
                                        <h1 className="book-title" itemProp="name"><span dangerouslySetInnerHTML={ {__html: item.title.rendered} }></span></h1>
                                        <p className="isbn"><span>ISBN :</span> <span itemProp="isbn">{item.acf.isbn_13}</span> | <span>&Eacute;dité par :</span> {itemAllHouses} {item.acf.traduction && <span className="translated"> avec une traduction de <span className="translator">{item.acf.traduction}</span></span>}</p>
                                        <div className="meta">
                                            <ul>
                                                {item.acf.cycle[0] && <li><strong>Cycle :</strong> {item.acf.cycle[0].post_title}</li>}
                                                <li><strong>Genre :</strong> {itemAllGenres} | <strong>Thèmes:</strong> <span itemProp="keywords">{itemAllThemes}</span></li>
                                                {item.acf.illustration[0] && <li><strong>Illustré par</strong> <Link to="/">{item.acf.illustration[0].post_title}</Link></li>}
                                            </ul>
                                        </div>
                                        {allAwards.length > 0 &&
                                            <div className="awards">
                                                <h2>Récompenses</h2>
                                                <ul className="basic_list">
                                                    {itemAllAwards}
                                                </ul>
                                            </div>
                                        }
                                        <div className="extract" itemProp="citation">
                                            <div dangerouslySetInnerHTML={ {__html: item.excerpt.rendered} } />
                                        </div>
                                    </div>

                                    <hr className="clear" />

                                    <section itemProp="review" itemScope itemType="http://schema.org/Review" className="small-12 medium-12 large-8 large-push-2 columns body-chronique" id="review-all">
                                        <ul className="tabs">
                                            <li>
                                                <a className="active" href="#the-review" title="Voir la chronique">
                                                    <span className="include">
                                                        <span className="icon icon-star-full" aria-hidden="true"></span>
                                                        <span>{item.acf.note}</span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="row row_tab_all">
                                            <div className="row_tab open" id="the-review">
                                                <div className="rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating">
                                                    <span className="none" itemProp="worstRating">0</span>
                                                    <span itemProp="ratingValue" className="note">{item.acf.note}</span>
                                                    <span className="sur">/</span>
                                                    <span itemProp="bestRating" className="end_note">10</span>
                                                </div>
                                                <p className="reviewed_by"><em>Chronique par <a href="/">Gillossen</a></em></p>
                                                <div className="review" itemProp="reviewBody">
                                                    <div dangerouslySetInnerHTML={ {__html: item.content.rendered} } />
                                                </div>
                                            </div>
                                            <div className="row_tab" id="display-like-people">
                                                <span className="simili-title"><strong>XXX</strong> personnes <strong>apprécient</strong></span>
                                            </div>
                                            <div className="row_tab" id="display-dislike-people">
                                                <span className="simili-title"><strong>XX</strong> personnes <strong>n'apprécient pas</strong></span>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </div>

					</main>

					<DiscoverAlso genre={genreMain} />
					
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