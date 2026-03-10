/*
check if the input is empty
creates a list item <li>
adds a delete button
shows it in the list
*/

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


//add a click event to the button(run code when the button is clicked)
button.addEventListener('click', function () {
    //check if the input is empty
    if (input.value.trim() != '') {
        //create the list item
        const li = document.createElement('li');
        //put the chapter text inside
        li.textContent = input.value;
        //create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        //put the delete button inside the list item
        li.append(deleteButton);
        //add the list item to the page
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        //clean the input box
        input.value = '';
        //return cursor to input
        input.focus();
    }
});



