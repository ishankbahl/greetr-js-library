var g = G$( 'Ishank' , 'Bahl' ) ;
g.greet().setlang( 'es' ).greet( true ) ;
$('#login').click( function () {
    var loginGrtrt = G$('John','Doe');
    $('#logindiv').hide();
    loginGrtrt.setlang( $( '#lang' ).val() ).HTMLGreeting( '#greeting' , true ).log() ;
}
)