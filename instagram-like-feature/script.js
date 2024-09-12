let msg = document.querySelector(".msg");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

add.addEventListener("click", () => {
  msg.innerText = "Friend";
  msg.style.color = "green";
});

remove.addEventListener("click", () => {
  msg.innerText = "Stranger";
  msg.style.color = "red";
});
