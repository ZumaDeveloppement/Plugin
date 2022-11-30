<?php
/**
 * Fichier de compatibilité pour les thèmes ColorLib.
 *
 * @package   olympus-google-fonts
 * @copyright Copyright (c) 2020, Fonts Plugin
 * 
 */

/**
 * Modifiez les sélecteurs d’éléments par défaut pour améliorer la compatibilité avec les thèmes ColorLib.
 *
 * @param array $elements The default elements.
 */
function ogf_colorlib_elements( $elements ) {
	$elements['ogf_inputs']['selectors'] = 'button, .button, input, select, textarea, .wp-block-button, .wp-block-button__link, .btn, .header-button-one, .header-button-two, .latest-news-button, .readmore, .submit, #submit, .more-link, .blog-post-button';

	return $elements;
}
add_filter( 'ogf_elements', 'ogf_colorlib_elements' );
