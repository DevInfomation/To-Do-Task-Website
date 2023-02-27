const inputField = document.getElementById('inputField');
const addButton = document.getElementById('add-button');

const calloutTasks = document.querySelector('.callout-tasks');
const errorMessage = document.querySelector('.msg');

addButton.addEventListener('click', () => {
    const paragraph = document.createElement('p'); 
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    if (!inputField.value) {
        errorMessage.textContent = 'Please enter a task...';

        setTimeout(() => errorMessage.remove(), 3000);
            
    } else {
        calloutTasks.appendChild(paragraph);
        paragraph.classList.add('p');
        paragraph.innerText = inputField.value; 

        inputField.value = '';

        calloutTasks.appendChild(editButton);
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        calloutTasks.append(editButton);

        calloutTasks.appendChild(deleteButton);
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        calloutTasks.append(deleteButton);

        deleteButton.addEventListener('click', () => {
            paragraph.remove();
            deleteButton.remove();
            editButton.remove();
        });

        editButton.addEventListener('click', () => {
            const doneButton = document.createElement('button');
            doneButton.classList.add('btn');
            doneButton.textContent = 'Done';
            calloutTasks.append(doneButton);
            paragraph.contentEditable = true;
            paragraph.style.backgroundColor = '#00000';

            doneButton.addEventListener('click', () => {
                paragraph.contentEditable = false;
                doneButton.remove();
            });
        });
    }
});