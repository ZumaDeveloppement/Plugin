/* global ajaxurl */
jQuery( document ).ready( function() {

	const menuGetHelpLink = jQuery('a[href="https://docs.fontsplugin.com"]');
	menuGetHelpLink.attr('target', '_blank');

	// Accrochez-vous à la classe « avis-rejet-bienvenue » que nous avons ajoutée à l’avis, 
	// donc N’écoutez que VOS avis rejetés
	jQuery( document ).on(
		'click',
		'.ogf-send-guide-button',
		function() {
			// Make an AJAX call
			// Puisque WP 2.8 ajaxurl est toujours défini dans l’en-tête admin et pointe vers admin-ajax.php
			jQuery.ajax(
				ajaxurl,
				{
					type: 'POST',
					data: {
						action: 'ogf_dismiss_guide',
					},
					complete: function(){
						location.reload();
				 	}
				}
			);
		}
	);

	// Accrochez-vous à la classe « avis-rejet-bienvenue » que nous avons ajoutée à l’avis, donc
	// N’écoutez que VOS avis rejetés
	jQuery( document ).on(
		'click',
		'.notice-dismiss-dc .notice-dismiss',
		function() {
			// Lisez les informations « data-notice » pour savoir quel avis
			// est licencié et l’envoie via AJAX
			const type = jQuery( this ).closest( '.notice-dismiss-dc' ).data( 'notice' );
			// Make an AJAX call
			// Puisque WP 2.8 ajaxurl est toujours défini dans l’en-tête admin et pointe vers admin-ajax.php
			jQuery.ajax(
				ajaxurl,
				{
					type: 'POST',
					data: {
						action: 'ogf_dismiss_notice',
						type: type,
					},
				}
			);
		}
	);
} );
