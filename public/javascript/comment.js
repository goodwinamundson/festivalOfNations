async function commentFormHandler(event) {
  event.preventDefault();

  const comments = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comments.length) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      //document.location.reload();

      res.render("dashboard", { countries });
      document.location.replace("/dashboard");
    } else {
      alert(result.errors[0].message);
    }
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
