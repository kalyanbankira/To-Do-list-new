const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("list-container");

// Add Task
function addTask() {

    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;   
    }

    let li = document.createElement("li");
    li.textContent = inputBox.value.trim();  
    listContainer.appendChild(li);

    let span = document.createElement("span");

    span.innerHTML = "\u00d7";  // × symbol
    li.appendChild(span);

    inputBox.value = "";
    saveData();
}

// Click Events (Check & Delete)
listContainer.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);


// Save to LocalStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show Saved Tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();