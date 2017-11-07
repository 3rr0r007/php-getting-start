var form = $('#email-form');

form.submit(function(event) {
  event.preventDefault();
  var data = {
    name: $("#name").val(),
    email: $("#email").val(),
    msg: $("#msg").val()
  };
  var form_status = $('<div class="form_status"></div>');
  $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: data,
      beforeSend: function() {
        form.append(form_status.html('<p>Sto mandando l'email...</p>').fadeIn());
      }
    }).done(function(data) {
      form_status.html('<p>Thank you for contacting me. I will reach you very shortly.</p>').delay(3000).fadeOut();
      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#msg').val('');
    })
    .fail(function(data) {
      form_status.html('<p>' E' successo qualche errore. Riprova.</p>').delay(3000).fadeOut();
    });
});