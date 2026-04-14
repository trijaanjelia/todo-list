const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const hari = document.getElementById("hari");

function addTask() {
    if (!input.value) return;

    const li = document.createElement("li");
    li.className = "belum";

    li.innerHTML = `
        ${input.value} <br>
        <small>${hari.value}</small>
    `;

    li.onclick = () => {
        if (li.className === "belum") li.className = "proses";
        else if (li.className === "proses") li.className = "selesai";
        else li.className = "belum";
    };

    list.appendChild(li);
    input.value = "";
}