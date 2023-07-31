function removeSelectedOption() {
    // Get the dropdown list element
    const dropdown = document.getElementById('myDropdown');

    // Get the selected index
    const selectedIndex = dropdown.selectedIndex;

    // Check if an option is selected (selectedIndex = -1 means nothing is selected)
    if (selectedIndex !== -1) {
        // Remove the selected option from the dropdown list
        dropdown.remove(selectedIndex);
    }
}
