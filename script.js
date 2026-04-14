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

// tampilkan tugasfunction createTask(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    // klik = selesai
    span.onclick = () => span.classList.toggle("done");

    // tombol edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = (e) => {
        e.stopPropagation();
        const newText = prompt("Edit tugas:", span.textContent);
        if (newText) {
            span.textContent = newText;
        }
    };

    // tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        removeTask(text);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

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
function searchTask() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        const text = task.firstChild.textContent.toLowerCase();
        task.style.display = text.includes(keyword) ? "flex" : "none";
    });
}
function filterTask(type) {
    const tasks = document.querySelectorAll("#taskList li span");

    tasks.forEach(task => {
        const parent = task.parentElement;

        if (type === "all") {
            parent.style.display = "flex";
        } else if (type === "done") {
            parent.style.display = task.classList.contains("done") ? "flex" : "none";
        } else {
            parent.style.display = !task.classList.contains("done") ? "flex" : "none";
        }
    });
}
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = () => li.classList.toggle("done");

    list.appendChild(li);
    input.value = "";
}