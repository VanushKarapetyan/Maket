window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

var isshow = false;
function myFunction(x) {
    x.classList.add("change");
    if (isshow === false) {
        document.querySelector(".burger_menu").classList.add("burger_display")
        setTimeout(function () {
            isshow = true
        }, 100);
    } else if (isshow === true) {
        document.querySelector(".burger_menu").classList.remove("burger_display")
        setTimeout(function () {
            isshow = false
        }, 100);
    }
}

window.addEventListener("click", function (e) {
    var div = $(".burger_menu");
    if (isshow === true && !div.is(e.target) &&
        div.has(e.target).length === 0) {
        document.querySelector(".burger_menu").classList.remove("burger_display")
        isshow = false
        document.querySelector(".burger_container").classList.remove("change")
    }
})

function onChange(event) {
    event.target.nextElementSibling.classList.add("name_label_focus")
}
function onMouseup(a) {
    if (a.value == "") {
        a.nextElementSibling.classList.remove("name_label_focus")
    }
}
function onMouseover(link) {
    link.parentElement.classList.add("item_hover")
}
function onMouseleave(link) {
    link.parentElement.classList.remove("item_hover")
}
$('.section_two_slider').slick({
    arrows: true,
    dots: true,
    infinite: false,
});