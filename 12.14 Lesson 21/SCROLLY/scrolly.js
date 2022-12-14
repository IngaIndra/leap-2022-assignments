const windowHeight = window.innerHeight;
const documentHeight = document.body.offsetHeight;
const targetScrollY = documentHeight - windowHeight;

function getScrollTopPercent() {
  return Math.round((window.scrollY * 100) / targetScrollY);
}
function updateScrollProgress() {
  document.querySelector(".progress").innerHTML = getScrollTopPercent() + "%";
  document.querySelector(".progress-bar-inner").style.width =
    getScrollTopPercent() + "%";
}

document.addEventListener("scroll", updateScrollProgress);

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  documentHeight = document.body.offsetHeight;
  targetScrollY = documentHeight - windowHeight;
});

const runBoxTarget = document.querySelector(".run-box");

runBoxTarget.addEventListener("mouseenter", function () {
  runBoxTarget.classList.add("active");
});

runBoxTarget.addEventListener("mouseout", function () {
  runBoxTarget.classList.remove("active");
});
