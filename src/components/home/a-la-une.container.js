// Composant A LA UNE
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// outils
import moment from 'moment';
import 'moment/locale/fr';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerALaUne extends Component {

	constructor() {
		super();
		this.state = {
			catALaUne: [],
			postsALaUne: []
		}
	}

	componentDidMount() {

		// recuperation de la categorie A La Une
		const { categorie } = this.props;

		// appel du json de wordpress consacré à la catégorie
		let dataCatURL = REST_URL + "/categories";
		// seulement les pages dont le parent est "A LA UNE"
		fetch(dataCatURL + "/" + categorie)
			.then(res => res.json())
			.then(res => {
				this.setState({
					catALaUne: res
				})
			});

		// appel du json de wordpress consacré aux articles pour tel catégorie
		let dataPostsURL = REST_URL + "/posts";
		// seulement les pages dont le parent est "nos articles"
		fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1&per_page=9")
			.then(res => res.json())
			.then(res => {
				this.setState({
					postsALaUne: res
				})
			});

	}

	render() {

		if (this.state.postsALaUne.length > 0 && this.state.catALaUne) {

			// définition de toutes les variables nécessaires
/*			const posts = this.state.postsALaUne;
			const catName = this.state.catALaUne.name;
			const catSlug = this.state.catALaUne.slug;
			const catId = this.state.catALaUne.id;*/

			// construction de la liste de news A La Une
			const allArticles = this.state.postsALaUne.map((post, index) => {

				// background image
				const bgImage = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url : '';
				const bgStyle = {
					backgroundImage: 'url(' + bgImage + ')',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center'
				};

				// construction de la liste des tags
				const allTags = post._embedded['wp:term'][1];
				const postAllTags = allTags.map((tag, index) => {
					return (
						<Link to={"/actualites/tag/" + tag.id + '/' + tag.slug} title={"Rechercher tous les articles concernant " + tag.name} key={"tag-post-" + index}>{tag.name}</Link>
					)
				});

				// construction de la date
				moment.locale('fr');
				const newsDate = moment(post.date).format("L");

				return (
					<div className={"grid-une__item grid-une__item_0" + index} key={"div-grid-" + index} style={bgStyle}>
						<div className="entry-card">
							<div className="entry-card__wrapper">
								<div className="entry-card__date">
									{newsDate}
								</div>
								<div className="entry-card__data">
									<div className="entry-card__content">
										<span className="entry-card__cat">{postAllTags}</span>
										<h2 className="entry-card__title">
											<Link to={"/actualites/news/" + post.id + "/" + post.slug}>
												<span dangerouslySetInnerHTML={ {__html: post.title.rendered} } />
											</Link>
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			});

			return (
				<section id="news_general" className="da-grid is-loaded">
					<span className="simili-title">&Agrave; la <strong>Une</strong></span>

					<div className="grid-une">
						{allArticles}
					</div>

				</section>
			);

		} else {
			return (
				<section id="news_general" className="da-grid">
					<span className="simili-title">&Agrave; la <strong>Une</strong></span>
					<div className="grid-une">
						<div className="is-rendering">
							<div className="is-spinning">
								<svg xmlns="http://www.w3.org/2000/svg" width="100" height="73.73982">
									<path fill="currentColor" d=" M 62.330342596771956 0 C 62.330342596771956 0 71.17585147574775 5.79456987677172 73.92100940370575 14.94389073483233 C 73.92100940370575 14.94389073483233 70.75645234786528 12.199094477414148 67.05811458381075 10.369230305802025 C 66.82935142314757 7.014479324513135 62.330342596771956 0 62.330342596771956 0 Z  M 43.26674587484136 39.79954573256366 C 43.26674587484136 39.79954573256366 44.28367437837603 35.834840027404056 50.180578625177375 35.63172510435511 C 57.299688185015135 35.38621832799715 62.99131562231473 49.660683753381385 50.43465824228726 51.38868548610709 C 50.43465824228726 51.38868548610709 55.26430609020805 48.033934504818205 53.789851265347046 42.849319351917195 C 51.65472843249082 46.35655901417376 48.909570504532816 46.96651373804447 48.909570504532816 46.96651373804447 C 48.909570504532816 46.96651373804447 54.24737758667338 35.834840027404056 43.26674587484136 39.79954573256366 Z  M 42.80921955351503 6.709501962577781 C 36.861377376272685 7.166968005480812 4.834534883429282 31.717645641276782 22.37304386760543 64.35022336835962 C 22.37304386760543 64.35022336835962 13.985061309955967 58.20004988757129 13.781919623287076 48.64388922868891 C 4.326375649209502 54.540321544347044 4.6820261096538385 71.21221401190509 4.6820261096538385 71.21221401190509 C -5.434185872418961 57.48823272481417 -1.8758511626902856 11.029811271754001 42.80921955351503 6.709501962577781 Z " />
									<path fill="currentColor" d=" M 53.33232494402071 59.16560821545861 C 46.54690458120363 57.32567979090263 40.82660549443425 51.9986402099778 40.82660549443425 43.154296713852546 C 40.82660549443425 35.07239662256568 47.00443090252996 26.838007850311126 57.14504428840684 26.838007850311126 C 65.73616853272519 26.838007850311126 71.93839534462498 30.80271355547072 78.34376384319366 39.34207968966062 L 86.2742200795168 31.565156960309107 C 82.61400950890612 23.483256869022235 68.2781847740143 6.709501962577781 47.23197399300293 6.404524600642428 C 47.23197399300293 6.404524600642428 51.80723720626628 7.319456686448488 57.90758815728407 12.199094477414148 C 41.33903497431975 10.158795926066633 24.256222206184628 25.65012102557292 24.256222206184628 43.89020708820256 C 24.256222206184628 61.45690313567893 38.233346305156594 74.87987176653965 53.78985126534706 73.65203290738792 C 71.17585147574776 72.27963477867883 74.98857082013387 53.82850438158992 86.57923762706768 52.30361757191316 C 86.57923762706768 52.30361757191316 81.546448092478 56.26832327707275 79.8688515809481 65.41764413513337 C 89.47690432880113 52.15112889094548 100.00000971930682 51.38868548610709 100.00000971930682 51.38868548610709 C 75.90362346278654 37.35972683708083 71.3283602495232 64.04524600642428 53.332324944020726 59.16560821545861 L 53.33232494402071 59.16560821545861 Z  M 75.4460971414602 26.380541807408093 C 73.46348308237943 25.008143678699003 70.71832515442142 25.770587083537386 70.71832515442142 25.770587083537386 L 66.95654374047629 19.36606248289496 C 71.83682450129052 20.38285700758743 75.4460971414602 26.380541807408093 75.4460971414602 26.380541807408093 Z " />
								</svg>
							</div>
						</div>
					</div>
				</section>
			)
		}
	}
}

export default ContainerALaUne;