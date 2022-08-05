function preencherListaDeUsuarios() {
  var table = $("#users-table");

  listaDeFuncionarios.map(function (user, indexArray) {
    table.find("tbody").append(` 
      <tr>
        <td> ${user.email} </td> 
        <td> ${user.name}  </td>
        <td> <a href="detalharUsuario.html?email=${user.email} "> vizualizar </a> </td> 
      
      </tr>
    `);
  });
}

$(document).ready(function () {
  preencherListaDeUsuarios();
});
