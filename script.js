const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// load saat pertama buka
document.addEventListener("DOMContentLoaded", loadTasks);

// tambah tugas
function addTask() {
    if (taskInput.value.trim() === "") return;

    createTask(taskInput.value);
    saveTask(taskInput.value);

    taskInput.value = "";
}

// tampilkan tugas
function createTask(text) {
    const li = document.createElement("li");
    li.textContent = text;

    // klik = selesai
    li.onclick = () => li.classList.toggle("done");

    // tombol hapus
    const btn = document.createElement("button");
    btn.textContent = "X";

    btn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        removeTask(text);
    };

    li.appendChild(btn);
    taskList.appendChild(li);
}

// simpan ke localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load data
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTask(task));
}

// hapus dari storage
function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}