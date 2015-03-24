var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (confirm('Submit form?')) {
    this.submit();
  }
});