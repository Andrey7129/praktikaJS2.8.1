document.getElementById('addTaskButton').addEventListener('click', function() {
  let newTask = document.createElement('li');
  newTask.textContent = 'Новый абзац';
  document.getElementById('taskList').appendChild(newTask);
});

let elementToRemove = document.getElementById('elementId');
if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
}

let form = document.createElement('form');

let inputName = document.createElement('input');
 inputName.setAttribute('type', 'text');
 inputName.setAttribute('name', 'name');
 inputName.setAttribute('placeholder', 'Ваше имя');
 form.appendChild(inputName);

let inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('placeholder', 'Введите email');
form.appendChild(inputEmail);

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

document.body.appendChild(form);

// let inputEl = document.getElementById("innerText");

// if (inputEl) {
//   let inputVal = inputEl.value;
// }

// const form1 = document.querySelector('form1')
// const button = document.getElementById('submit1')

// console.log(form1.innerText)


// button.innerText = 'Дон!'
// console.log(button)


const addTaskButton = document.getElementById('addTask');
const newTaskInput = document.getElementById('newTask');
const todoList = document.getElementById('todoList');
const elem = document.getElementById('elem');
// Функция для добавления новой задачи
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        todoList.appendChild(listItem);
        newTaskInput.value = ''; // Очищаем поле ввода
    }
}

// Добавляем обработчик события для кнопки
addTaskButton.addEventListener('click', addTask);

// Функция для удаления последнего элемента списка
function removeelem() {
    if (elem.children.length > 0) { // Проверяем, есть ли элементы в списке
        elem.removeChild(elem.lastChild); // Удаляем последний элемент
    }
}

// Обработчики событий для кнопок
// addButton.addEventelem('click', addelem);
// removeButton.addEventelemtener('click', removeelem);


// Обработчик события наведения мыши
addTaskButton.addEventListener('mouseover', function() {
    addTaskButton.style.backgroundColor = 'lightgreen';
});

// Обработчик события увода мыши
addTaskButton.addEventListener('mouseout', function() {
    addTaskButton.style.backgroundColor = 'lightblue';
});




//  document.querySelector('#clickMe').addEventListener('click', () => {
//    const newListItem = document.createElement('li');
//     document.querySelector('#ulList').appendChild(newListItem);
//  });

 function removeElement()
 {
     document.getElementById('mydiv').remove();
 }
//  jQuery(document).ready(function($){
    
//    $('.button').on('click', function(e){
    
//     $('ul').prepend('<li>' + text + '</li>');
//     count++;
      
//     });
  
//  });