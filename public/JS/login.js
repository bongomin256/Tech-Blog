const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login");
  const password = document.querySelector("#password-login");

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Incorrect email or password, please try again!");
      document.location.reload();
    }
  }
};

document.querySelector(".btn").addEventListener("onclick", loginFormHandler);
