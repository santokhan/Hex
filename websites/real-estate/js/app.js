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

{
    function heartbeat() {
        let heart = document.querySelectorAll(".fa-heartbeat");

        heart.forEach(function (element) {
            let isLiked = false;
            function liked() {
                if (isLiked === false) {
                    element.style.color = "#ff0000";
                    isLiked = true;
                } else {
                    element.style.color = "#202124";
                    isLiked = false;
                }
            }
            element.addEventListener("click", liked);
            //console.log(element);
        });
    };
    setTimeout(() => {
        heartbeat();
    }, 1000);;
}


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
    } //dropdown();
}


{
    function showHide(ele) {
        let element = ele;
        let isToggle = false;
        let target = document.getElementById(element.getAttribute("data-target"));
        function collapse() {
            if (isToggle === false) {
                target.style.display = "none";
                isToggle = true;
            } else {
                target.style.display = "block";
                isToggle = false;
            }
        }
        element.addEventListener("click", collapse);
    }
    const trigger = document.querySelectorAll(".menu__label");
    trigger.forEach(e => { showHide(e); });
}

{
    function airplane() {
        const plane = document.querySelector("#airplane");
        function fly() {
            if (plane.classList.contains("airplane__fly")) {
                //plane.classList.remove("airplane__fly");
                return false;
            } else {
                plane.classList.add("airplane__fly");
            }
        }

        const header = this.document.querySelector("#appHeader");
        const nav = document.querySelector("#appNav");
        window.addEventListener("scroll", function () {
            let scrollY = this.window.scrollY;
            if (scrollY > 1) {
                fly();
                header.style.top = 0;
                header.style.width = "100%";
                nav.style.width = "100%";
                nav.style.borderRadius = "0";
            } else {
                header.style.top = "30px";
                nav.style.width = "1140px";
                nav.style.borderRadius = "1rem";
                //return false;
            }
            console.log(this.window.scrollY);
        });

        plane.addEventListener("mouseover", fly);
    } airplane();
}