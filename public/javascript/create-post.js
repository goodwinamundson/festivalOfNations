async function newFormHandler(event) {
  event.preventDefault();

  const country_name = document.querySelector(
    'input[name="country_name"]'
  ).value;
  const festival_location = document.querySelector(
    'input[name="location"]'
  ).value;
  const description = document.querySelector('input[name="description"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      country_name,
      festival_location,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
