

$(".dropdown").click(function () {
    $(".dropdown dl").toggleClass("active")
})

$(".dropdown dl dd").click(function () {
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown dl").removeClass("active");
})


$(".btn").click(function () {

    window.location.href = "Bhuj.html";
})

$(".dropdownho").click(function () {
    $(".dropdownho dl").toggleClass("active")
})

$(".dropdownho dd dt").click(function () {
    var text1 = $(this).text();
    $(".input").text(text1);
    $(".dropdownho dl").removeClass("active")
})

// $(".btn").click(function () {
//     if ($(".input").text("Bhuj") === "Bhuj") {
//         window.location.href = "Bhuj.html";
//     }
//     elseif($(".input").text("Indore") === "Indore"){
//         window.location.href = "indore.html";
//     }
//     elseif($(".input").text("Bhagalpur") === "Bhagalpur"){
//         window.location.href = "bhagalpur.html";
//     }
// })


// $(".dropdownho dd dt").click(function(){
//     window.location.href
// })

var menuList = document.getElementById("menu-list");
menuList.style.maxHeight = '0px';

function togglemenu() {
    if (menuList.style.maxHeight == '0px') {
        menuList.style.maxHeight = '130px';
    }
    else {
        menuList.style.maxHeight = '0px';
    }
}