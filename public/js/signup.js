const signupFormHandler = async (event) => {
  event.preventDefault();

  //retrieve the entries from the signup form
  const name = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  //validate the uer and password entries and call the Post API
  if (name && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
