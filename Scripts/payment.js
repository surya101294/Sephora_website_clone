let form =document.getElementById("cardDetail")
form.addEventListener("submit", handlePayment)

function handlePayment(event){
    event.preventDefault()
    let cardnum=document.getElementById('cardnum').value 
    let name=document.getElementById('name').value
    let expirydate=document.getElementById('expirydate').value
    let cvv=document.getElementById('cvv').value
    let btn=document.getElementById("submit")
    btn.onclick=()=>{
        if(cardnum.length<16){
            alert("Please fill 16 digit card number")
        }
        else if(cvv.length<3 || cvv.length>3){
            alert("Please fill correct 3 digit CVV")
        }
        else{
            alert("Hurray!! Your Order is placed successful.!!")
            
            localStorage.removeItem("cartData")
            window.location.href="index.html"

        }
    }
}