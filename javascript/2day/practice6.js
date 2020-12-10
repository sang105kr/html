'use strict'
let flag = false;
while(!flag){
  const str = prompt('문자열입력하시오(&:구분자사용)');
  if (str.indexOf('&') != -1) {
    flag = true;
    const array = str.split('&');
    for(let i=0; i<array.length; i++){
      console.log(array[i]);
    }
  }else{
    alert('&를 포함한 문자열을 입력하세요!');
  }
}