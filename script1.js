var users = {};

document.addEventListener("DOMContentLoaded", function() {
  showLoginForm();
});

function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function registerUser(event) {
  event.preventDefault();

  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var email = document.getElementById("email").value;

  if (users[username]) {
    alert("Bu kullanıcı adı zaten alınmış!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Şifreler uyuşmuyor!");
    return;
  }

  users[username] = {
    password: password,
    email: email,
  };

  alert("Kayıt başarılı!");

  showLoginForm();
}

function loginUser(event) {
  event.preventDefault();

  var username = document.getElementById("loginUsername").value
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  if (!users[username]) {
    alert("Bu kullanıcı adı kayıtlı değil!");
    return;
  }

  if (users[username].password === password) {
    alert("Giriş başarılı!");
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}