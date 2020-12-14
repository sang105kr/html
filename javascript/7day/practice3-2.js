'use strict'
const $select = document.querySelector('select');
const selectUrl = (evt)=>{
  console.log(evt.target);
  const $url = evt.target.options[evt.target.selectedIndex].value;
  //다른 새창
  //window.open($url,"_blank","width=500,height=400");
  //동일한 새창
  window.open($url,"win","width=500,height=400");
}
$select.addEventListener("change",selectUrl,false);
