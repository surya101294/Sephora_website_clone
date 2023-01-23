let cartArr=JSON.parse(localStorage.getItem('cartData'))
console.log(cartArr)
function setTotalPrice(){
let total_price= cartArr.reduce(function (acc,el){
    return acc+(Number(el.price));
},0);
document.querySelector("h2>span").innerText= cartArr.length ;
document.querySelector("h3>span").innerText= total_price;
}

let container=document.getElementById("items")
appendCart(cartArr)
function appendCart(data){
    container.innerHTML=null;
data.forEach( function(el,i) { 
    let card=document.createElement("div")
    let img=document.createElement("img")
    img.src= el.image_url;
    let offer=document.createElement("p")
    offer.innerText=el.offer
    let collection=document.createElement("h6")
    collection.innerText=el.collection
    let name=document.createElement("h4")
    name.innerText=el.name;
    let price=document.createElement("h4")
    price.innerText=(el.price);
    let desc=document.createElement("p")
    desc.innerText=el.desc; 

    let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click", function(){
        // console.log(i)
        deletefun(i)
        });    
    card.append(img,offer,collection,name,price,desc,btn)
    container.append(card)
    
});
}
function deletefun(i){
    cartArr.splice(i,1)  
    localStorage.setItem("cartData", JSON.stringify(cartArr))
    appendCart(cartArr)
    setTotalPrice()
    
}
setTotalPrice()

