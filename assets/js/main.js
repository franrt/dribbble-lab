/* Acá va todo el jquery */
var token = "8ac5835e9a61008fbe7a74c0983fa98927c729702025a54520b53429f70f7afd", //token
	userid= "d5acb727057a70db8f0712c984060f7b9ff3d91522490311b8c3103d14100273", // client id
	num_trab = 12; //cantidad de trabajos


$(function() {
  $.getJSON('https://api.dribbble.com/v1/users/jennyyu/shots?access_token='+ token +'&callback=?', function(resp) {
    if (resp.data.length > 0) {	
    	console.log(resp.data);						
      $.each(resp.data.reverse(), function(i, val) {
        $('#dribbble').prepend(
          '<li class="box"><img src="'+val.images.normal+'" /><h2>'+val.title+'</h2><p><a href="'+val.html_url+'">original post &rarr;</a></p></li>'
        );
      });
    }
    else {
      $('#dribbble').append('<li>No shots.</li>');
    }
  });		   							    
});



/*$.ajax({
	url: 'https://api.dribbble.com/v1/jennyyu/simplebits',
	type: 'GET /users/:jennyyu',
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
});*/
