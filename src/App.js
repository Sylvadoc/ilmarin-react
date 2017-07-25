import React, { Component } from 'react';
class App extends Component {
	constructor() {
		super();
		this.state = {
			livres: []
		}
	}
	componentDidMount() {
		let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre";
		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livres: res
				})
			})
	}
	render() {
		let livres = this.state.livres.map((livre, index) => {
			return <li key={index}>
				<h2>{livre.title.rendered}</h2>
				<ul>
					<li>Extrait : <div dangerouslySetInnerHTML={ {__html: livre.excerpt.rendered} } /></li>
					<li>Format : {livre.acf.format}</li>
					<li>&Eacute;diteur : {livre.acf.editeur}</li>
					<li>Collection : {livre.acf.collection}</li>
					<li>Illustration : {livre.acf.illustration}</li>
					<li>Traduction : {livre.acf.traduction}</li>
					<li>ISBN : {livre.acf.isbn_13}</li>
					<li>Note : {livre.acf.note} / 10</li>
				</ul>
			</li>
		});
		return (
			<div>
				<h1>react from a wordpress backoffice</h1>
				<ul>
					{livres}
				</ul>
			</div>
		)
	}
}
export default App;