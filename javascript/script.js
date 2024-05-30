let array1 = [];
let array2 = [];

// document.getElementById("add0").onclick = function () {
//   toDo();
// };

// document.getElementById("add2").onclick = function () {
//   toDo1();
// };
document.getElementById("add1").onclick = function () {
  addTodo();
};

function toDo() {
  var a = document.getElementById("name1").value;
  array1.push(a);
  console.log(array1);
  document.getElementById("name1").value = "";
}

function toDo1() {
  var a = document.getElementById("name2");

  document.getElementById("data1").innerHTML = "";
  array2.push(a.value);
  for (let i = 0; i < array2.length; i++) {
    let para = document.createElement("p");
    para.innerText = array2[i];
    para.id = `li${i}`;
    let but = document.createElement(`button`);
    but.id = `but${i}`;
    but.innerText = "delete";
    but.className = "close";
    para.appendChild(but);
    document.getElementById("data1").appendChild(para);
    document.getElementById(`but${i}`).onclick = function () {
      array2.splice(i, 1);
      document.getElementById(`li${i}`).remove();
      // let output
      array2 = output;
      toDo1();
    };
  }
  a.value = "";
}

const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

toDo3();
function toDo3() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          toDo3();
        " class="delete-todo-button">Delete</button> 
      `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.getElementById("name");
  const name = inputElement.value;

  const dateInputElement = document.getElementById("date");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });
  inputElement.value = "";
  toDo3();
}
