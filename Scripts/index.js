let i=0;
let j=8;
function next(){
   document.getElementById("content"+ (i+1)).classList.remove("active1")
   i=(j+i+1)%j;
   document.getElementById("content"+(i+1)).classList.add("active1") 
   indicator(i+1);
}
function prev(){
   document.getElementById("content"+ (i+1)).classList.remove("active1")
   i=(j+i-1)%j;
   document.getElementById("content"+(i+1)).classList.add("active1") 
   indicator(i+1);
}
let dots=document.querySelectorAll(".dot-container button")
//  console.log(dots)

function indicator(num){
   dots.forEach(function(dot){
       dot.style.backgroundColor="#c5c5c5";
       // dot.style.border="1px solid grey";
   });
   let s=document.querySelector(".dot-container button:nth-child(" +num+ ")")
   s.style.backgroundColor="grey";
}
let images=document.querySelectorAll(".image-container img")
console.log(images)
function dot(index){
   images.forEach(function(image){
        image.classList.remove("active1");
   });
   document.getElementById("content"+ index).classList.add("active1");
   i= index-1; 
   indicator(index);
}
