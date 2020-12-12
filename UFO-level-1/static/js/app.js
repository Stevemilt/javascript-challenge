// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

tableData.forEach(function (sightingData) {
    console.log(sightingData);
});

tableData.forEach((sightingData) => {
    var row = tbody.append("tr");
    Object.entries(sightingData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form

function runEnter() {
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputElement);
    console.log(tableData);
    console.log(inputValue);
    var filteredData = tableData;
    if ( inputValue.length != 0 ) {
        filteredData= tableData.filter(item => item.datetime === inputValue);
  }
    console.log(filteredData);
    tbody.html("");
filteredData.forEach((sightingData) => {
    var row = tbody.append("tr");
    Object.entries(sightingData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
};