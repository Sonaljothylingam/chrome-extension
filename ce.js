let myLeads=["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inpele=document.getElementById("input-el")
const inpbtn=document.getElementById("input-btn")
// Grab the unordered list and store it in a const variable called ulEl
const ulEl=document.getElementById("ul-el")

inpbtn.addEventListener("click",function(){
    const val = document.querySelector('input').value;
     myLeads.push(inpele.value)
    console.log(myLeads)
})

//Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems=" "

// Render the leads in the unordered list using ulEl.textContent
for(let i=0;i<myLeads.length; i++){
   listItems += "<li> " +myLeads[i] + "</li>"
   }
   // Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML=listItems