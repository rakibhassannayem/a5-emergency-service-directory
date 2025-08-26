function getElement(id) {
  return document.getElementById(id);
}
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// delegation

getElement("services").addEventListener("click", function (e) {
  // heart count
  if (e.target.id.includes("heart-btn")) {
    heartCount++;
    getElement("heart-count").innerText = heartCount;
  } else if (e.target.id.includes("copy-btn")) {
    copyCount++;
    getElement("copy-count").innerText = copyCount;
  }
});
