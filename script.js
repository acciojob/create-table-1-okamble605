function insert_Row() {
    // Get the table element by ID
    const table = document.getElementById("sampleTable");

    // Insert a new row at the beginning (index 0)
    const newRow = table.insertRow(0);

    // Insert two new cells into the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the text content for each new cell
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
