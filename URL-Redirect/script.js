function currentUrl() {
  var url = location.href;
  console.log(url);
  document.getElementById("current-url").innerText = url;
}

function reload() {
  var reloading = location.reload(); //by default it takes true value
  document.getElementById("reload").innerText = reloading;
}

// function redirect() {
//   var redirect = location.replace("https://www.google.com/");
//   document.getElementById("reload").innerText = redirect;
// }

// function redirect() {
//   location.href = "https://www.google.com/";
//   document.getElementById("reload").innerText = location.href;
// }

function redirect() {
  var redirect = location.assign(
    "https://www.tutorialsandyou.com/javascript/how-to-redirect-to-another-web-page-in-javascript-133.html"
  );
  document.getElementById("reload").innerText = redirect;
}
