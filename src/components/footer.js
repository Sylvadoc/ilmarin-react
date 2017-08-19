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
            pagesContact: [],
            pagesLeSite: [],
            weather: ['sunny','cloudy','rainy','snowy','rainbow','starry','stormy'],
            cities: ['Minas Tirith','Fendeval','Hobbiteville','Minas Morgul','Camorr','Ankh-Morpork','Tar Valon','Port-Réal','Castelcerf','Poudlard','Wielstadt','Edoras','Luthadel','Lorgol','Dros Delnoch','Ymrrir','Sunnydale','Konoha','Benden','Riva']
        }
    }

    componentDidMount() {
        // appel du json de wordpress consacré aux pages
        let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/pages";
        // seulement les pages dont le parent est Contactez-nous
        fetch(dataURL + "?parent=494")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pagesContact: res
                })
            });
        // seulement les pages dont le parent est Le Site
        fetch(dataURL + "?parent=492")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pagesLeSite: res
                })
            });
    }

	render() {

        // meteo
        const weather = this.state.weather[random(this.state.weather.length)];
        const cities = this.state.cities[random(this.state.cities.length)];

        // construction de la liste des pages contactez-nous
        let pagesContactList = this.state.pagesContact.map((page, index) => {
            return (
                <li key={"page-" +index}>
                    <Link to={"/" + page.id + "/" + page.slug}><span dangerouslySetInnerHTML={ {__html: page.title.rendered} }></span></Link>
                </li>
            )
        });

        // construction de la liste des pages Le Site
        let pagesSiteList = this.state.pagesLeSite.map((page, index) => {
            return (
                <li key={"page-" +index}>
                    <Link to={"/" + page.id + "/" + page.slug}><span dangerouslySetInnerHTML={ {__html: page.title.rendered} }></span></Link>
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
							<div id="weather" className={weather}>&nbsp;</div>
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
                        <h2>Le Site</h2>
                        <ul className="basic_list">
                            {pagesSiteList}
                        </ul>
                    </div>
                    <div className="small-6 medium-6 large-3 columns">
                        <h2>Contactez-nous</h2>
                        <ul className="basic_list">
                            {pagesContactList}
                        </ul>
                    </div>
					<div className="small-12 medium-6 large-3 columns">
						<h2>Restons en contact !</h2>
						<form className="newsletterform" method="get" action="/">
							<label htmlFor="email">Abonnez-vous à notre newletter :</label>
							<input type="email" id="email" name="email" placeholder="Votre e-mail" />
							<button className="btn-submit">ok</button>
						</form>
						<p>Et rejoignez-nous sur les réseaux sociaux :</p>
						<ul className="social_footer">
							<li><a href="https://twitter.com/elbakin" target="_blank" rel="noopener noreferrer"><span className="icon icon-twitter" aria-hidden="true"></span><span className="text">Twitter</span></a></li>
							<li><a href="https://www.facebook.com/Elbakin.net" target="_blank" rel="noopener noreferrer"><span className="icon icon-facebook" aria-hidden="true"></span><span className="text">Facebook</span></a></li>
							<li><a href="https://plus.google.com/+ElbakinNetFantasy" target="_blank" rel="noopener noreferrer"><span className="icon icon-google-plus" aria-hidden="true"></span><span className="text">Google Plus</span></a></li>
						</ul>
					</div>
				</div>
			</footer>
		)
	}
}
export default Footer;