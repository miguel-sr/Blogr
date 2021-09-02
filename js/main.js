// Product Menu - JQuery
$('#productSpan').click(function(){
  $('#productArea').toggleClass('active')
  $('#companyArea').removeClass('active')
  $('#connectArea').removeClass('active')
});

// Company Menu
$('#companySpan').click(function(){
  $('#productArea').removeClass('active')
  $('#companyArea').toggleClass('active')
  $('#connectArea').removeClass('active')
});

// Connect Menu
$('#connectSpan').click(function(){
  $('#productArea').removeClass('active')
  $('#companyArea').removeClass('active')
  $('#connectArea').toggleClass('active')
});

// Hamburguer 
$('.menu-btn').click(function(){
  $('#nav-mobile').toggleClass('active')
});

// Product Menu - JQuery
$('#productSpan__mobile').click(function(){
  $('#productArea__mobile').toggleClass('active')
  $('#companyArea__mobile').removeClass('active')
  $('#connectArea__mobile').removeClass('active')
});

// Company Menu
$('#companySpan__mobile').click(function(){
  $('#productArea__mobile').removeClass('active')
  $('#companyArea__mobile').toggleClass('active')
  $('#connectArea__mobile').removeClass('active')
});

// Connect Menu
$('#connectSpan__mobile').click(function(){
  $('#productArea__mobile').removeClass('active')
  $('#companyArea__mobile').removeClass('active')
  $('#connectArea__mobile').toggleClass('active')
});
