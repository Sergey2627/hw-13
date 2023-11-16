let tasks = ["Пункт 1", "Пункт 2", "Пункт 3"];

function createList() {
  let ul = document.createElement("ul");
  ul.id = "taskList"; 

  tasks.forEach(function(task, index) {
    let li = document.createElement("li");
    li.textContent = task;


    let cross = document.createElement("span");
    cross.textContent = "❌";
    cross.style.color = "red";
    cross.style.marginLeft = "8px";
    cross.style.cursor = "pointer";
    cross.onclick = function() {
      tasks.splice(index, 1);
      createList();
    };

    li.appendChild(cross);
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

createList();

function addTask() {
  let newTask = prompt("Введіть нову справу");
  if (newTask) {
    tasks.push(newTask);
    createList();
  }
}

let addButton = document.createElement("button");
addButton.textContent = "Додати";
addButton.onclick = addTask;
document.body.appendChild(addButton);