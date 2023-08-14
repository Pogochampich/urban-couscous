const taskInput = document.getElementById("taskInput");
const createTaskBtn = document.getElementById("createTaskBtn");
const taskList = document.getElementById("taskList");
const trashBtn = document.getElementById("trashBtn");
const trashList = document.getElementById("trashList");
const selectAllBtn = document.getElementById("selectAll");

createTaskBtn.addEventListener("click", createTask);
trashBtn.addEventListener("click", toggleTrash);
selectAllBtn.addEventListener("click", toggleSelectAll);

function createTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.innerHTML = `
    <span class="task-text">${taskText}</span>
    <input type="checkbox" class="task-checkbox">
    <span class="delete-btn delete-btn-hidden">Удалить</span>
  `;

  const deleteBtn = taskDiv.querySelector(".delete-btn");
  const checkbox = taskDiv.querySelector(".task-checkbox");
  const taskTextElement = taskDiv.querySelector(".task-text");

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskDiv);

    trashList.appendChild(taskDiv);
  });

  checkbox.addEventListener("change", () => {
    taskTextElement.classList.toggle("completed", checkbox.checked);
    deleteBtn.classList.toggle("delete-btn-hidden", !checkbox.checked);
  });

  taskList.appendChild(taskDiv);
  taskInput.value = "";
}

function toggleTrash() {
  if (trashList.style.display === "none") {
    trashList.style.display = "block";
  } else {
    trashList.style.display = "none";
  }
}

function toggleSelectAll() {
  const checkboxes = document.querySelectorAll(".task-checkbox");
  const allCompleted = checkboxes[0].checked;
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !allCompleted;
    const taskTextElement = checkbox
      .closest(".task")
      .querySelector(".task-text");
    taskTextElement.classList.toggle("completed", !allCompleted);
    const deleteBtn = checkbox.closest(".task").querySelector(".delete-btn");
    deleteBtn.classList.toggle("delete-btn-hidden", !checkbox.checked);
  });
}
