// from data.js
var tableData = data;


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");


    var filtered = tableData.filter(data => data.datetime === inputValue);

    var tbody = d3.select("tbody");


    // Arrow Functions 
    filtered.forEach((ufoFinder) => {
        var row = tbody.append("tr");
        Object.entries(ufoFinder).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}); 
