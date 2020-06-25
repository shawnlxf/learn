button.onclick = () => {
  demo.classList.add("b");
  setTimeout(() => {
    demo.classList.remove("b");
    demo.classList.add("c");
  }, 1000);
};
