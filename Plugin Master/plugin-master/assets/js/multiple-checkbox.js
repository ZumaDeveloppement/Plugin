wp.customize.controlConstructor[ 'ogf-multiple-checkbox' ] = wp.customize.Control.extend( {

	// Lorsque nous avons terminé le chargement, poursuivez le traitement.
	ready: function() {

		const control = this;

		// Save the value
		control.container.on( 'change', 'input', function() {
			const value = [];
			let i = 0;

			// Générez la valeur en tant qu’objet à l’aide des sous-valeurs des cases à cocher individuelles.
			jQuery.each( control.params.choices, function( key ) {
				if ( control.container.find( 'input[value="' + key + '"]' ).is( ':checked' ) ) {
					value[ i ] = key;
					i++;
				}
			} );

			// Mettez à jour la valeur dans le personnalisateur.
			control.setting.set( value );
		} );
	},

} );
