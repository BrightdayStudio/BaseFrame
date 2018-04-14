$( document )
	.ready( function() {
		var $menutrigger = $( "[data-role=trigger]" );
		var $modal = $( ".modal" );

		

		$( ".trigger" )
			.click( function(event) {
				event.preventDefault();
				$( $modal )
					.fadeIn()
					.removeClass( "hidden" );
				//console.log( "clicked" );
			} );

			

		$( document )
			.on( 'click', function( event ) {
				if ( $( event.target )
					.is( '.close' ) || $( event.target )
					.is( $modal ) ) {
					event.preventDefault();
					$( $modal )
						.fadeOut()
						.addClass( "hidden" );
				}
			} );

			

		$( $menutrigger )
			.click( function() {
				$( this )
					.toggleClass( 'opened' );
				$( "menu ul" )
					.slideToggle();
				return false;

			} );

	} );

	

	

	

		$( ".triggerdrop" )
			.click( function() {
				$( "div.request" )
					.slideDown()
					.removeClass( "hide" );
					return false;
			} );

			

			

			

				$( ".popuprequest" )
			.click( function() {
				$( ".request" )
					.fadeIn()
					.removeClass( "hidden" );
			} );

			

			

			

	

$( document )
	.on( "scroll", function() {
		if ($('.mobiletest').is(':visible')) {
		if ( $( document )
			.scrollTop() > 100 ) {
				$("#totop").css("display", "block");
			$( ".topbar" )
				.removeClass( "large" )
				.addClass( "small" );
		} else {
			$( ".topbar" )
				.removeClass( "small" )
				.addClass( "large" );
		}
} else {
}
	} );

	

	

	

$(".videopopup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 640, "height": 360});
    var $title = $("<h2>").text($this.data("title"));
    $("#video-view .content").html($title).append($iframe).prepend('<a href="#0" class="close">x</a>');
	$("#video-view").fadeIn();
    $iframe.wrap("<div class='class-video'>");
});









$(document).on( 'click', function( event ) {
				if ( $( event.target ).is( '.close' ) || $( event.target ).is( "#video-view") ) {
					event.preventDefault();
					$("#video-view")
						.fadeOut()
						.addClass( "hidden" );
						$("#video-view .content").html("").append("");
				}
			} );

			

			

			

			

var $accelements = $( ".accordion li" );		
$accelements.hover(function() {
    var $this = $(this);
	$this.find(".expand").slideToggle();
  }, function() {
	  var $this = $(this);
    $this.find(".expand").slideToggle();
});



