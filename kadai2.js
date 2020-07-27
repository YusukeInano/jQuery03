(function($, window) {
  $(function() {
    var check = function(e) {
      var email = $('#email').val(),
          password = $('#password').val();
       if (email == '') {
        alert("Eメールアドレスを入力してください");
      } else if (email.indexOf('@') < 0) {
        alert("Eメールアドレスには@が必要です");
      }
      if (password == '') {
        alert("パスワードを入力してください");
      } else if (password.length < 6) {
        alert("パスワードは６文字以上にしてください");
      }
    }
     $('#login').on('click', check);
  });
})(jQuery, window);