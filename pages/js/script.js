function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function () {
    var scrollButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

