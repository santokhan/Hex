(function () {
    ScrollReveal({ reset: true });

    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    };

    //ScrollReveal().reveal('.dots__arrow', slideUp);
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
        dropDown();
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