// Composant Liste des derniers essais Tolkien
// =============================================

import React, { Component } from 'react';

export class EssaisListTolkien extends Component {

    render() {

        return (
            <div className="small-12 medium-6 large-3 columns">
                <h2>Nos essais</h2>
                <article className="article_focus">
                    <div className="inner_content">
                        <a href="/">
                            <img src="img/illustrations/fingolfin.jpg" alt="Fingolfin" />
                            <p><span>Du caractère sagitté des oreilles elfiques&hellip; (ou pas)</span></p>
                        </a>
                    </div>
                </article>
                <ul className="basic_list">
                    <li><a href="/">Palantiri, anticipation en Terre du Milieu</a></li>
                    <li><a href="/">Concordia civium murus urbium</a></li>
                    <li><a href="/">De profundis clamavi</a></li>
                </ul>
            </div>
        );
    }
}

export default EssaisListTolkien;
