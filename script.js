const studentData = {
  "Grade 1 - A": ["Ali Ahmed", "Sara Mohamed", "Omar Youssef"],
  "Grade 2 - B": ["Mona Hassan", "Youssef Adel", "Nour Samir"],
  "Grade 3 - C": ["Hana Tamer", "Ziad Mostafa", "Laila Ashraf"]
};

document.addEventListener("DOMContentLoaded", function () {
  const classSelect = document.getElementById("classSelect");
  const dateInput = document.getElementById("dateInput");

  classSelect.addEventListener("change", renderStudentTable);
  dateInput.addEventListener("change", renderStudentTable);
});

function renderStudentTable() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedDate = document.getElementById("dateInput").value;

  if (selectedClass && selectedDate) {
    const students = studentData[selectedClass] || [];
    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = "";

    students.forEach((student, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student}</td>
        <td>
          <label>
            <input type="radio" name="status${index}" value="Present" required> Present
          </label>
          <label style="margin-left: 15px;">
            <input type="radio" name="status${index}" value="Absent"> Absent
          </label>
        </td>
      `;

      tbody.appendChild(row);
    });
  }
}

function submitAttendance() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedDate = document.getElementById("dateInput").value;

  if (!selectedClass || !selectedDate) {
    alert("Please select both class and date first.");
    return;
  }

  const students = studentData[selectedClass] || [];
  const attendance = [];

  students.forEach((student, index) => {
    const statusInput = document.querySelector(`input[name="status${index}"]:checked`);
    const status = statusInput ? statusInput.value : "Not Marked";
    attendance.push({ name: student, status });
  });

  console.log("Class:", selectedClass);
  console.log("Date:", selectedDate);
  console.log("Attendance Data:", attendance);
  alert("Attendance saved successfully!");
}

function downloadReport() {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedDate = document.getElementById("dateInput").value;
  const students = studentData[selectedClass] || [];

  if (!selectedClass || !selectedDate) {
    alert("Please select both class and date first.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Attendance Report", 14, 20);

  doc.setFontSize(12);
  doc.text(`Class: ${selectedClass}`, 14, 30);
  doc.text(`Date: ${selectedDate}`, 14, 38);

  const tableRows = students.map((student, index) => {
    const statusInput = document.querySelector(`input[name="status${index}"]:checked`);
    const status = statusInput ? statusInput.value : "Not Marked";
    return [index + 1, student, status];
  });

  doc.autoTable({
    startY: 45,
    head: [["#", "Student Name", "Status"]],
    body: tableRows,
    styles: { halign: 'left' },
    headStyles: { fillColor: [46, 125, 50] },
  });

  const filename = `Attendance-${selectedClass.replace(/\s+/g, "_")}-${selectedDate}.pdf`;
  doc.save(filename);
}
