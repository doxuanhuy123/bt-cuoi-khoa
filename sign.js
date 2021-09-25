var user = [];
function fun() {
  check();
  run();
}
function check() {
  let ten = $(".input1").val();
  var mk = $(".input2").val();
  var laimk = $(".input3").val();
  if (ten == "" || mk == "" || laimk == "") {
    return "a";
  }
  if (mk != laimk) {
    return "b";
  } else if (localStorage.getItem("user") === null) {
    return "c";
  } else {
    let user = localStorage.getItem("user"); 
    user = JSON.parse(user); 

    for (element of user) {
      if (ten === element.ten) {
        return "d";
      }
      return "c";
    }
  }
}
function run() {
  let ten = $(".input1").val();
  var mk = $(".input2").val();
  var laimk = $(".input3").val();
  if (check() == "a") {
    const ten = `<p class="ochua">*Bạn chưa nhập đủ thông tin đăng ký<p>`;
    $(".ochua").replaceWith(ten);
  } else if (check() == "b") {
    const ten = `<p class="ochua">*Mật khẩu không trùng khớp<p>`;
    $(".ochua").replaceWith(ten);
  } else if (check() == "c") {
    const tenn = `<p class="ochua">*Tạo tài khoản thành công<p>`;
    
    $(".ochua").replaceWith(tenn);
    const luu = {
      ten: ten,
      mk: mk,
    };

    user.push(luu);
    localStorage.setItem("user", JSON.stringify(user));
  } else if (check() == "d") {
    const tenn = `<p class="ochua">*Trùng tên đăng nhập<p>`;
    $(".ochua").replaceWith(tenn);
  }
}
function kocg() {
  if (localStorage.check == 1) {
    $("body").remove();
  }
}
window.onload = function () {
  kocg();
};