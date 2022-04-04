async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();
  console.log(result);

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(result.errors[0].message);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
