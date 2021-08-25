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

