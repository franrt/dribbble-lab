$(document).ready(function() {

    /***************************************** Codigo Nanyn y Pez *************************************/
    /* Acá va todo el jquery */
    var token = "8ac5835e9a61008fbe7a74c0983fa98927c729702025a54520b53429f70f7afd", //token
        userid = "d5acb727057a70db8f0712c984060f7b9ff3d91522490311b8c3103d14100273", // client id
        num_trab = 12; //cantidad de trabajos


    $(function() {
        $.getJSON('https://api.dribbble.com/v1/users/jennyyu/shots?access_token=' + token + '&callback=?', function(resp) {
            if (resp.data.length > 0) {
                console.log('data', resp.data);
                $.each(resp.data.reverse(), function(i, val) {
                    // Obtenemos la descripcion
                    //console.log(val.description);
                    // Eliminar los tag con una expresion regular
                    //val.description.match(/<p>(.*?)<\/p>/g);

                    ///<p>(.*?)<\/p>/g.exec(val.description);
                    //console.log('ads', /<p>(.*?)<\/p>/g.exec(val.description)[1]);
                    var a = /<p>(.*?)<\/p>/g.exec(val.description)[1];
                    console.log('a', a);

                    $('#dribbble').prepend(
                        '<div class="col s4 m4">' +
                        '<a target="_blank" href="' + val.html_url + '">' +
                        '<li class="box">' +
                        '<img id="data-' + val.id + '" class="responsive-img img-tooltip" src="' + val.images.normal + '" />' +
                        '<p><i class="fa fa-eye" aria-hidden="true"></i>' + val.views_count + " " +
                        "<i class='fa fa-comment' aria-hidden='true'></i>" + val.comments_count + " " +
                        "<i class='fa fa-heart' aria-hidden='true'></i>" + val.likes_count +
                        '</p>' +
                        '</li>' +
                        '</a>' +
                        '</div>'
                    );
                    $('#data-' + val.id).tooltip({ delay: 50, html: true, tooltip: a });
                });
                /***************************************** Codigo Nat para el tooltip *************************************/

            } else {
                $('#dribbble').append('<li>No shots.</li>');
            }
        });
    });




    /***************************************** Codigo Martina *************************************/
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






});