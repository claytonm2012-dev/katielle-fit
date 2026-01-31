function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "aluno" && pass === "1234") {
    localStorage.setItem("logado", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Login inválido";
  }
}

function logout() {
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}

if (window.location.pathname.includes("dashboard")) {
  if (!localStorage.getItem("logado")) {
    window.location.href = "index.html";
  }
}
