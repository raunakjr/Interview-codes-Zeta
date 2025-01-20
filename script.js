const arr = ["red", "blue", "black"];

const box = document.querySelector("#box");

var idx = 0;
box.addEventListener("click", () => {
  box.style.backgroundColor = arr[idx];
  idx++;
  if (idx >= arr.length) {
    idx = 0;
  }
});

var x = 2;
let y = 2;
function f() {
  x = 3;
  y = 3;
}
f();
console.log(x); // 3
console.log(y); // 2
