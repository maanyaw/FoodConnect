document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.getElementById("volunteerData");

  try {
    const res = await fetch("http://localhost:5000/api/volunteer/all-volunteers");
    const data = await res.json();

    if (res.ok && Array.isArray(data)) {
      tableBody.innerHTML = data.map(item => `
        <tr>
          <td>${item.name || ""}</td>
          <td>${item.email || ""}</td>
          <td>${item.phone || ""}</td>
          <td>${item.state || ""}</td>
          <td>${item.city || ""}</td>
          <td>${item.message || ""}</td>
        </tr>
      `).join("");
    } else {
      tableBody.innerHTML = `<tr><td colspan="6">⚠️ No volunteers found</td></tr>`;
    }
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    tableBody.innerHTML = `<tr><td colspan="6">❌ Failed to load data</td></tr>`;
  }
});
