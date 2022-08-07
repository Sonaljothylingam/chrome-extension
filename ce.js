let myLeads=["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inpele=document.getElementById("input-el")
const inpbtn=document.getElementById("input-btn")

inpbtn.addEventListener("click",function(){
    //const val = document.querySelector('input').value;
    myLeads.push(inpele.value)
    console.log(myLeads)
})
for(let i=0;i<myLeads.length;i++){
    console.log(myLeads[i])
}