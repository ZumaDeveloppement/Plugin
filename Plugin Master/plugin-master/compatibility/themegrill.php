<?php
/**
 * Fichier de compatibilité pour les thèmes ThemeGrill.
 *
 * @package   olympus-google-fonts
 * @copyright Copyright (c) 2020, Fonts Plugin
 * 
 */

/**
 * Modifiez les sélecteurs d’éléments par défaut pour améliorer la compatibilité avec les thèmes ThemeGrill.
 *
 * @param array $elements The default elements.
 */
function ogf_themegrill_elements( $elements ) {
	$elements['ogf_body']['selectors'] = 'body, p';

	return $elements;
}
add_filter( 'ogf_elements', 'ogf_themegrill_elements' );
