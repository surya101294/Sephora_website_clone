let cartItems=JSON.parse(localStorage.getItem("cart_item"))|| []
// let total_price= cartItems.reduce(function (acc,el){
//     return acc+(Number(el.price));
// },0);
document.querySelector("h2>span").innerText= cartItems.length ;
// document.querySelector("h3>span").innerText= total_price;


cartItems.forEach( function(el,i) {
     
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

    let del=document.createElement("p")
        del.innerText="Delete"
        addEventListener("click", function(event){
        event.target.parentNode.remove()
        console.log(event)
        deletefun(event)
        });    
    card.append(img,offer,collection,name,price,desc,del)
    document.querySelector(".item-container").append(card)
    
    localStorage.setItem("Data", "products" );
    
});
function deletefun(i){
    // console.log(i)
    cartItems.splice(i,1)
    console.log(cartItems);
    event.target.parentNode.remove();
    document.querySelector("h2>span").innerText= cartItems.length ;
    // document.querySelector("h3>span").innerText= total_price;
    window.reload();
}

