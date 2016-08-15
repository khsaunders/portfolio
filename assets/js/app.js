console.log("testing, testing");

// TEMPORARILY disabled dropdown menu

// $(".nameLinks, .dropdownWrapper").mouseenter(function(e){
//   e.preventDefault();
//   $(".dropdownWrapper").css("display", "block");
// });
//
// $(".nameLinks , .dropdownWrapper").mouseleave(function(e){
//   e.preventDefault();
//   $(".dropdownWrapper").css("display", "none");
// });

$('#pageGuts-button--contact, .dropdownMenu-links-cats--contact').click(function(e){
  e.preventDefault();
  $('#pageGuts-contactform').css('display', 'block');
});

$('#pageGuts-button--send, #pageGuts-button--exit').click(function(e){
  e.preventDefault();
  $('#pageGuts-contactform').css('display', 'none');
});

// TEMPORARILY disabled resume modal
// //open resume modal
// $('#pageGuts-button--resume, .dropdownMenu-links-cats--resume').click(function(e){
//   e.preventDefault();
//   $('#pageGuts-resumeModal').css('display', 'block');
// });
//
// //close resume modal
// $('#resumeExitButton, #pageGuts-button--contact,.dropdownMenu-links-cats--contact').click(function(e){
//   e.preventDefault();
//   $('#pageGuts-resumeModal').css('display', 'none');
// });
