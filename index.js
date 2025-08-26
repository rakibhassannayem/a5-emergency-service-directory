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
  } else if (e.target.id.includes("call-btn")) {
    if (coinCount < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    } else {
      coinCount -= 20;
      getElement("coin-count").innerText = coinCount;

      const name =
        e.target.parentNode.parentNode.children[1].children[1].innerText;
      const number =
        e.target.parentNode.parentNode.children[1].children[2].innerText;
      alert(`📞 Calling ${name} ${number}...`);
    }
  }
});
