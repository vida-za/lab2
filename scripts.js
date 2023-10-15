//alert(document.lastModified)

document
    .getElementById('btn_win')
    .addEventListener('click', function(){
        alert("window");
    })

document
    .getElementById('btn_nav')
    .addEventListener('click', function() {      
        alert("Браузер: " + navigator.appName + 
        "\nВерсия: " + navigator.appVersion);
    })

document
    .getElementById('btn_loc')
    .addEventListener('click', function(){
        alert("Пользователь: " + location.hostname +
        "\nАдрес файла: " + location.href);    
    })

document
    .getElementById('btn_scr')
    .addEventListener('click', function(){
        alert("Ширина экрана: " + screen.width +
        "\nВысота экрана: " + screen.height);
    })