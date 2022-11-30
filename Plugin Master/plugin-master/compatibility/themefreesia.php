<?php
/**
 * Fichier de compatibilité pour les thèmes Theme Freesia.
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
function ogf_themefreesia_elements( $elements ) {
	$elements['ogf_post_page_h2']['selectors'] = '.entry-content h2,';
	$elements['ogf_post_page_h3']['selectors'] = '.entry-content h3,';
	$elements['ogf_post_page_h4']['selectors'] = '.entry-content h4,';
	$elements['ogf_post_page_h5']['selectors'] = '.entry-content h5,';
	$elements['ogf_post_page_h6']['selectors'] = '.entry-content h6,';

	return $elements;
}
add_filter( 'ogf_elements', 'ogf_themefreesia_elements' );
