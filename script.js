const studyMaterials = [
  {
    title: "Math Chapter 1 - Algebra",
    description: "PDF notes and exercises on Algebra fundamentals.",
    link: "materials/math_chapter1.pdf"
  },
  {
    title: "Science Video - Photosynthesis",
    description: "Watch the detailed explanation of photosynthesis process.",
    link: "materials/photosynthesis_video.mp4"
  },
  {
    title: "History Notes - Ancient Civilizations",
    description: "Comprehensive notes on Ancient Egypt, Greece, and Rome.",
    link: "materials/history_notes.pdf"
  },
  {
    title: "English Grammar Exercises",
    description: "Interactive exercises to improve your grammar skills.",
    link: "materials/english_grammar_exercises.pdf"
  }
];

const materialsContainer = document.getElementById("materialsList");

studyMaterials.forEach(material => {
  const card = document.createElement("div");
  card.classList.add("material-card");
  card.innerHTML = `
    <div class="material-title">${material.title}</div>
    <div class="material-desc">${material.description}</div>
    <a class="material-link" href="${material.link}" target="_blank" rel="noopener noreferrer">View / Download</a>
  `;
  materialsContainer.appendChild(card);
});
