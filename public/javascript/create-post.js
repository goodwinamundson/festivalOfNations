async function newFormHandler(event) {
  event.preventDefault();

  // const country_name = document.querySelector(
  //   'input[name="country_name"]'
  // ).value;

  let countryEl = document.querySelector("#country");
  let country = countryEl.options[countryEl.selectedIndex].textContent;

  // const festival_loocation"]'
  // ).value; location = document.querySelector(
  //   'input[name="l

  let locationEl = document.querySelector("#location");
  let location = locationEl.options[locationEl.selectedIndex].textContent;

  const description = document.querySelector('input[name="description"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      country,
      location,
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
