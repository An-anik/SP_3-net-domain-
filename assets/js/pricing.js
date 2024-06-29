function changeColor(columnId) {
    const column = document.getElementById(columnId);
    column.style.backgroundColor = getRandomColor();
}

function resetColors() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.style.backgroundColor = '#f8f9fa'; // Reset to original color
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}