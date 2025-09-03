// Toggle between forms
function showForm(type) {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("signin-form").classList.add("hidden");
  document.getElementById(`${type}-form`).classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  // Sign Up
  const signupForm = document.getElementById("shelterSignup");
  const signupMsg = document.getElementById("signupMsg");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(signupForm).entries());

    if (formData.password !== formData.confirmPassword) {
      signupMsg.textContent = "❌ Passwords do not match.";
      signupMsg.style.color = "red";
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/food-shelter/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        signupMsg.textContent = "✅ " + data.message;
        signupMsg.style.color = "green";
        signupForm.reset();
      } else {
        signupMsg.textContent = "❌ " + data.message;
        signupMsg.style.color = "red";
      }
    } catch (err) {
      signupMsg.textContent = "❌ Server error.";
      signupMsg.style.color = "red";
    }
  });

  // Sign In
  const signinForm = document.getElementById("shelterSignin");
  const signinMsg = document.getElementById("signinMsg");

  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(signinForm).entries());

    try {
      const res = await fetch("http://localhost:5000/api/food-shelter/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        signinMsg.textContent = "✅ " + data.message;
        signinMsg.style.color = "green";
        signinForm.reset();
      } else {
        signinMsg.textContent = "❌ " + data.message;
        signinMsg.style.color = "red";
      }
    } catch (err) {
      signinMsg.textContent = "❌ Server error.";
      signinMsg.style.color = "red";
    }
  });
});
