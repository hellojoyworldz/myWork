<?php
include './assets/data.php';
?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>퍼블리싱 사이트 | 곽선아</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="./assets/css/common.css">
    <link rel="stylesheet" href="./assets/css/response.css">
</head>

<body>
    <header class="header">
        <h1 class="header__logo">Hello 👋<br />My Publishing Site</h1>
        <div class="header__desc">
            <p class="item">작업물 완료 기간(사이트 오픈)은 짧게는 1개월 미만, 길게는 6개월 이상입니다.</p>
            <p class="item">실질적인 작업 기간은 1-5일 이내입니다.</p>
            <p class="item">실무에서 100% 참여한 신규 작업물만 나열하였습니다.</p>
        </div>
        <nav class="gnb">
            <div class="gnb__list js-filters-group js-button-group">
                <button type="button" data-filter="*" class="gnb__item active">전체</button>
                <button type="button" data-filter=".response" class="gnb__item">반응형</button>
                <button type="button" data-filter=".desktop" class="gnb__item">데스크탑</button>
                <button type="button" data-filter=".mobile" class="gnb__item">모바일</button>
            </div>
        </nav>
    </header>

    <main class="main">
        <section class="card__list--type01">
            <h2 class="screenHide">퍼블리싱 작업물 리스트</h2>
            <ul class="card__list js-list">
                <?php
                for ($i = 0; $i > 2; $i++) {
                ?>
                <li class="card__item js-item response" data-category="response">
                    <a href="">
                        <div class="card__header">
                            <strong class="card__tit"><?= $item ?></strong>
                            <span class="card__date">2021.03.04 ~ 2022.04.05</span>
                            <span class="card__view">바로가기</span>
                        </div>
                        <div class="card__body">
                            <div class="card__thumb">
                                <img class="card__thumbImg" src="https://source.unsplash.com/random/1240x874?sig=101"
                                    width="1240" height="874" alt="">
                            </div>
                        </div>
                    </a>
                    <div class="card__footer">
                        <div class="card__type">
                            <a href="#" class="card__typeLink type--response">반응형</a>
                            <a href="#" class="card__typeLink type--desktop">데스크탑</a>
                            <a href="#" class="card__typeLink type--mobile">모바일</a>
                        </div>
                    </div>
                </li>
                <?php
                }
                ?>
            </ul>
        </section>
    </main>

    <footer class="footer">
        <h2 class="footer__header"></h2>
        <div></div>
        <address class="footer__info">
            <span class="item">hellojoyworldz@gmail.com</span>
            <span class="item">+82 10 9783 6375</span>
        </address>
        <div class="footer__copy">
            <span class="item">All rights reserved© 2022</span>
            <span class="item">Made with love in Korea, Seoul</span>
        </div>
    </footer>

    <script src="./assets/js/common.js"></script>
    <script src="./assets/js/global.js"></script>

</body>

</html>