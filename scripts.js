alert(document.lastModified)

document
    .getElementById('btn_win')
    .addEventListener('click', function () {
        alert("window");
    })

document
    .getElementById('btn_nav')
    .addEventListener('click', function () {
        alert("Браузер: " + navigator.appName +
            "\nВерсия: " + navigator.appVersion);
    })

document
    .getElementById('btn_loc')
    .addEventListener('click', function () {
        alert("Пользователь: " + location.hostname +
            "\nАдрес файла: " + location.href);
    })

document
    .getElementById('btn_scr')
    .addEventListener('click', function () {
        alert("Ширина экрана: " + screen.width +
            "\nВысота экрана: " + screen.height);
    })

function MouseOn(target) {
    target.style.color = 'red';
    target.style.marginRight = "3cm";
    target.style.textIndent = "2.5cm";
}

function MouseOff(target) {
    target.style.color = '';
    target.style.marginRight = '';
    target.style.textIndent = '';
}

function changeCellStyle(cell) {
    if (cell.classList.contains("mystyle"))
        cell.className = "mystyle2";
    else
        cell.className = "mystyle";
}

function hideMiddleImage() {
    var middleImage = document.getElementsByName("image2")[0];
    middleImage.style.display = "none";
}

function showMiddleImage() {
    var middleImage = document.getElementsByName("image2")[0];
    middleImage.style.display = "inline";
}

function swapImages() {
    var topImage = document.getElementsByName("image1")[0];
    var bottomImage = document.getElementsByName("image3")[0];

    var tempZIndex = topImage.style.zIndex;
    topImage.style.zIndex = bottomImage.style.zIndex;
    bottomImage.style.zIndex = tempZIndex;
}