$(document).ready(function() {
    		console.log( "ready!" );
				
				$("a.state-change").click( function(e) {
				console.log("click");
				$( ".topbar ul" ).toggleClass( 'change' );
				$( "nav ul" ).slideToggle();
				e.preventDefault();
	});
	
})();




