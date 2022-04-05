async function editFormHandler(event) {
  event.preventDefault();

  const country = document.querySelector('input[name="country"]').value.trim();
  const location = document
    .querySelector('input[name="location"]')
    .value.trim();
  const description = document
    .querySelector('textarea[id="description"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      country,
      location,
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
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
