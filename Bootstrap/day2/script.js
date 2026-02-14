const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
const registerModal = new bootstrap.Modal(document.getElementById("registerModal"));
const loginButton = document.getElementById("Login");

document.getElementById("showRegister").addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.hide();
  setTimeout(() => registerModal.show(), 400);
});

document.getElementById("showLogin").addEventListener("click", (e) => {
  e.preventDefault();
  registerModal.hide();
  setTimeout(() => loginModal.show(), 400);
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("UserName", name);
  localStorage.setItem("UserEmail", email);
  localStorage.setItem("UserPassword", password);
  alert("Registration Successful! Please login now.");
  registerModal.hide();
  setTimeout(() => loginModal.show(), 400);
});


document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const savedEmail = localStorage.getItem("UserEmail");
  const savedPassword = localStorage.getItem("UserPassword");

  if (email === savedEmail && password === savedPassword) {
    alert("Login Successful!");
    loginButton.style.display = "none";
    loginModal.hide();
  } else {
    alert("Invalid Email or Password");
  }
});
