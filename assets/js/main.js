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
    '<div class="col s4 m4">'+
      '<a target="_blank" href="'+val.html_url+'">'+
        '<li class="box">'+
        '<img class="responsive-img" src="'+val.images.normal+'" />'+
          '<p><i class="fa fa-eye" aria-hidden="true"></i>' + val.views_count +" "+
            "<i class='fa fa-comment' aria-hidden='true'></i>"+ val.comments_count+" "+
            "<i class='fa fa-heart' aria-hidden='true'></i>"+val.likes_count+
          '</p>'+
        '</li>'+
      '</a>'+
    '</div>'
    );

