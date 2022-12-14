const ul = document.querySelector("#todoTarget");
const testTarget = document.querySelector("#testTarget");
const inputTarget = document.querySelector("#inputTarget");
// const ul = document.querySelector("");

const createCB = () => {
  const cb = document.createElement("input");
  cb.type = "checkbox";

  return cb;
};

const createBtn = () => {
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "x";

  return btn;
};

inputTarget.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const li = document.createElement("li");
    const cb = createCB();
    const btn = createBtn();
    const text = document.createElement("span");
    text.innerHTML = e.target.value;

    cb.addEventListener("click", (e) => {
      if (e.target.checked) text.style.textDecoration = "line-through";
      else text.style.textDecoration = "none";
    });

    li.appendChild(cb);

    li.appendChild(text);

    btn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });

    li.appendChild(btn);

    ul.appendChild(li);
    e.target.value = "";
  }
});
