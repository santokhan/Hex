{
    function scrollFunc() {
        const btn = document.getElementById("scrollTopBtn");
        btn.style.display = "none";

        function showHide() {
            let scrolled = window.scrollY;
            if (scrolled > 800) {
                btn.style.display = "";
                //console.log(window.scrollY);
            } else {
                btn.style.display = "none";
            }
        }
        window.onscroll = showHide;

        function scroll() {
            window.scrollTo(0, 0);
            //console.log(btn);
        }
        btn.addEventListener("click", scroll);
    }
    scrollFunc();
}