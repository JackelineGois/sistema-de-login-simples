function mostrarEmailUsuarioLogado() {
  var usuarioLogado = localStorage.getItem("usuarioLogado");

  var usuarioLogadoObject = JSON.parse(usuarioLogado);

  $("#userLogged").html(usuarioLogadoObject.email);
}

function logout() {
  localStorage.removeItem("usuarioLogado");
  document.location = "login.html";
}

function verificarUsuarioLogado() {
  var usuarioLogado = localStorage.getItem("usuarioLogado");

  if (!usuarioLogado) {
    document.location = "login.html";
  }
}

verificarUsuarioLogado();

$(document).ready(function () {
  mostrarEmailUsuarioLogado();
  $("#logout").click(function () {
    logout();
  });
});
