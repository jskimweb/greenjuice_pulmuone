window.onload = function () {
  // 헤더상단 로그인 클릭 시 로그인창 보이기/숨기기
  const headerLogin = $('.header-top-right li').eq(0).children();
  const login = $('.login');
  const loginId = $('.login__id');
  const loginClose = $('.login__close');

  headerLogin.click(function () {
    login.show();
    loginId.focus();
    $('html, body').css('overflow', 'hidden');
  });

  loginClose.click(function () {
    login.hide();
    $('html, body').removeAttr('style');
  });

  // 검색창 보이기/숨기기
  const iconSrch = $('.my-menu__icon--srch');
  const srch = $('.srch');
  const srchClose = $('.srch__close');
  const srchInput = $('.srch input');
  const blackBg = $('.black-bg');

  iconSrch.click(function () {
    srch.show();
    blackBg.show();
    srchInput.focus();
  });

  srchClose.click(function () {
    srch.hide();
    blackBg.hide();
  });

  // 검색창의 바깥영역 클릭 시 숨기기
  const body = $('.body');
  const header = $('.header');

  body.click(function () {
    srch.hide();
    blackBg.hide();
  });
  
  header.click(function (event) {
    event.stopPropagation();
  });

  // 위시리스트 클릭 시 로그인창 보이기
  const iconWish = $('.my-menu__icon--wish');

  iconWish.click(function () {
    login.show();
    loginId.focus();
    $('html, body').css('overflow', 'hidden');
  });

  // Main slide 슬라이드
  new Swiper('.sw-main-slide', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    pagination: {
      el: '.sw-main-slide__pg',
      type: 'fraction',
    },
  });

  // Personal 슬라이드
  new Swiper('.sw-personal', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 500,
    pagination: {
      el: '.sw-personal__pg',
      clickable: true,
    },
  });

  // 로그인하기 클릭 시 로그인창 보이기
  const personalLogin = $('.personal__login');

  personalLogin.click(function () {
    login.show();
    loginId.focus();
    $('html, body').css('overflow', 'hidden');
  });

  // Best 탭메뉴
  const age = $('.age');
  const ageCover = $('.age-cover');
  const ageCoverPos = [0, 56, 112, 168, 224];
  const prdCont = $('.prd-cont');
  const prdConts = [$('.prd-cont01'), $('.prd-cont02'), $('.prd-cont03'), $('.prd-cont04'), $('.prd-cont05')];
  
  $.each(age, function (index) {
    $(this).click(function () {
      age.removeClass('age--focused');
      $(this).addClass('age--focused');
      ageCover.css('top', ageCoverPos[index]);
      prdCont.hide();
      prdConts[index].show();
    });
  });

  // Banner Slide 슬라이드
  new Swiper('.sw-banner-slide', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
  });

  // family-list 보이기/숨기기
  const fam = $('.family');
  const famRotate = 'family--rotate';
  const famList = $('.family-list');
  const famListShow = 'family-list--show';

  fam.click(function () {
    $(this).toggleClass(famRotate);
    famList.toggleClass(famListShow);
  });

  // Go-top
  const goTop = $('.go-top');
  const goTopShow = 'go-top--show';

  goTop.click(function () {
    $('html, body').animate({
      scrollTop: 0,
    });
  });

  // Go-top 보이기/숨기기
  $(window).scroll(function () {
    let winSrcTop = $(window).scrollTop();

    if (winSrcTop > 0) {
      goTop.addClass(goTopShow);
    } else {
      goTop.removeClass(goTopShow);
    }
  });
}