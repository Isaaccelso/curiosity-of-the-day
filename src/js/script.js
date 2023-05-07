function newCuriosity() {
  // carrega o arquivo txt
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/src/curiosidades/gerais/curiosidades.txt", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var linhas = xhr.responseText.split("\n");
      var linha = linhas[Math.floor(Math.random() * linhas.length)];
      var curiosidadeDiv = document.querySelector(".curiosity");
      curiosidadeDiv.innerText = linha;
    }
  };
  xhr.send();
}

window.addEventListener("load", function () {
  newCuriosity();
});
