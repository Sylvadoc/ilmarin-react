// Composant Liste des derniers articles Tolkien
// =============================================

import React, { Component } from 'react';

export class ArticlesListTolkien extends Component {

    render() {

        return (
            <div className="small-12 medium-6 large-3 columns">
                <h2>Nos articles</h2>
                <article className="article_focus">
                    <div className="inner_content">
                        <a href="/">
                            <img src="img/illustrations/cerisy.jpg" alt="Château de Cerisy" />
                            <p><span>Colloque international sur Tolkien, Cerisy 2012</span></p>
                        </a>
                    </div>
                </article>
                <ul className="basic_list">
                    <li><a href="/">Colloque international sur Tolkien, Cerisy 2012</a></li>
                    <li><a href="/">Colloque international sur Tolkien, Rambures 2008</a></li>
                    <li><a href="/">Hommage à JRR Tolkien, conférence à la BNF, janvier 2004</a></li>
                </ul>
            </div>
        );
    }
}

export default ArticlesListTolkien;
