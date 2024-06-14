
// PÁGINA PRODUTO //
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

for (var i = 0; i < 4; i++) {
    smallimg[i].onclick = function () {
        MainImg.src = this.src;
    }
}