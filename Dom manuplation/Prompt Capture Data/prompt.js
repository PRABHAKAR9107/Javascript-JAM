let answer = prompt("What is your name?");

if (typeof answer === "string") {
  var para = document.createElement("h1");
  para.innerText = answer;
  document.body.appendChild(para);
}



var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})