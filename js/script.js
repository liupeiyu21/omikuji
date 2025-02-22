"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const omikuji = document.querySelector(".omikuji");
    const button = document.querySelector("button");
    const results = ["daikichi.jpg", "chuukichi.jpg", "shoukichi.jpg", "kyou.jpg"];

    //左手と右手を作成
    const leftHand = document.createElement("img");
    leftHand.src = "./picture/left_hand.png";
    leftHand.classList.add("hand", "left-hand");
    leftHand.style.position = "fixed";
    leftHand.style.left = "-100px";
    leftHand.style.bottom = "0";
    leftHand.style.transition = "transform 2s ease-in-out";
    document.body.appendChild(leftHand);

    const rightHand = document.createElement("img");
    rightHand.src = "./picture/right_hand.png";
    rightHand.classList.add("hand", "right-hand");
    rightHand.style.position = "fixed";
    rightHand.style.right = "-100px";
    rightHand.style.bottom = "0";
    rightHand.style.transition = "transform 2s ease-in-out";
    document.body.appendChild(rightHand);

    button.addEventListener("click", function () {
        //初期位置
        omikuji.style.transition = "none";
        omikuji.style.transform = "translate(0,0)";
        button.style.display = "none"; //ボタンを非表示する

        moveHands();//moveHands関数を呼び出し、手の移動を開始します。
    });

    function moveHands() {
        leftHand.style.transform = "translate(400px, -150px)";
        rightHand.style.transform = "translate(-400px, -150px)";

        setTimeout(() => {
            attachHandsToOmikuji();
        }, 2000); //2秒後に attachHandsToOmikuji関数を呼び出します。
    }

    function attachHandsToOmikuji() {
        leftHand.style.transition = "none";
        rightHand.style.transition = "none";
        moveOmikujiWithHands(3);//引数３で呼び出し、おみくじと手を一緒に動かす
    }

    function moveOmikujiWithHands( count ) {
        if (count === 0) {
            moveLeft();
            return;
        }

        omikuji.style.transform = "translateY(-10px)";
        leftHand.style.transform = "translate(400px, -140px)";
        rightHand.style.transform = "translate(-400px, -140px)";

        setTimeout(() => {
            omikuji.style.transfrom = "translateY(10px)";
            leftHand.style.transform = "translate(400px, -160px)";
            rightHand.style.transform = "translate(-400px, -160px)";

            setTimeout(() => {
                omikuji.style.transform = "translateY(0)";
                leftHand.style.transform = "translate(400px, -150px)";
                rightHand.style.transform = "translate(-400px, -150px)";
                setTimeout(() => moveOmikujiWithHands(count - 1), 300);
            }, 300);
        }, 300);
    }

    function moveLeft()  {
        omikuji.style.transform = "translateX(-20px)";
        leftHand.style.transform = "translate(380px, -150px)";
        rightHand.style.transform = "translate(-420px, -150px)";
        setTimeout(() => {
            resetPosition();
        }, 500);
    }

    function resetPosition() {
        omikuji.style.transform = "translate(0, 0)";
        leftHand.style.transform = "translate(400px, -150px)";
        rightHand.style.transform = "translate(-400px, -150px)";
        setTimeout(() => {
            const randomResult = results[Math.floor(Math.random() * results.length)];
            omikuji.src = `./picture/${randomResult}`;
            enlargeResult();
        }, 500)
    }

    function enlargeResult() {
        omikuji.style.transform = "transform 0.5s ease-in-out";
        omikuji.style.transform  = "sclae(2)";
    }
})

