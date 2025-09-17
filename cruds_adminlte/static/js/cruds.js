$(function () {
  $('select').select2();
  // Verificar si iCheck está disponible antes de usarlo
  if ($.fn.iCheck) {
      $('input').iCheck({
          checkboxClass: 'icheckbox_minimal-blue',
          radioClass: 'iradio_minimal-blue',
      });
  }
});