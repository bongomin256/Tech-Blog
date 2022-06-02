const commentFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const comment = document.querySelector("#comment_text").value.trim();
  const blog_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ comment, blog_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".comment-btn")
  .addEventListener("onclick", commentFormHandler);
