const addBreathFormHandler = async (event) => {
  event.preventDefault();

  const breath_name = document.querySelector("#breath_name").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (breath_name && content) {
    const response = await fetch(`/api/breaths`, {
      method: "POST",
      body: JSON.stringify({ breath_name, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("here");
      document.location.replace("/");
    } else {
      alert("Failed to create project");
    }
  }
};

document
  .querySelector(".add_breath_form")
  .addEventListener("submit", addBreathFormHandler);
