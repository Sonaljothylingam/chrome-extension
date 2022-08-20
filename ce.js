let myLeads = [] //an array
const inpele = document.getElementById("input-el")   //the type space 
const inpbtn = document.getElementById("input-btn")   //save btn 
const ulEl = document.getElementById("ul-el")         //unordered list

inpbtn.addEventListener("click", function () {
    myLeads.push(inpele.value) //pushes the value of type space to array
    renderLeads()
    inpele.value=""; //clear out the input field
})

function renderLeads() {
    //Create a variable, listItems, to hold all the HTML for the list items
    // Assign it to an empty string to begin with
    let listItems = " "

    // Render the leads in the unordered list using ulEl.textContent
    for (let i = 0; i < myLeads.length; i++) {
    
       // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
      //template strings
      listItems += `<li>
      <a href=' ${ myLeads[i] } ' target='_blank'>  ${myLeads[i]}  
      </a>
      </li>`
    }
    // Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
   
}