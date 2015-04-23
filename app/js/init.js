/*
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
}); // end of jQuery name space
*/
//function that makes the todo modal work
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });