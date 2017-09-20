// Squelette de la page post
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../action-creators';

// outils
import moment from 'moment';
import 'moment/locale/fr';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'
import Breadcrumb from '../../breadcrumb'
import Chrono from '../../actualites/chrono-list.container'

class PostSkeleton extends Component {

	componentDidMount() {
		// fermeture préventive de la navigation
		this.props.closeBurger();
	}

	render() {

		const { burgerIsDisplayed, post } = this.props;
		const page = "page-news";

		// construction de l'image
		const postImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium ? <span><img itemProp="image" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} /></span> : <span><img itemProp="image" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} /></span>;

		// construction de la liste des tags
		const allTags = post._embedded['wp:term'][1];
		const postAllTags = allTags.map((tag, index) => {
			return (
				<Link to={"/tag/" + tag.id + '/' + tag.slug} title={"Rechercher tous les articles concernant " + tag.name} key={"tag-post-" + index}>{tag.name}</Link>
			)
		});

		// construction de la date
		moment.locale('fr');
		const newsDate = moment(post.date).format("LLL");

		return (
			<div className={"format-" + post.format}>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">
						<Breadcrumb page={page} item={post} />

						<div className="row">
							<div className="small-12 medium-8 large-8 columns">
								<article className="main_news" itemScope itemType="http://schema.org/Article">
									<p className="a-propos">Le <time itemProp="dateCreated" dateTime={post.date_gmt}>{newsDate}</time> par <em itemProp="creator"><span className="icon icon-user"></span> {post._embedded['author'][0].name}</em></p>
									<h1 itemProp="name" className="the-title" dangerouslySetInnerHTML={ {__html: post.title.rendered} } />
									<p className="tags">{postAllTags}</p>
									<section itemProp="articleBody" className="body-article">
										<div className="complementary">
											{postImage}
										</div>
										<div dangerouslySetInnerHTML={ {__html: post.content.rendered} } />
										<div className="footer_article">
											<div className="social_tools">
												<a href="/" rel="noreferrer noopener">facebook</a>
												<a href="/" rel="noreferrer noopener">twitter</a>
												<a href="/" rel="noreferrer noopener">google +</a>
											</div>
											<div className="other-tools">
												{post.acf.forum && <a href={post.acf.forum} className="btn_simple btn_comment"><span className="icon icon-bubbles"></span> Commenter sur le forum</a>}
												{post.acf.source && <a href={post.acf.source} target="_blank" rel="noreferrer noopener nofollow" className="btn_simple">Source</a>}
											</div>
										</div>
									</section>
								</article>
							</div>
							<div className="small-12 medium-4 large-4 sidebar columns">
								<Chrono categorie={208} />
							</div>
						</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(PostSkeleton);