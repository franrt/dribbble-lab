$(document).ready(function{
/* Acá va todo el jquery */
var token = "8ac5835e9a61008fbe7a74c0983fa98927c729702025a54520b53429f70f7afd", //token
	userid= d5acb727057a70db8f0712c984060f7b9ff3d91522490311b8c3103d14100273, // client id
	num_trab = 12; //cantidad de trabajos

$.ajax({
	url: 'https://api.dribbble.com/v1/jennyyu/simplebits',
	type: 'GET /users/:user,jennyyu ',
	dataType: 'jsonp',
	data: {access_token:token, count:num_trab},
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});

$('.dropdown-button').dropdown();
/*codigo para que los menu desplegable se ativen con el evento hover(no funka)

$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );*/

});