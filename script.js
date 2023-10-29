"use strict";

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let count=1;
next.addEventListener("click",()=>{
  if(count<circles.length){
    count++;
  }
  update()
})
prev.addEventListener("click",()=>{
  if(count>1){
    count--;
  }
  update()
})
const update=()=>{
circles.forEach((circles,index)=>{
  if(index<count){
    circles.classList.add("active")
  }
  else{
    circles.classList.remove("active")
  }
})
progress.style.width=`${(count-1)*33}%`
}
update()
