// script.js
document.addEventListener("DOMContentLoaded", function () {
    loadTasks(); // Load tasks from local storage on page load
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const task = taskInput.value;
        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        taskList.appendChild(taskItem);

        // Save tasks to local storage
        saveTasks();

        taskInput.value = ""; // Clear the input field
    }
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}
