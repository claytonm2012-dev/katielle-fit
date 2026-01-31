function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const erro = document.getElementById("erro");

  if (usuario === "katielle" && senha === "1234") {
    window.location.href = "dashboard.html";
  } else {
    erro.textContent = "Usuário ou senha incorretos";
  }
}


