console.log("testing, testing");

//dropdown menu

$(".fa-bars, .dropdownMenu").mouseenter(function(e){
  e.preventDefault();
  $(".dropdownMenu").addClass("showing");
  console.log('hoveringgg');
});

$(".fa-bars, .dropdownMenu").mouseleave(function(e){
  e.preventDefault();
  $(".dropdownMenu").removeClass("showing");
});

//styling events for

$('#pageGuts-button--contact, .dropdownMenu-links-cats--contact').click(function(e){
  e.preventDefault();
  $('#pageGuts-contactform').css('display', 'block');
});

$('#pageGuts-button--send, #pageGuts-button--exit').click(function(e){
  e.preventDefault();
  $('#pageGuts-contactform').css('display', 'none');
});
