// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  // console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });
  
  $("input").change(function(){
    // alert("hello");
    $("form").submit(); 
  });
  
  // $("form").select(function(){
  //   $("input").click();
  // });
  
  $('form').submit(function(event) {
    var formData = new FormData(this);
    var request = new XMLHttpRequest();
    request.open("POST", "/upload", true);
    
    request.onload = function(innerEvent){
      if(request.status === 200){
        document.getElementById("display").innerHTML = request.responseText[0] + "   " + 
          request.responseText.slice(1, request.responseText.length-1) + 
          "   " + request.responseText[request.responseText.length-1];
      } else {
        alert("failed"); 
      }
    }
    
    request.send(formData);
    event.preventDefault();
  });

});
