document.addEventListener("DOMContentLoaded", function () {
  // Correcting the ID of the username input field
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");
  let loginBtn = document.querySelector("#sign_in");

  // Fixing typo: 'usename' to 'username'
  let getUser = localStorage.getItem("username");
  let getPassword = localStorage.getItem("password");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Make sure all required fields are filled
    if (username.value === "" || password.value === "") {
      alert("Please Fill Data");
    } else {
      // Check if the username and password match the stored values
      if (
        getUser &&
        getUser.trim() === username.value.trim() &&
        getPassword &&
        getPassword === password.value.trim()
      ) {
        setTimeout(function () {
            window.location="index.html";
        },1500)
        console.log("test");
      } else {
        console.log("worning");
      }
    }
  });
});
