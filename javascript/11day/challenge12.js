'use strict';
//이벤트 타겟
const $btnSave    = document.getElementById('btn-save');
const $btnSearch  = document.getElementById('btn-search');
const $btnDelete  = document.getElementById('btn-delete');
const $btnView    = document.getElementById('btn-view');

const $eng = document.getElementById('eng');
const $kor = document.getElementById('kor');

//이벤트 핸들러
//단어저장
const saveHandler   = evt => {
  console.log('단어저장');
  //영어단어 존재하는지 체크
  if(localStorage.getItem($eng.value) != null){
    if(confirm('수정하겠습니까?')){
      //영어단어저장
      localStorage.setItem($eng.value,$kor.value);
    }else{
      return;
    }
  }
  //영어단어저장
  localStorage.setItem($eng.value,$kor.value);

};
//단어검색
const searchHandler = evt => {
  console.log('단어검색');
  const searchedWord = localStorage.getItem($eng.value);
  if(searchedWord == null) {
    alert('검색어를 찾치 못했습니다');
    $kor.value = '';
    $eng.focus();
    return;
  }
  $kor.value = searchedWord;
};
//단어삭제
const deleteHandler = evt => {
  console.log('단어삭제');
  const searchedWord = localStorage.getItem($eng.value);
  if(searchedWord == null) {
    alert('검색어를 찾치 못했습니다');
    $kor.value = '';
    $eng.focus();
    return;
  }  
  localStorage.removeItem($eng.value);
};
//전체보기
const viewHandler   = evt => {
  console.log('전체보기');
  window.open("challenge12-3.html","_blak","top=100,left=100,width=600,height=500");
};

//이벤트 리스너
$btnSave.addEventListener("click",saveHandler,false);
$btnSearch.addEventListener("click",searchHandler,false);
$btnDelete.addEventListener("click",deleteHandler,false);
$btnView.addEventListener("click",viewHandler,false);