const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");

  task_el.appendChild(task_content_el);
});
task_edit_el.addEventListener("click", (e) => {
  if (task_edit_el.innerText.toLowerCase() == "edit") {
    task_edit_el.innerText = "Save";
    task_input_el.removeAttribute("readonly");
    task_input_el.focus();
  } else {
    task_edit_el.innerText = "Edit";
    task_input_el.setAttribute("readonly", "readonly");
  }
});
