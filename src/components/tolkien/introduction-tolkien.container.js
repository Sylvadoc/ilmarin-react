// Composant Liste des articles introductifs à l'univers de Tolkien
// =============================================

import React, { Component } from 'react';

export class IntroductionTolkien extends Component {

    render() {

        return (
            <aside id="intro_tolkien">
                <h2>Une introduction à l'&oelig;uvre</h2>
                <ul className="basic_list">
                    <li><a href="/">Par où commencer ?</a></li>
                    <li><a href="/">L'intérêt des nouvelles traductions</a></li>
                    <li><a href="/">Oublier les films. Des différences et contre-sens entre les adaptations et l'&oelig;uvre originale</a></li>
                </ul>
            </aside>
        );
    }
}

export default IntroductionTolkien;
