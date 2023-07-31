function changeTableBorder() {
    // Get the table element
    const table = document.getElementById('myTable');

    // Get the current border value (if it's not set, the default is "1")
    const currentBorder = table.getAttribute('border');

    // Check if the current border value is "1" (or any specific value you want to check)
    if (currentBorder === '1') {
        // Change the border value to "2" (or any desired value)
        table.setAttribute('border', '2');
    } else {
        // Change the border value back to "1" (or any desired default value)
        table.setAttribute('border', '1');
    }
}
