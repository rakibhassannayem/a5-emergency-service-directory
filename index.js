function getElement(id) {
  return document.getElementById(id);
}
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// delegation

getElement("services").addEventListener("click", function (e) {

  const name = e.target.parentNode.parentNode.children[1].children[0].innerHTML;
  const type = e.target.parentNode.parentNode.children[1].children[1].innerText;
  const number =
    e.target.parentNode.parentNode.children[1].children[2].innerText;

  if (e.target.id.includes("heart-btn")) {
    heartCount++;
    getElement("heart-count").innerText = heartCount;
  } else if (e.target.id.includes("copy-btn")) {
    copyCount++;
    getElement("copy-count").innerText = copyCount;

    // Copy to clipboard
    navigator.clipboard.writeText(number);

    alert(`নম্বর কপি হয়েছেঃ ${number}`);
  } else if (e.target.id.includes("call-btn")) {
    if (coinCount < 20) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    } else {
      coinCount -= 20;
      getElement("coin-count").innerText = coinCount;

      alert(`📞 Calling ${type} ${number}...`);
      const time = new Date().toLocaleTimeString();

      const historyContainer = getElement("history-container");
      const history = document.createElement("div");
      history.innerHTML = `
      <div class="bg-gray-100 flex items-center justify-between p-3 rounded-lg">
            <div>
              <p>${name}</p>
              <p class="text-gray-600">${number}</p>
            </div>
            <p>${time}</p>
          </div>
      `;

      historyContainer.append(history);
    }
  }
});

getElement("btn-clear").addEventListener("click", function () {
  getElement("history-container").innerHTML = "";
});
