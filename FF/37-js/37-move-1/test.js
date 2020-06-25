var n = 1;

var id = setInterval(() => {
  console.log(n);
  if (n <= 200) {
    demo.style.left = n + "px";
    n += 1;
  } else {
    clearInterval(id);
  }
}, 1000 / 60);
