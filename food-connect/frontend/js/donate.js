document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("donationForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("http://localhost:5000/api/donations/donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);
        window.location.href = "qr.html"; // redirect to QR page
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Server error. Try again later.");
    }
  });
});
