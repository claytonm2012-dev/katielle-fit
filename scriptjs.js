function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (usuario === "katielle" && senha === "1234") {
    window.location.href = "dashboard.html";
  } else {
    erro.innerText = "Usuário ou senha incorretos";
    erro.style.color = "red";
  }
}


