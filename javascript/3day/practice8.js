'use strict';

function changeColor(){
  const red = Math.floor(Math.random()*(255+1));
  const green = Math.floor(Math.random()*(255+1));
  const brue = Math.floor(Math.random()*(255+1));

  // return "rgb("+red+","+green+","+brue+")";
  return `rgb(${red},${green},${brue}`; //문자열 템플릿
}

for(let i=0; i<16; i++){
  let bgColor = changeColor();
  let str = `<div style="background-color:${bgColor}">${bgColor}</div>`;
  document.write(str);
}