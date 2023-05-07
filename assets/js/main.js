$(document).ready(function () { 
    function checkemail() {
        var email = $("#auth-form__input--email").val();
        let regexemail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi;
        if( email.trim()=== ' '){
                    $("#tbchung").html("Email bắt buộc nhập");
                    return false;
                }

                if(regexemail.test(email)) {
                    $("#tbchung").html("");
                    return true;
                }
                else {
                      $("#tbchung").html("Email không đúng định dạng");
                      return false;
                }
    }

    function checkpassword() {
        var password = $("#auth-form__input--password").val();
        let regexpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi;
        if (password.trim() == '') {
            $("#tbchung").html("Mật khẩu bắt buộc nhập");
                return false;
        }
        if (regexpassword.test(password)) { 
            $("#tbchung").html("");
                return true;
        }
        else {
            $("#tbchung").html("Mật khẩu phải có ít nhất 8 kí tự có cả chữ và số ");
                return false;
        }

    
    }

    function checkconfirmpassword() {
        var password = $("#auth-form__input--password").val();
        var confirmpassword = $("#auth-form__input--confirmpassword").val();
        if (password === confirmpassword) { 
            $("#tbchung").html("");
                return true;
        }
        else {
             $("#tbchung").html("Không đúng mật khẩu");
                return false;
        }
    }

    $("#auth-form__input--email").blur(checkemail);
    $("#auth-form__input--password").blur(checkpassword);
    $("#auth-form__input--confirmpassword").blur(checkconfirmpassword);
})

