const adventures = [
  "Walk backwards for 30 seconds",
  "Drink water slowly and notice the taste",
  "Stand up and stretch your arms",
  "Look outside and name 3 colors",
  "Do a quick doodle on a paper"
];

function generate() {
  const rand = Math.floor(Math.random() * adventures.length);
  document.getElementById("adventure").innerText = adventures[rand];
}
