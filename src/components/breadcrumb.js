// Composant Fil d'ariane
// =============================================

// generation de la page
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Breadcrumb extends Component {

    render() {

        // sur quelle type de page nous sommes
        const { page, item } = this.props;

        let breadcrumbContent;
        if (page === 'page-livre') {
            breadcrumbContent =
                <ol itemScope itemType="http://schema.org/BreadcrumbList" className="unstyled">
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <Link to="/bibliotheque/">Bibliothèque</Link>
                    </li>
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <span itemProp="name" dangerouslySetInnerHTML={ {__html: item.title.rendered} }></span>
                        <meta itemProp="position" content="1" />
                    </li>
                </ol>;
        } else if(page === "page-taxonomie-bib") {
            breadcrumbContent =
                <ol itemScope itemType="http://schema.org/BreadcrumbList" className="unstyled">
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <Link to="/bibliotheque/">Bibliothèque</Link>
                    </li>
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <span itemProp="name">{item.name}</span>
                        <meta itemProp="position" content="1" />
                    </li>
                </ol>;
        } else if(page === "page-auteur") {
            breadcrumbContent =
                <ol itemScope itemType="http://schema.org/BreadcrumbList" className="unstyled">
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <Link to="/bibliotheque/">Bibliothèque</Link>
                    </li>
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                        <span itemProp="name" dangerouslySetInnerHTML={ {__html: item.title.rendered} }></span>
                        <meta itemProp="position" content="1" />
                    </li>
                </ol>;
        } else {
            return null;
        }

        return(
            <div className="breadcrumb">
                <div className="row">
                    <div className="small-12 medium-12 large-12 columns">
                        {breadcrumbContent}
                    </div>
                </div>
            </div>
        )

    }
}

export default Breadcrumb;