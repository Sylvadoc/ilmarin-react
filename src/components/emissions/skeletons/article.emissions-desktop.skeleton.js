// Composant article d'une catégorie Emission
// ===============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// outils
import moment from 'moment';
import 'moment/locale/fr';

class ArticleEmissionDesktop2Skeleton extends Component {

	render() {

		const { post } = this.props;

		// construction de l'image
		const postImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium ? <span><img itemProp="image" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} /></span> : <span><img itemProp="image" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} /></span>;

		// construction de la liste des tags
		const allTags = post._embedded['wp:term'][1];
		const postAllTags = allTags.map((tag, index) => {
			return (
				<Link to={"/tag/" + tag.id + '/' + tag.slug} title={"Rechercher toutes les émissions concernant " + tag.name} key={"tag-post-" + index}>{tag.name}</Link>
			)
		});

		// construction de la date
		moment.locale('fr');
		const newsDate = moment(post.date).format("LLL");

		return (
			<div className="clearfix" id="the_podcast">
				<div className="small-12 medium-12 large-6 columns">
					<article className="main_news" itemScope itemType="http://schema.org/Article">
						<p className="a-propos">Le <time itemProp="dateCreated" dateTime={post.date_gmt}>{newsDate}</time> par <em itemProp="creator"><span className="icon icon-user"></span> {post._embedded['author'][0].name}</em></p>
						<h1 itemProp="name" className="the-title" dangerouslySetInnerHTML={ {__html: post.title.rendered} } />
						<p className="pod-nb">{postAllTags}</p>
						<section itemProp="articleBody" className="body-article">
							<div className="complementary">
								{postImage}
							</div>
							<div dangerouslySetInnerHTML={ {__html: post.content.rendered} } />
							<p><strong>Animation :</strong> <a href="index_profil.html">Witch</a>, <a href="index_profil.html">Guigz</a>, <a href="index_profil.html">Gillossen</a>, <a href="index_profil.html">Akallabeth</a>, <a href="index_profil.html">Merwin Tonnel</a></p>
							<p><strong>Invités :</strong> <a href="page_auteur.html">Lionel Davoust</a>, <a href="page_auteur.html">Mélanie Fazi</a></p>
							<ul className="tabs">
								<li><a href="#sources">Les sources</a></li>
								<li><a href="#chrono" className="active">Le chrono</a></li>
							</ul>
							<div className="row_tab_all">
								<div className="row_tab" id="sources" dangerouslySetInnerHTML={ {__html: post.acf.les_sources_de_lemission} } />
								<div className="row_tab open" id="chrono" dangerouslySetInnerHTML={ {__html: post.acf.le_chrono_de_lemission} } />
							</div>
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
				<div className="small-12 medium-12 large-6 columns">
					<div className="row">
						{post.acf.widget_soundcloud_ou_podomatic &&
							<aside id="player" className="base-brick medium-12 columns">
								<h2><span className="icon icon-podcast"></span> &Eacute;couter maintenant</h2>
								<div className="inner_content" dangerouslySetInnerHTML={ {__html: post.acf.widget_soundcloud_ou_podomatic} } />
							</aside>
						}
						{post.acf.widget_de_la_video_youtube &&
							<aside id="youtube" className="base-brick medium-12 columns">
								<h2><span className="icon icon-youtube3"></span> Sur Youtube</h2>
								<div className="inner_content" dangerouslySetInnerHTML={ {__html: post.acf.widget_de_la_video_youtube} } />
							</aside>
						}
						<aside id="dl-episode" className="base-brick medium-12 columns">
							<div className="inner_content">
								<a href="/" className="btn btn_default"><span className="icon icon-cloud-download"></span> Télécharger l'épisode</a>
							</div>
						</aside>
					</div>
				</div>
			</div>
		)
	}
}

export default ArticleEmissionDesktop2Skeleton;