// Create two variables:
// myLeads -> should be assignd to an empty array
let myLeads = [];
// inputEl -> should be assigned to the text input field
const inputEl = document.getElementById("input-el"); // const cannot be re-assigned
// Retrieve element by ID
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
// Grab unordered list and store in const variable unorderedList
const unorderedList = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// Check if leadsFromLocalStorage is truthy
// If truthy, set myLeads to its value and call render()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// Add event listener for tabs button
tabBtn.addEventListener("click", function () {
  // Return variable will have one entry since only one tab can be active
  // The function below triggers when Chrome has located the tab that's active
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // save URL
    myLeads.push(tabs[0].url); // fetch url value of object
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); // stringify changes array to string
    render(myLeads);
  });
});

// Add an event listener for delete button
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear(); // clears localstorage
  myLeads = []; // clear array myLeads
  render(myLeads); // call to clear DOM
  // Verify deletion in localstoage
  console.log(localStorage.getItem("myLeads"));
});
// console.log(`Parsed: ${leadsFromLocalStorage}`);
// Push value, any web address, to myLeads array when input button is clicked
inputBtn.addEventListener("click", function () {
  // Push entered value in input field into the array
  myLeads.push(inputEl.value);
  inputEl.value = ""; // clear input field
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  // Verify that localStorage.setItem works
  console.log(localStorage.getItem("myLeads"));
});

function render(leads) {
  // Create variable, listItems, to hold all HTML for list items
  // Assign it to an empty string to begin with
  let listItems = " ";
  for (let i = 0; i < leads.length; i++) {
    //  Add item to listItem using template literals
    listItems += `
    <li>
        <a target ='_blank' href=' ${leads[i]}'> 
            ${leads[i]}
        </a>
    </li>`;
  }
  // Render listItems inside the unordered list
  // innerHTML allows manipulation of HTML by getting or setting HTML contained within the element
  unorderedList.innerHTML = listItems;
}
