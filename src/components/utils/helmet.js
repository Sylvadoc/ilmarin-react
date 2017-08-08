// Module utilitaire pour les balises du head (générées via react-helmet)
// ======================================================================

const DOMAIN_URL = 'http://www.elbakin.net';

//
// Détermine le chemin vers le css de page à charger par helmet
// Paramètres :
// - assets: chemin vers les assets,
// - pageName: nom de la page dont on doit charger la css
//
export function getPageCss(pageName) {
	return ({
		'rel': 'stylesheet',
		'href': '/css/' + pageName + '.min.css',
		'media': 'all',
		'type': 'text/css'
	});
}