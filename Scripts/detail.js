let form=document.getElementById("form")
form.addEventListener("submit", bdetails)
function bdetails(e){
    e.preventDefault()
let name=document.getElementById("name").value 
let add=document.getElementById("add").value
let mbl=document.getElementById("mbl").value
let pin=document.getElementById("pin").value

    let detail=document.getElementById("detail")
    detail.innerText=`Dear ${name}, your Order is confirmed to ship to the ${add} and ${pin} with mobile no. ${mbl}`
    alert("kindly, click Ok to go to Payment Page")
    
    window.location.href="payment.html"
}
