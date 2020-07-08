const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const URL = "";
const userName = "admin";
const userPwd = "admin";
form.addEventListener("submit", (e) => {
  setTimeout(() => {
    let messages = [];
    let data = new FormData();
    data.append("email", username.value);
    data.append("password", password.value);
    let user = {
      username: username.value,
      password: password.value,
    };
    if (username.value === "" || username.value == null) {
      messages.push("Email is required");
    }
    if (password.value === "" || password.value == null) {
      messages.push("Password is required");
    }
    if (messages.length > 0) {
      e.preventDefault();
    } else {
      /*fetch("http://localhost:3000/login/user", {
        method: "POST",
        body: JSON.stringify(user),
      }).then(() => {
        setTimeout(1000);
      });*/
      if (username.value == userName && password.value == userPwd) {
        window.location.href = "./pages/dashboard-page/dashboard-page.html";
      }
    }
  });
});
