
//dropdown menu

$(".fa-bars, .dropdownMenu").mouseenter(function(e){
  e.preventDefault();
  $(".dropdownMenu").addClass("showing");
});

$(".fa-bars, .dropdownMenu").mouseleave(function(e){
  e.preventDefault();
  $(".dropdownMenu").removeClass("showing");
});

//individual project page wireframe hovers

$('.wireFrameMain').mouseenter(function(e){
  e.preventDefault();
  $('.projectPageDesc').addClass('showing');
});

$('.wireFrameMain').mouseleave(function(e){
  e.preventDefault();
  $('.projectPageDesc').removeClass('showing');
});

//Ugly wet code :(

//title color change on picture hover -- Pearl

$('#pearlLink').mouseover(function(e){
  e.preventDefault();
  $('#projectPearl').css('color', '#E2492F');
});

$('#pearlLink').mouseout(function(e){
  e.preventDefault();
  $('#projectPearl').css('color', 'white');
});

//title color change on picture hover -- do_it

$('#doItLink').mouseover(function(e){
  e.preventDefault();
  $('#projectDoIt').css('color', '#E2492F');
});

$('#doItLink').mouseout(function(e){
  e.preventDefault();
  $('#projectDoIt').css('color', 'white');
});
