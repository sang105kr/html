'use strict';
self.addEventListener("message",function(evt){
  //1)메인태스크로 부터 데이터 수신
  const receivedData = evt.data;

  //2)계산
  const result = receivedData.val1 * receivedData.val2;
  //3)처리결과를 메인 타스크로 전송

  self.postMessage(result);

},false);