var makeup=[
    {
    image_url:"https://cdn02.nnnow.com/web-images/medium/styles/KO2GNHYI7VN/1539589546533/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name:"Cream Lip Stain-86 Engish Rose",
    price: "Rs 1,220",
    desc:"4 more offers"
    },
    {
    image_url:"https://cdn16.nnnow.com/web-images/medium/styles/CH65NKWC2ZU/1533201155002/1.jpg",
    offer: "OFFER",
    collection: "SEPHORA COLLECTION",
    name:"Glow Perfection Foundation-25 Beige",
    price: "Rs 1,352",
    desc:"4 more offers"
    },
    {
    image_url:"https://cdn14.nnnow.com/web-images/medium/styles/E5LHWCKCK3S/1539589327450/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name:"Cream Lip Stain-84 Rose Redux",
    price: "Rs 1,300",
    desc:"2 more offers"
    },
    {
    image_url:"https://cdn10.nnnow.com/web-images/medium/styles/JDV714RL1OH/1539586268872/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name:"Color Hit Nail Polish-L178 Rose",
    price: "Rs 440",
    desc:"4 more offers"
    },
    {
    image_url:"https://cdn05.nnnow.com/web-images/medium/styles/V21Z2LOB7HR/1533204761626/1.jpg",
    offer: "OFFER",
    collection: "SEPHORA COLLECTION",
    name:"Beauty Amlifier Smoothing",
    price: "Rs 1,310",
    desc:"4 more offers"
    },
    {
    image_url:"https://cdn16.nnnow.com/web-images/medium/styles/AGBF6Y49601/1530091020963/1.jpg",
    offer: "OFFER",
    collection: "STILA",
    name:"Stay All Day WTP LIquid Eye Liner -Alloy",
    price: "Rs 2,100",
    desc:"2 more offers"
    },
    {
    image_url:"https://cdn09.nnnow.com/web-images/medium/styles/3TZGQN7JDXJ/1539596746057/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name:"Colorful Mono Eye Shadow-258",
    price: "Rs 900",
    desc:"3 more offers"
    },
  ]
    let cartArray=JSON.parse(localStorage.getItem("cart_item")) || []
  makeup.forEach(function(el){
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
    price.innerText=el.price;
    let desc=document.createElement("p")
    desc.innerText=el.desc;

    let btn=document.createElement("button")
    btn.innerText="Add To Cart"
    btn.addEventListener("click", function(){
        addToCartfun(el);
      } );
      card.append(img,offer,collection,name,price,desc,btn)
      // console.log(el, "check")
     document.querySelector("#itemcontainer").append(card)
      
    // localStorage.setItem("Data", "products" );
   function addToCartfun(el){
     cartArray.push(el)
    //  console.log(el)
     localStorage.setItem("cart_item", JSON.stringify(cartArray))
   }
    // console.log(card)
    console.log(cartArray)
})