const button = document.getElementById("submit");
const form = document.getElementById("form");
const email = document.getElementById("email");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const emailVal = email.value;
  inputVerify(emailVal);
  email.value = "";
});

function inputVerify(data) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (data.match(mailformat)) {
    alert("Valid email address!");
    form.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    form.focus();
    return false;
  }
}
