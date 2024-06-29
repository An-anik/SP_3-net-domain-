let entries = [];

function createEntry() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const review = document.getElementById('review').value;
    const objection = document.getElementById('objection').value;

    if (name && email && review && objection) {
        const entry = { id: Date.now(), name, email, review, objection };
        entries.push(entry);
        displayEntries();
        clearForm();
    } else {
        alert('Please fill out all fields.');
    }
}

function displayEntries() {
    const tableBody = document.querySelector('#entriesTable tbody');
    tableBody.innerHTML = '';

    entries.forEach(entry => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.review}</td>
            <td>${entry.objection}</td>
            <td>
                <button class="btn btn-warning btn-sm edit" onclick="editEntry(${entry.id})">Edit</button>
                <button class="btn btn-danger btn-sm delete" onclick="deleteEntry(${entry.id})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('review').value = '';
    document.getElementById('objection').value = '';
}

function editEntry(id) {
    const entry = entries.find(entry => entry.id === id);

    if (entry) {
        document.getElementById('name').value = entry.name;
        document.getElementById('email').value = entry.email;
        document.getElementById('review').value = entry.review;
        document.getElementById('objection').value = entry.objection;

        deleteEntry(id);
    }
}

function deleteEntry(id) {
    entries = entries.filter(entry => entry.id !== id);
    displayEntries();
}