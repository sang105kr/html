'use strict';

const $edu = document.getElementById('edu');
const $btn = document.getElementsByClassName("btn")[0];
const $btn2 = document.getElementsByClassName("btn2")[0];

$btn.addEventListener("click",function(){
 console.log('버튼 클릭됨!!');
 $edu.style.backgroundColor = "green";
 $edu.style.color = "white";
 $edu.style.fontSize = "2em";     
}); 

$btn2.addEventListener("click",function(){
  $edu.innerHTML = document.getElementById('contents').value;
});

// console.log($edu.parentElement);
// console.log($edu.nextElementSibling);
// console.log($btn.previousElementSibling);

// console.log($edu.parentElement.parentElement);

// console.log(document.getElementsByTagName('body')[0].children)

// const childrenOfBody = document.getElementsByTagName('body')[0].children;

// for(let i=0; i<childrenOfBody.length; i++) {
//   childrenOfBody[i].style.backgroundColor="#333";
// }