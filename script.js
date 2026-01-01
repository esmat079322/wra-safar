function generate() {
  const adventures = [
    "Take a 2 minute walk",
    "Drink a glass of water",
    "Stretch your arms and legs",
    "Look outside and relax your eyes",
    "Write one positive thought"
  ];

  const randomIndex = Math.floor(Math.random() * adventures.length);
  document.getElementById("text").innerText = adventures[randomIndex];
}
