async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();
  console.log(result);

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(result.errors[0].message);
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
