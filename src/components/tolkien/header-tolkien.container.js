// Composant Header Tolkien
// =============================================

import React, { Component } from 'react';

export class HeaderTolkien extends Component {

	render() {

		return (
			<section id="header_section" className="header_section tolkien_section">
				<div className="row">
					<div className="small-12 columns">
						<h1 className="global-title">J.R.R. Tolkien</h1>
						<p><span className="dropcaps">I</span>l est devenu l'un des écrivains les plus importants de notre temps. Élu auteur du livre du siècle en Grande-Bretagne, traduit dans des dizaines de langues, lu depuis plus de cinquante ans par des millions de lecteurs, Tolkien est devenu un phénomène culturel; et cela d'une manière d'autant plus étrange qu'il ne cesse dans ses livres de célébrer un monde oublié, un monde fait d'imaginaire et d'héroïsme chevaleresque, de nostalgie et de rêverie, de fantaisie et de cosmogonie. Cette aile d'Elbakin.net retrace et décrit les cadres et les structures, les personnages et les communautés ainsi que les grands moments de son &oelig;uvre. Mais comme il serait inconsidéré de plonger dans cette oeuvre sans connaitre l'auteur, ce site vous propose une biographie de Tolkien, à lire donc avant toute chose. <a className="more" href="/"><span className="icon icon-quill"></span> Lire sa biographie</a></p>
					</div>
				</div>
			</section>
		);
	}
}


export default HeaderTolkien;
