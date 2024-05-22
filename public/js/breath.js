async function createBreathForm(event) {
  event.preventDefault();

  //just routing to the form to add a new entry
  document.location.replace("/addBreath");
}

const addPostElement = document
  .querySelector(".btn_new")
  .addEventListener("click", createBreathForm);
