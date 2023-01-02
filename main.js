//VARIABLES
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

//EVENTS
addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const task = input.value;
    
    if(task !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = task;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = '';
        empty.style.display = 'none';
    }
});

//FUNCTIONS
function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';
    deleteBtn.addEventListener('click', (event) => {
        const item = event.target.parentElement;
        ul.removeChild(item);
        
        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            empty.style.display = 'block';
        }
    });
    return deleteBtn;
}