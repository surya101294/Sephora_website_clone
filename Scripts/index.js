let i = 0;
let j = 8;
function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active1")
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active1")
  indicator(i + 1);
}
function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active1")
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active1")
  indicator(i + 1);
}
let dots = document.querySelectorAll(".dot-container button")
//  console.log(dots)

function indicator(num) {
  dots.forEach(function (dot) {
    dot.style.backgroundColor = "#c5c5c5";
    // dot.style.border="1px solid grey";
  });
  let s = document.querySelector(".dot-container button:nth-child(" + num + ")")
  s.style.backgroundColor = "grey";
}
let images = document.querySelectorAll(".image-container img")
console.log(images)
function dot(index) {
  images.forEach(function (image) {
    image.classList.remove("active1");
  });
  document.getElementById("content" + index).classList.add("active1");
  i = index - 1;
  indicator(index);
}


// <-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var makeup = [
  {
    image_url: "https://cdn02.nnnow.com/web-images/medium/styles/KO2GNHYI7VN/1539589546533/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Cream Lip Stain-86 Engish Rose",
    price:  1220,
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
    price:  900,
    desc: "3 more offers"
  },
  {
    image_url: "https://cdn02.nnnow.com/web-images/medium/styles/KO2GNHYI7VN/1539589546533/1.jpg",
    offer: "BEST SELLER",
    collection: "SEPHORA COLLECTION",
    name: "Cream Lip Stain-86 Engish Rose",
    price:  1220,
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
makeup.forEach(function (el) {
  let card = document.querySelector(".swiper-slide")
  let img = document.createElement("img")
  img.src = el.image_url;
  let offer = document.createElement("p")
  offer.innerText = el.offer
  let name = document.createElement("p")
  name.innerText = el.name;
  let price = document.createElement("p")
  price.innerText = `Price: ${el.price} rs.`;
  // let desc=document.createElement("p")
  // desc.innerText=el.desc;

    // card.append(img,offer,collection,name,price,desc)
  card.append(img, name, price)

  document.querySelector(".swiper-wrapper").append(card)

})