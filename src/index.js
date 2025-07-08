document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const li = document.createElement("li");
    li.textContent = input.value + " ";

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    taskList.appendChild(li);

    form.reset();
  });

});
