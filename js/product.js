const uudiem = document.querySelector(".uudiem");
const nhuocdiem = document.querySelector(".nhuocdiem");

if (uudiem) {
    uudiem.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-contentbe-uudiem").style.display = "block";
        document.querySelector(".product-content-right-bottom-contentbe-nhuocdiem").style.display = "none";

    })
}
if (nhuocdiem) {
    nhuocdiem.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-contentbe-uudiem").style.display = "none";
        document.querySelector(".product-content-right-bottom-contentbe-nhuocdiem").style.display = "block";

    })
}
// ----------------------slider----------------//
const bigimg = document.querySelector(".product-content-left-imglon img")
const smalimg = document.querySelectorAll(".product-content-left-imgbe img")
smalimg.forEach(function (img1, X) {
    img1.addEventListener("click", function () {
        bigimg.src = img1.src;
    })
})
//------------------click vào phần ưu nhược điểm--//
const button = document.querySelector(".product-content-right-bottom-top")
if (button) {
    button.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-contentto").classList.toggle("active");
    })
}
