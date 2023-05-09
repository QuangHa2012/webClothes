$(document).ready(function () { 
    //kiểm tra email 
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
    //kiểm tra mật khẩu 
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
    //kiểm tra xác thực mật khẩu 
    function checkconfirmpassword() {
        var password = $("#auth-form__input--password").val();
        var confirmpassword = $("#auth-form__input--confirmpassword").val();
        if (confirmpassword.trim() === '') {
            $("#tbchung").html("Xác thực mật khẩu");
                return false;
        }
            
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

    // lưu người dùng 
    $('.btn-dk').click(function () { 
        if (!checkconfirmpassword() || !checkpassword() || !checkemail()) {
            return false;
        }
        var email = $("#auth-form__input--email").val();
        var password = $("#auth-form__input--password").val();
        var confirmpassword = $("#auth-form__input--confirmpassword").val();

        const user = {
            useremail: email,
            userpassword: password
        }

        let json = JSON.stringify(user);
        localStorage.setItem(email, json);
        localStorage.setItem(password, json);
        alert("Đăng Ký Thành Công");
        window.location.href = "login.html";
    })
    

    // người dùng đăng nhập 
    $('.btn-dn').click(function () {
        if (!checkpassword() || !checkemail()) {
            return false;
        }
        var loginEmail = $('#auth-form__input--email').val();
        var loginPassword = $('#auth-form__input--password').val();
        const user = JSON.parse(localStorage.getItem(loginEmail));
            

        if (!user) { 
            alert("Tài khoản không tồn tại");
        }
        else if (loginEmail === user.useremail && loginPassword === user.resetpassword)
        {
            alert("Đăng Nhập Thành Công");
            window.location.href = "index.html";
        }
        else {     
            alert("Đăng Nhập Thất Bại");
        }


        
    })  
    

})


var cartItems = [];
        $(".btn-addcart").click(function () {
            var $product = $(this).closest('.product-item');
            var productimg = $product.find('.product-img').css('background-image');
            productimg = productimg.replace('url("', '  ').replace('")', '');
            var productname = $product.find('.product__name').text();
            var productprice = $product.find('.product__price-new').text();
            var productitem = {
                imgurl: productimg,
                name: productname,
                price: productprice
            };

            var isExist = false;
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i].name === productname) {
                    cartItems[i].quantity++;
                    isExist = true;
                    break;
                }
            }

            if (!isExist) {
                productitem.quantity = 1;
                cartItems.push(productitem);
            }
        //    cartItems.push(productitem);
           updateCart();
        })


        function updateCart() {
                var carthtml= '';
                var $cart = $('.header__cart-list-item');
                // $cart.empty(); 
                cartItems.forEach(item => {
                    carthtml +=
                        `<li class="header__cart-item">
                        < img src = "${item.imgurl}" alt = ""
                                            class= "header__cart-img" >

                        <div class="header__cart-item-info">
                            <div class="header__cart-item-head">
                                <h5 class="header__cart-item-name">${item.name}</h5>
                                <div class="header__cart-item-price-wrap">
                                    <span class="header__cart-item-price">${item.price}</span>
                                    <span class="header__cart-item-multiply">x</span>
                                    <span class="header__cart-item-quantity">1</span>
                                </div>
                            </div>

                            <div class="header__cart-item-body">
                                <span class="header__cart-item-desc">
                                    Phân loại : Đen,M
                                </span>
                                <span class="header__cart-item-remove">Xoá</span>

                            </div>
                        </div>
                    </li >`;

                    
                });
                    
                $cart.html(carthtml);
            }


// validation form login
// const inputUsername = document.querySelector(".input-login-username");
// const inputPassword = document.querySelector(".input-login-password");
// const btnLogin = document.querySelector(".login__signInButton");

// // validation form login

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (inputUsername.value === "" || inputPassword.value === "") {
//     alert("vui lòng không để trống");
//   } else {
//     const user = JSON.parse(localStorage.getItem(inputUsername.value));
    
//     if (
//       user.username === inputUsername.value &&
//       user.password === inputPassword.value
//     ) {
//       alert("Đăng Nhập Thành Công");
//       window.location.href = "../index.html";
//     } else {
//       alert("Đăng Nhập Thất Bại");
//     }
//   }
// });

// const inputUsername = document.querySelector(".input-login-username");
// const inputPassword = document.querySelector(".input-login-password");
// const btnLogin = document.querySelector(".login__signInButton");

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   const user = JSON.parse(localStorage.getItem(inputUsername.value));
//   if (!user) {
//     alert("Tài khoản không tồn tại");
//   } else if (inputUsername.value === "" || inputPassword.value === "") {
//     alert("Vui lòng không để trống");
//   } else if (
//     user.username === inputUsername.value &&
//     user.password === inputPassword.value
//   ) {
//     alert("Đăng Nhập Thành Công");
//     window.location.href = "../index.html";
//   } else {
//     alert("Đăng Nhập Thất Bại");
//   }
// });

