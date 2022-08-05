function mostrarDadosDoUsuario() {
  var searchParams = new URLSearchParams(window.location.search);

  var emailDoUsuario = searchParams.get("email");

  var usuarioEncontrado = listaDeFuncionarios.find(function (
    usuario,
    indiceNoArray
  ) {
    return usuario.email == emailDoUsuario;
  });

  if (usuarioEncontrado) {
    $("#nome").html(usuarioEncontrado.name);
    $("#email").html(usuarioEncontrado.email);
    $("#telefone").html(usuarioEncontrado.phone_number);
    $("#cargo").html(usuarioEncontrado.role);
  } else {
    alert("E-mail inválido, por favor tente novamente");
    document.location = "listaDeUsuarios.html";
  }
}

$(document).ready(function () {
  mostrarDadosDoUsuario();
});
