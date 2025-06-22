const examData = [
  {
    subject: "Math",
    date: "2025-07-01",
    time: "10:00 AM",
    room: "Room 101",
   
  },
  {
    subject: "Science",
    date: "2025-07-03",
    time: "12:00 PM",
    room: "Room 203",
   
  },
  {
    subject: "History",
    date: "2025-07-05",
    time: "09:00 AM",
    room: "Room 105",
 
  }
];

const tbody = document.getElementById("examTableBody");

examData.forEach(exam => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${exam.subject}</td>
    <td>${exam.date}</td>
    <td>${exam.time}</td>
    <td>${exam.room}</td>
    
  `;
  tbody.appendChild(row);
});
 
document.getElementById("guidelineBtn").addEventListener("click", () => {
  document.getElementById("guidelineModal").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("guidelineModal").style.display = "none";
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("guidelineModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
