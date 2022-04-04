async function newFormHandler(event) {
  event.preventDefault();

  let locationEl = document.querySelector("#location");
  let location = locationEl.options[locationEl.selectedIndex].textContent;

  let countryEl = document.querySelector("#country");
  let country = countryEl.options[countryEl.selectedIndex].textContent;

  const description = document.querySelector('input[name="description"]').value;
  console.log(country, location, description)

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      location,
      country_name: country,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  console.log(result);

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(result.errors[0].message);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
