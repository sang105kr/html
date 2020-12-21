'use strict';
self.addEventListener("message",function(evt){
  let input = parseInt(evt.data);
  input++;
  self.postMessage(input);
  self.close();
},false);