let count = 0;
document.getElementById('add-item-btn').addEventListener('click', function () {
    count++;
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputFieldValue}</td>
        <td>
            <button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-primary edit-btn">Edit</button>
        </td>
    `;
    tableBody.appendChild(tr);

    inputField.value = "";

    const deleteBtns = document.getElementsByClassName('delete-btn');
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        });
    };

    const editBtns = document.getElementsByClassName('edit-btn');
    for (const editBtn of editBtns) {
        editBtn.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        });
    };
});

// close all Btn 
const deleteTable = document.getElementById('delete-table');
const deleteButton = document.createElement('div');
deleteButton.innerHTML = `
    <button class="btn btn-danger mt-5" id="delete-all-btn">Delete All</button>
    `;
deleteTable.appendChild(deleteButton);

document.getElementById('delete-all-btn').addEventListener('click', function () {
    const tableData = document.getElementById('table-date');
    tableData.style.display = 'none';
});