function getElement(id) {
  return document.getElementById(id);
}
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// delegation

getElement("services").addEventListener("click", function (e) {
  if (e.target.id.includes("heart-btn")) {
    heartCount++;
    getElement("heart-count").innerText = heartCount;
  }
});
