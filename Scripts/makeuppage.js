let data = JSON.parse(localStorage.getItem('cartData')) || []
var makeup = [
  {
    image_url: "https://cdn02.nnnow.com/web-images/medium/styles/KO2GNHYI7VN/1539589546533/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Cream Lip Stain-86 Engish Rose",
    price: 1220,
    desc: "4 more offers"
  },
  {
    image_url: "https://cdn16.nnnow.com/web-images/medium/styles/CH65NKWC2ZU/1533201155002/1.jpg",
    offer: "OFFER",
    collection: "SEPHORA COLLECTION",
    name: "Glow Perfection Foundation-25 Beige",
    price: 1352,
    desc: "4 more offers"
  },
  {
    image_url: "https://cdn14.nnnow.com/web-images/medium/styles/E5LHWCKCK3S/1539589327450/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Cream Lip Stain-84 Rose Redux",
    price: 1359,
    desc: "2 more offers"
  },
  {
    image_url: "https://cdn10.nnnow.com/web-images/medium/styles/JDV714RL1OH/1539586268872/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Color Hit Nail Polish-L178 Rose",
    price: 440,
    desc: "4 more offers"
  },
  {
    image_url: "https://cdn05.nnnow.com/web-images/medium/styles/V21Z2LOB7HR/1533204761626/1.jpg",
    offer: "OFFER",
    collection: "SEPHORA COLLECTION",
    name: "Beauty Amlifier Smoothing",
    price: 1310,
    desc: "4 more offers"
  },
  {
    image_url: "https://cdn16.nnnow.com/web-images/medium/styles/AGBF6Y49601/1530091020963/1.jpg",
    offer: "OFFER",
    collection: "STILA",
    name: "Stay All Day WTP LIquid Eye Liner -Alloy",
    price: 2100,
    desc: "2 more offers"
  },
  {
    image_url: "https://cdn09.nnnow.com/web-images/medium/styles/3TZGQN7JDXJ/1539596746057/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Colorful Mono Eye Shadow-258",
    price: 900,
    desc: "3 more offers"
  },
  {
    image_url: "https://cdn02.nnnow.com/web-images/medium/styles/KO2GNHYI7VN/1539589546533/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Cream Lip Stain-86 Engish Rose",
    price: 1220,
    desc: "4 more offers"
  },
  {
    image_url: "https://cdn16.nnnow.com/web-images/medium/styles/CH65NKWC2ZU/1533201155002/1.jpg",
    offer: "OFFER",
    collection: "SEPHORA COLLECTION",
    name: "Glow Perfection Foundation-25 Beige",
    price: 1352,
    desc: "4 more offers"
  },
  {
    image_url: "https://cdn14.nnnow.com/web-images/medium/styles/E5LHWCKCK3S/1539589327450/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Cream Lip Stain-84 Rose Redux",
    price: 1359,
    desc: "2 more offers"
  },
  {
    image_url: "https://cdn10.nnnow.com/web-images/medium/styles/JDV714RL1OH/1539586268872/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Color Hit Nail Polish-L178 Rose",
    price: 440,
    desc: "4 more offers"
  },
]
let container = document.getElementById("itemcontainer")
append(makeup)
function append(data) {
  container.innerHTML = null;
  data.forEach((el) => {
    let card = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.image_url;
    let offer = document.createElement("p")
    offer.innerText = el.offer
    let collection = document.createElement("h6")
    collection.innerText = el.collection
    let name = document.createElement("h4")
    name.innerText = el.name;
    let price = document.createElement("h4")
    price.innerText = `Price: ${el.price} Rs. `;
    let desc = document.createElement("p")
    desc.innerText = el.desc;
    let btn = document.createElement("button")
    btn.innerText = "Add To Cart";
    btn.onclick = () => {
      addData(el)
      btn.innerText = "Added to cart"
      btn.style.backgroundColor = "green"
    }
    card.append(img, offer, collection, name, price, desc, btn)

    container.append(card)

  })
}

const addData = (el => {
  data.push(el)
  localStorage.setItem("cartData", JSON.stringify(data))
})

// filters
let f1 = document.getElementById("less500price")
f1.onclick = () => {
  let filterArr = makeup.filter(function (el) {
    return el.price < 500
  })
  append(filterArr)
}
let f2 = document.getElementById("inbetweenprice")
f2.onclick = () => {
  let filterArr = makeup.filter(function (el) {
    return el.price > 500 && el.price < 2000
  })
  append(filterArr)
}
let f3 = document.getElementById("above2000price")
f3.onclick = () => {
  let filterArr = makeup.filter(function (el) {
    return el.price > 2000
  })
  append(filterArr)
}
let option = document.getElementById("sort")
option.onchange = () => {
  if (option.value == "lowtohigh") {
    let makeupdata = makeup.sort((a, b) => {
      return a.price - b.price
    })
    append(makeupdata)
  }

  else if (option.value == "hightolow") {
    let makeupdata = makeup.sort((a, b) => {
      return b.price - a.price
    })
    append(makeupdata)
  }
  else {
    append(makeup)
  }

}