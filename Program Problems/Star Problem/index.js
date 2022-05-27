let first = document.getElementById("pb1");
first.innerText = "1.Problem :- ";

document.write("<br/>");

for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    document.write("*");
  }
  document.write("<br/>");
}
document.write("<hr/>");
document.write("2.Problem:-");
document.write("<br/>");
document.write("<br/>");

for (let k = 1; k < 5; k++) {
  for (let l = k; l < 5; l++) {
    document.write(k);
  }
  document.write("<br/>");
}

document.write("<hr/>");
document.write("3.Problem:-");

document.write("<br/>");
for (let m = 1; m < 5; m++) {
  for (let n = m; n < 5; n++) {
    document.write(n);
  }
  document.write("<br/>");
}
document.write("<hr/>");

document.write("4.Problem:-");
document.write("<br/>");
document.write("<br/>");
for (let a = 5; a >= 1; a--) {
  for (let b = 1; b <= a; b++) {
    document.write(b);
  }
  document.write("<br/>");
}

document.write("<hr/>");

document.write("5.Problem:-");
document.write("<br/>");
document.write("<br/>");
for (let c = 1; c <= 5; c++) {
  for (let d = 1; d <= 5; d++) {
    document.write("*");
  }
  document.write("<br/>");
}
document.write("<hr/>");
document.write("6.Problem:-");
document.write("<br/>");
document.write("<br/>");
for (let c = 1; c <= 5; c++) {
  for (let d = 1; d <= c; d++) {
    document.write("*");
  }
  document.write("<br/>");
}
