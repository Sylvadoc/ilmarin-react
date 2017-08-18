// Composant footer
// =============================================

// generation de la page
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// tierces
import { random } from 'lodash';

export class Footer extends Component {

    constructor() {
        super();
        this.state = {
            pages: [],
            weather: ['sunny','cloudy','rainy','snowy','rainbow','starry','stormy'],
            cities: ['Minas Tirith','Fendeval','Hobbiteville','Minas Morgul','Camorr','Ankh-Morpork','Tar Valon','Port-Réal','Castelcerf','Poudlard','Wielstadt','Edoras','Luthadel','Lorgol','Dros Delnoch','Ymrrir','Sunnydale','Konoha','Benden','Riva']
        }
    }

    componentDidMount() {
        // appel du json de wordpress consacré aux pages
        let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/pages";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pages: res
                })
            });
    }

	render() {

        // meteo
        const weather = this.state.weather[random(this.state.weather.length)];
        const cities = this.state.cities[random(this.state.cities.length)];

        // construction de la liste de pages
        let pagesList = this.state.pages.map((page, index) => {
            return (
                <li key={"page-" +index}>
                    <Link to={"/" + page.id + "/" + page.slug}>{page.title.rendered}</Link>
                </li>
            )
        });

		return (
			<footer role="contentinfo" data-weather={weather} id="footer">
				<div className="row">
					<div className="small-12 medium-3 large-2 columns">
                    <span id="weather_city">
                        <em>la météo à</em>
                        <strong id="weather_city_text">{cities}</strong>
                    </span>
						<div id="content_icon">
							<div id="weather" className={weather}></div>
						</div>
					</div>
					<div className="small-6 medium-3 large-2 columns">
						<h2>Notre réseau</h2>
						<ul className="basic_list">
							<li><a href="http://association.elbakin.net" target="_blank"  rel="noopener noreferrer" title="Site de l'association Elbakin.net (nouvelle fenêtre)">L'Association Elbakin.net</a></li>
							<li><a href="http://archibald.elbakin.net" target="_blank"  rel="noopener noreferrer" title="Feuilleton numérique des Fabuleuses Aventures d'Archibald Bellérophon (nouvelle fenêtre)">Archibald Bellérophon</a></li>
						</ul>
					</div>
					<div className="small-6 medium-6 large-2 columns">
						<h2>Le site</h2>
						<ul className="basic_list">
							<li><Link to="/">Accueil</Link></li>
                            {pagesList}
						</ul>
					</div>
					<div className="small-12 medium-6 large-3 columns">
						<h2>Contactez-nous</h2>
						<ul className="basic_list">
							<li><a href="/">Une coquille, une erreur ?</a></li>
							<li><a href="/">L'équipe du site</a></li>
							<li><a href="/">&Agrave; propos de la ligne éditoriale</a></li>
							<li><a href="/">&Agrave; propos de la publicité/partenariats</a></li>
							<li><a href="/">Pour participer à la vie du site</a></li>
						</ul>
					</div>
					<div className="small-12 medium-6 large-3 columns">
						<h2>Restons en contact !</h2>
						<form className="newsletterform" method="get" action="/">
							<label for="email">Abonnez-vous à notre newletter :</label>
							<input type="email" id="email" name="email" placeholder="Votre e-mail" />
							<button className="btn-submit">ok</button>
						</form>
						<p>Et rejoignez-nous sur les réseaux sociaux :</p>
						<ul className="social_footer">
							<li><a href="http://twitter.com/elbakin" target="_blank" rel="noopener noreferrer"><span className="icon icon-twitter" aria-hidden="true"></span><span className="text">Twitter</span></a></li>
							<li><a href="https://www.facebook.com/Elbakin.net" target="_blank" rel="noopener noreferrer"><span className="icon icon-facebook" aria-hidden="true"></span><span className="text">Facebook</span></a></li>
							<li><a href="https://plus.google.com/116698928900965945603" target="_blank" rel="noopener noreferrer"><span className="icon icon-google-plus" aria-hidden="true"></span><span className="text">Google Plus</span></a></li>
						</ul>
					</div>
				</div>
			</footer>
		)
	}
}
export default Footer;