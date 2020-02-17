var letter = document.querySelector(".section-map__button");
var popup = document.querySelector(".write-us");


var close = document.querySelector(".modal-close");

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
})

letter. addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
