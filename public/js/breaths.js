async function createBreathForm(event) {
  event.preventDefault();

  document.location.replace("/addBreath");
}

const addPostElement = document
  .querySelector(".btn_new")
  .addEventListener("click", createBreathForm);
