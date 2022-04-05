async function fetchComments(event) {

    const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];

  console.log("HEY");
  const response = await fetch(`/post/${post_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

document.querySelector(".allComments").addEventListener("click", fetchComments);
