(function () {
    ScrollReveal({ reset: true });

    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    };

    ScrollReveal().reveal('.logitech', slideUp);
    ScrollReveal().reveal('.xbox', slideUp);
    ScrollReveal().reveal('.twitch', slideUp);
    ScrollReveal().reveal('.asus', slideUp);

    //ScrollReveal().reveal('.circle__banner',{ delay: 500 });


    /**DropDown Nav */
    {
        function dropDown() {
            const toggler = document.getElementById("dropdownToggler");
            const targetId = toggler.attributes["data-target"].value;
            const target = document.getElementById(targetId);

            let isToggle = false;

            {
                function navShowHide() {
                    if (isToggle === false) {
                        target.style.display = "";
                        isToggle = true;
                        //console.log(isToggle);
                    }
                    else {
                        target.style.display = "block";
                        isToggle = false;
                        //console.log(isToggle);
                    }
                }
                toggler.addEventListener("click", navShowHide);
            }
        }
        //dropDown();
    }
});

(function () {
    const heart = document.querySelectorAll(".fa-heartbeat");
    let count = 0;

    heart.forEach(function (element) {
        let isLiked = false;
        function liked() {
            if (isLiked === false) {
                element.style.color = "#ff0000";
                isLiked = true;
                count++;
                localStorage.setItem("liked", count);
            } else {
                element.style.color = "#202124";
                isLiked = false;
            }
        }
        element.addEventListener("click", liked);
    });
})();


{
    function dropdown() {
        const toggler = document.querySelector("#toggler");
        const dataTarget = toggler.attributes["data-target"].value;
        const target = document.getElementById(dataTarget);
        //console.log(target);

        let istoggle = false;

        function expand() {
            const i = document.createElement("i");
            if (target.classList.contains("expand")) {
                target.classList.remove("expand");
                //toggler.innerHTML = `<i class="fa fa-bars" aria-hidden="true">`;
                i.className = "fa fa-bars";
                toggler.innerHTML = i.outerHTML;
            } else {
                //toggler.innerHTML = `<i class="fa fa-times" aria-hidden="true">`;
                target.classList.add("expand");
                i.className = "fa fa-times";
                toggler.innerHTML = i.outerHTML;
            }
            //console.log(target);
        }

        function showNav() {
            if (istoggle === false) {
                if (target) {
                    expand();
                }
                istoggle = true;
            } else {
                if (target) {
                    expand();
                }
                istoggle = false;
            }
            //console.log(istoggle);
        }
        toggler.addEventListener("click", showNav);
    } dropdown();
}

(function () {
    const hexagon = document.querySelectorAll(".color__hexagon");
    const code = document.querySelectorAll(".code");
    for (let i = 0; i < hexagon.length; i++) {
        hexagon[i].style.backgroundColor = code[i].innerHTML;
    }
})();


{
    function create() {
        const card = document.querySelector("#cardA");
        let item = card.cloneNode(true);

        //console.log(item);
        card.parentElement.insertAdjacentElement("beforeend", item);
    }
    create();
    create();
    create();
    create();
    create();
}

{
    function sort() {
        const pdct = document.querySelector("#product");
        const list = document.querySelector("#listView");
        const grid = document.querySelector("#gridView");

        function View() {
            if (localStorage.getItem("view") === "list") {
                pdct.className = "product__list";
            } else if (localStorage.getItem("view") === "grid") {
                pdct.className = "product__grid";
            }
        } View();

        list.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.setItem("view", "list");
            View();
        });
        grid.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.setItem("view", "grid");
            View();
        });
    } sort();
}

{
    function search() {
        const searchForm = document.querySelector("#searchForm");
        function find() {
            document.find("wahl");
        }
        searchForm.addEventListener("submit", find);
    } search();
}

{
    function popup() {
        const popup = document.querySelector("#popup");
        const times = document.querySelector(".trimming .fa-times");
        function hide() {
            popup.style.display = "none";
        }
        times.addEventListener("click", hide);
    } popup();
}