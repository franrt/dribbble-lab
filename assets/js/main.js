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

