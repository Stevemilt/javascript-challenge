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
    // console.log(sightingData);
});

tableData.forEach((sightingData) => {
    var row = tbody.append("tr");
    Object.entries(sightingData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
var inputDatetime = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

var filters = {};
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
inputDatetime.on("change", updateFilter);
inputCity.on("change", updateFilter);
inputState.on("change", updateFilter);
inputCountry.on("change", updateFilter);
inputShape.on("change", updateFilter);

function updateFilter() {
    var changeElement = d3.select(this);
    var filterId = changeElement.attr("id");
    var elementValue = changeElement.property("value");
    console.log(elementValue);
    console.log(filterId);
    if (elementValue) {
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
}

// Complete the event handler function for the form

function runEnter() {
    d3.event.preventDefault();

    var filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    tbody.html("");
filteredData.forEach((sightingData) => {
    var row = tbody.append("tr");
    Object.entries(sightingData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
};