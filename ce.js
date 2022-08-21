let myLeads = [] //an array
const inpele = document.getElementById("input-el")   //the type space 
const inpbtn = document.getElementById("input-btn")   //save btn 
const ulEl = document.getElementById("ul-el")         //unordered list
const delbtn = document.getElementById("delete-btn")   //delete btn
const savbtn=document.getElementById("savetab")        //save tab btn
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  render(myLeads)
}

// savetab btn Log Per's LinkedIn URL to the console
savbtn.addEventListener("click",function(){
  //grab the url of the current tab and use chrome api
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})
 
})
//delete btn
delbtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  render(myLeads)

})

inpbtn.addEventListener("click", function () {
    myLeads.push(inpele.value) //pushes the value of type space to array
    inpele.value=""; //clear out the input field
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
      console.log(localStorage.getItem("myLeads"))
      render(myLeads)
    })

function render(leads) {
    //Create a variable, listItems, to hold all the HTML for the list items
    // Assign it to an empty string to begin with
    let listItems = " "

    // Render the leads in the unordered list using ulEl.textContent
    for (let i = 0; i < leads.length; i++) {
    
       // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
      //template strings
      listItems += `<li>
      <a href=' ${ leads[i] } ' target='_blank'>  ${leads[i]}  
      </a>
      </li>`
    }
    // Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
   
}