// $(document).ready(function(){
//   console.log($('img').width());
//   console.log($('img').height());
// });

// $(window).load(function(){
//   console.log($('img').width());
//   console.log($('img').height());
// });

$(document).ready(function(){
  $('img').load(function(){
    console.log($(this).width());
    console.log($(this).height());
  });
});