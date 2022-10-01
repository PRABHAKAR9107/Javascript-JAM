const button1 = document.querySelector(".btn1");

const button2 = document.querySelector(".btn2");

button1.onclick = () => {
  console.log("First event handler!");
  document.querySelector(".first-button").innerText = "First event handler!";
};

button1.onclick = () => {
  console.log("Second event handler!");

  document.querySelector(".first-button1").innerText =
    "Second event handler! :- the first onclick handler gets overridden by the second. This results in an output:";
};

button2.addEventListener("click", () => {
  console.log("First event listener!");
  document.querySelector(".second-button").innerText = "First event Listener!";
});

button2.addEventListener("click", () => {
  console.log("Second event listener!");
  document.querySelector(".second-button2").innerText =
    "Second event Listener!";
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.querySelector("#wrap").addEventListener(
  "click",
  (e) => {
    console.log("bubbling1");
    console.log("target:", e.target.nodeName);
    // Output: <li class="item">Walk your dog</li>
    console.log("======currentTarget:", e.currentTarget.nodeName);

    e.target.value = document.querySelector("#wrap").style.color = "red";
  },
  true //use false for bubbling
);
document.querySelector(".hint").addEventListener(
  "click",
  (e) => {
    console.log("bubbling2");
    e.stopPropagation(); //stop propagation
  },
  true //use false for bubbling
);

document.querySelector("#tip").addEventListener(
  "click",
  () => {
    console.log("bubbling3");
  },
  true //use false for bubbling
);

const list = document.querySelector(".todo-list");

list.addEventListener("click", (e) => {
  alert(e.target.nodeName);
  // Output: <li class="item">Walk your dog</li>
  alert(e.currentTarget.nodeName);
  // Output: <ul class="todo-list"></ul>
});
