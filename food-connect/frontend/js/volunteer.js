document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("volunteerForm");
  const msg = document.getElementById("volunteerMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("http://localhost:5000/api/volunteer/newVolunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        msg.textContent = "✅ " + data.message;
        msg.style.color = "green";
        form.reset();
      } else {
        msg.textContent = "❌ " + data.message;
        msg.style.color = "red";
      }
    } catch (error) {
      console.error("Error:", error);
      msg.textContent = "⚠️ Server error. Please try again later.";
      msg.style.color = "red";
    }
  });
});
