// Create two variables:
// myLeads -> should be assignd to an empty array
let myLeads = ["www.hello.com", "www.linkedin.com", "www.facebook.com"];
// inputEl -> should be assigned to the text input field
const inputEl = document.getElementById("input-el"); // const cannot be re-assigned
// Retrieve element by ID
const inputBtn = document.getElementById("input-btn");
// Grab unordered list and store in const variable unorderedList
const unorderedList = document.getElementById("ul-el");

// Push value, any web address, to myLeads array when input button is clicked

inputBtn.addEventListener("click", function () {
  // Push entered value in input field into the array
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Create variable, listItems, to hold all HTML for list items
// Assign it to an empty string to begin with
let listItems = " ";
for (let i = 0; i < myLeads.length; i++) {
  // Add item to listItems variable
  listItems += "<li>" + myLeads[i] + "</li>";
}
// Render listItems inside the unordered list
// innerHTML allows manipulation of HTML by getting or setting HTML contained within the element
unorderedList.innerHTML = listItems;
