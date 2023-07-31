function addRow() {
    
    const table = document.getElementById('myTable');
    const tbody = table.getElementsByTagName('tbody')[0];

    
    const newRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    

    
    cell1.textContent = 'Data 1';
    cell2.textContent = 'Data 2';
    

    
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);


    
    tbody.appendChild(newRow);
}
