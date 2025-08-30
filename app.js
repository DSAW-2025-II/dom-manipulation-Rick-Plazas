alert("El JS está cargado correctamente");


const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list  = document.getElementById('task-list');


function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task';

  //checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('aria-label', 'Marcar como completada');

  //texto
  const span = document.createElement('span');
  span.className = 'text';
  span.textContent = text;

  //botón de eliminar
  const del = document.createElement('button');
  del.className = 'delete';
  del.type = 'button';
  del.textContent = 'Eliminar'; //botoncito a la derecha para borrar
  del.setAttribute('aria-label', 'Eliminar tarea');

  li.append(checkbox, span, del);
  list.prepend(li); // aparece arriba
}

//Agregar tarea en submit
form.addEventListener('submit', (e) => {
  e.preventDefault(); //cancela el evento si es cancelablse
  const text = input.value.trim();
  if (!text) return; //si está vacío no hace nada 

  addTask(text);
  input.value = ''; //limpia el input
  input.focus();
});

//delegación de eventos en la lista 
list.addEventListener('click', (e) => {

  //completar
  if (e.target.matches('input[type="checkbox"]')) {
    e.target.closest('.task').classList.toggle('completed', e.target.checked);
  }
  //eliminar
  if (e.target.matches('.delete')) {
    e.target.closest('.task').remove();
  }
});


