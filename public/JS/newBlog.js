const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title");
  const content = document.querySelector("#blog-content");

  if (title && content) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      header: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create the blog");
    }
  }
};

document.querySelector("#create").addEventListener("click", newBlogHandler);
