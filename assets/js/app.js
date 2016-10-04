
//dropdown menu

$(".fa-bars, .dropdownMenu").mouseenter(function(e){
  e.preventDefault();
  $(".dropdownMenu").addClass("showing");
});

$(".fa-bars, .dropdownMenu").mouseleave(function(e){
  e.preventDefault();
  $(".dropdownMenu").removeClass("showing");
});

//temporarily disabled contact form--need PHP to make functional

// $('#pageGuts-button--contact, .dropdownMenu-links-cats--contact').click(function(e){
//   e.preventDefault();
//   $('#pageGuts-contactform').css('display', 'block');
// });
//
// $('#pageGuts-button--send, #pageGuts-button--exit').click(function(e){
//   e.preventDefault();
//   $('#pageGuts-contactform').css('display', 'none');
// });
