const addBreathFormHandler = async (event) => {
  event.preventDefault();

  //retrieve the entries from the form
  const breath_name = document.querySelector("#breath_name").value.trim();
  const content = document.querySelector("#content").value.trim();

  //Goto the Post route to add the data
  if (breath_name && content) {
    const response = await fetch(`/api/breaths`, {
      method: "POST",
      body: JSON.stringify({ breath_name, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create project");
    }
  }
};

document
  .querySelector(".add_breath_form")
  .addEventListener("submit", addBreathFormHandler);
