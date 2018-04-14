var $menutrigger = $( "[data-role=trigger]" );
var $modal = $( ".modal" );
var $document = $( document );
var $mobiletest = $( ".mobiletest" );


$document.ready( function() {
		

$( ".trigger" ).click( function(event) {
				event.preventDefault();
				$( $modal )
					.fadeIn()
					.removeClass( "hidden" );
				//console.log( "clicked" );
			} );

			

$document.on( 'click', function( event ) {
				if ( $( event.target ).is( '.close' ) || $( event.target ).is( $modal ) ) {
					event.preventDefault();
					$( $modal )
						.fadeOut()
						.addClass( "hidden" );
				}
			} );

			

$( $menutrigger ).click( function() {
	if (ismobile = true) {
				$( ".topbar" )
					.toggleClass( 'opened' );
				$( "nav ul" )
					.slideToggle();
				return false;
		} else {
			$( ".topbar" ).removeClass('opened');
		//console.log("other");
	}
	
});
			
			
			
			
			
			
			
			$( ".triggerdrop" ).click( function() {
				$( "div.request" )
					.slideDown()
					.removeClass( "hide" );
					return false;
			} );

			

			


$document.on( "scroll", function() {
		if ($mobiletest.is(':visible')) {
		if ( $document.scrollTop() > 100 ) {
			$("#linktotop").fadeIn("slow");
		} else {
			$("#linktotop").fadeOut("slow");
		}
} else {
	$mobiletest.is(':hidden')
}
	});
	
	});





	
var ismobile;
function sizing() {
	if ($mobiletest.is(':visible')) {
		ismobile = false;
		//console.log(ismobile);
		} else {
		$mobiletest.is(':hidden')
		ismobile = true;
		//console.log("hidden");
	}
  //console.log("change");
}

$document.ready(sizing);
$(window).resize(sizing);

	

