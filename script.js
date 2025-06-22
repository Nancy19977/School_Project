const attendanceData = [
  { name: "Ahmed Ali", status: "Present", date: "2025-06-22", class: "Grade 1 - A", teacher: "Mr. Omar" },
  { name: "Mona Hassan", status: "Absent", date: "2025-06-22", class: "Grade 1 - A", teacher: "Mr. Omar" },
  { name: "Sara Mahmoud", status: "Present", date: "2025-06-21", class: "Grade 2 - B", teacher: "Ms. Salma" },
  { name: "Youssef Kamal", status: "Absent", date: "2025-06-21", class: "Grade 2 - B", teacher: "Ms. Salma" }
 
];

function populateTable(data) {
  const tbody = document.querySelector("#attendanceTable tbody");
  tbody.innerHTML = ""; 
  
  data.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.status}</td>
      <td>${row.date}</td>
      <td>${row.class}</td>
      <td>${row.teacher}</td>
    `;
    tbody.appendChild(tr);
  });
}
populateTable(attendanceData);

document.getElementById("filterBtn").addEventListener("click", () => {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedDate = document.getElementById("dateSelect").value;

  const filteredData = attendanceData.filter(row => {
    const classMatch = (selectedClass === "all" || row.class === selectedClass);
    const dateMatch = (!selectedDate || row.date === selectedDate);
    return classMatch && dateMatch;
  });

  populateTable(filteredData);
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Student Attendance Report", 14, 15);
  doc.autoTable({ html: "#attendanceTable", startY: 20 });

  doc.save("attendance_report.pdf");
});
