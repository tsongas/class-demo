// $('button').click(function() {
//   alert('bar');
// });

// $('body').click(function() {
//   alert('bar');
// });

// $('body').on('click', function(){
//   alert('bar');
// });

$('body').on('click', 'button', function(){
  alert('bar');
});