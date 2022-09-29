//첫번째 배너를 제외하고 숨김
let wrapList = document.querySelectorAll('#roll_banner_wrap dd');
console.log(wrapList);
//NodeList(4) [dd, dd, dd, dd]

wrapList.forEach((element, index) => {
  //   console.log(element);
  //모든 dd를 가져온다
  //   if (index == 0) element.style.display = 'block';
  element.style.display = 'none';
});

wrapList[0].style.display = 'block';

//첫 번째 버튼의 <a>를 저장 //기본적으로 1번에 저장(쿼리셀럭터는)
let onBtn = document.querySelector('#roll_banner_wrap dt a');

//1~4버튼을 클릭할때
let bannerList = document.querySelectorAll('#roll_banner_wrap dt a');
//querySelectorAll 하면 4개 다 가져옴
bannerList.forEach((element, index) => {
  element.onclick = function () {
    //1.<dd>모두감춤
    let bannerSub = document.querySelectorAll('#roll_banner_wrap dd');
    // console.log(bannerSub.length);
    bannerSub.forEach((element) => {
      element.style.display = 'none';
    });

    //2.onBtn에 하위 요소 <img>에 'src'속성을 비활성화 이미지로 변경
    let srcOverOut = onBtn.querySelector('img').getAttribute('src');
    // images/pop_btn_1_over.gif
    onBtn
      .querySelector('img')
      .setAttribute('src', srcOverOut.replace('over.gif', 'out.gif'));
    //3.클릭한 버튼에 해당하는 <dd>배너 요소만 보이기
    bannerSub[index].style.display = 'block';

    //4.클릭한 <a>에 하위 <img>에 'src'속성의 값을 활성화 이미지로 변경
    let srcOutOver = element.querySelector('img').getAttribute('src');
    element
      .querySelector('img')
      .setAttribute('src', srcOutOver.replace('out.gif', 'over.gif'));

    //5.클릭 이벤트가 발생한 버튼을 <a>를 변수onBtn에 할당
    onBtn = element;

    //<a>에 링크를차단
    return false;
  };
});
