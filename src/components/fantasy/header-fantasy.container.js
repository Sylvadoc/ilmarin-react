// Composant Header fantasy
// =============================================

import React, { Component } from 'react';

export class HeaderFantasy extends Component {

	render() {

		return (
			<section id="header_section" className="header_section fantasy_section">
				<div className="row">
					<div className="small-12 columns">
						<h1>La fantasy</h1>
						<div className="flipping-quote quote-01">
							<span className="author"><span></span></span>
							<blockquote className="quote">
								<q>La Fantasy est une activité humaine naturelle. Elle n'anéantit sûrement pas la raison, ni même ne l'outrage, et n'émousse pas non plus l'appétit de vérité scientifique, ni n’en trouble la perception. Bien au contraire. Plus la raison est claire et pénétrante, meilleure sera la Fantasy qu'elle engendre.</q>
								<span>J.R.R. Tolkien : Du conte de fées, 1947</span>
							</blockquote>
							<a className="more" href="/">Découvrir la fantasy</a>
						</div>
						<div className="flipping-quote quote-02">
							<span className="author"><span></span></span>
							<blockquote className="quote">
								<q>Je n'ai jamais cru à ces catégories qui cloisonnent la littérature, et en particulier à ces catégories du fantastique, de l'étrange, du merveilleux, du lugubre, du singulier&hellip; Il y a des quantités de dénominations qui ne correspondent pas à des démarcations réelles. Je crois qu'on tente d'établir des démarcations imaginaires dans un ensemble qui est homogène et où il y a des éclairages différents, des reflets différents.</q>
								<span>Julien Gracq : Revue Jules Verne n°10, 2001</span>
							</blockquote>
							<a className="more" href="/">Découvrir ses principaux courants</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}


export default HeaderFantasy;
