{
    function themeToggler() {
        const toggler = document.querySelector("#themeToggler");
        let istoggle = false;

        function toggle() {
            const savedMode = localStorage.getItem("data-theme");
            if (savedMode) {
                if (savedMode === "dark") {
                    toggler.innerHTML = `<i class="fas fa-sun"></i>`;
                    istoggle = true;
                } else if (savedMode === "dark") {
                    toggler.innerHTML = `<i class="fas fa-moon"></i>`;
                }
                document.body.setAttribute("data-theme", savedMode);
            }
        } toggle();

        function cngMode() {
            if (istoggle === false) {
                localStorage.setItem("data-theme", "dark");
                istoggle = true;
            } else {
                localStorage.setItem("data-theme", "light");
                istoggle = false;
            }
            toggle();
        }

        toggler.addEventListener("click", cngMode);
    } themeToggler();
}

{
    function dropDown() {
        const toggler = document.getElementById("navToggler");
        const targetId = toggler.attributes["data-target"].value;
        const target = document.getElementById(targetId);
        let istoggle = false;
        function showHide() {
            if (!istoggle) {
                istoggle = true;
                target.classList.add("expand");
                toggler.style.transform = "rotate(-45deg)";
                console.log(target);
            } else {
                istoggle = false;
                target.classList.remove("expand");
                toggler.style.transform = "rotate(0deg)";
            }
        }
        toggler.addEventListener("click", showHide);
    } dropDown();
}

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
    } scrollFunc();
}
