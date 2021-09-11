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
        } else if (savedMode === "light") {
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


{/**Creating grid new item */
  // function createGrid(src = "img/fashion-ui.png", link = "#", title = "Not pass any name") {
  function createGrid(obj) {
    let linkClone = obj.href;
    let srcClone = obj.src;
    let titleClone = obj.name;

    //grid item
    const gridBox = document.querySelector("#app__grid");
    let div = createItem();
    gridBox.appendChild(div);

    function createItem() {
      const div = document.createElement("div");
      div.className = "grid__item";
      let link = createLink();
      let des = createDes(titleClone);
      div.appendChild(link);
      div.appendChild(des);
      //console.log(div.outerHTML);
      return div;

      //grid link
      function createLink() {
        const a = document.createElement("a");
        a.className = "grid__link";
        a.target = "_blank";
        a.href = linkClone;

        a.appendChild(gridTop());
        //console.log(a.outerHTML);
        return a;

        function gridTop() {
          const div = document.createElement("div");
          div.className = "grid__top";

          let img = createImg(srcClone);
          let link = createEffect();
          div.appendChild(img);
          div.appendChild(link);
          return div;

          function createImg() {
            const img = document.createElement("img");
            img.src = srcClone;
            img.alt = "ui-grid-img";
            img.className = "grid__img";
            return img;
          }

          function createEffect() {
            const div = document.createElement("div");
            let link = createLink();
            div.className = "effect";
            div.appendChild(link);
            //console.log(div.outerHTML);
            return div;

            function createLink() {
              const i = document.createElement("i");
              i.className = "fa fa-link";
              return i;
            }
          }
        }
      } createLink();


      // item des
      function createDes(title) {
        const div = document.createElement("div");
        div.className = "grid__des";
        //child called before return
        let child = createTitle(title);
        div.appendChild(child);
        //console.log(div.outerHTML);
        return div;

        function createTitle(text) {
          const h4 = document.createElement("h4");
          h4.className = "grid__title";
          h4.innerHTML = text;
          return h4;
        }
      }
    } createItem();
  }
  //createGrid(gridItemsData(0));
  for (let i = 0; i < 13; i++) {
    createGrid(gridItemsData(i));
  };
}

function gridItemsData(props) {
  /**Here props is array index */
  const data = [
    { name: "Ecommerce Store", href: "./websites/trimmer/index.html", src: "https://live.staticflickr.com/65535/51439618692_e467012815_c.jpg", },
    { name: "Fashion", href: "./websites/fashion-ui/index.html", src: "https://live.staticflickr.com/65535/51441114009_b68ba1515a_c.jpg", },
    { name: "Painter", href: "./websites/colors/index.html", src: "https://live.staticflickr.com/65535/51441330750_ccee079c3c_c.jpg", },
    { name: "Race Store", href: "#", src: "https://live.staticflickr.com/65535/51440617983_3238a859e6_c.jpg", },
    { name: "Interior", href: "#", src: "https://live.staticflickr.com/65535/51441112794_65cfe57c44_c.jpg", },
    { name: "Theme Builder", href: "#", src: "https://live.staticflickr.com/65535/51440618558_37c5c3f71b_c.jpg", },
    { name: "Games", href: "#", src: "https://live.staticflickr.com/65535/51439617527_27d664d8b1_c.jpg", },
    { name: "Cooling Fan", href: "#", src: "https://live.staticflickr.com/65535/51440367181_7de24ecc57_c.jpg", },
    { name: "Headphone", href: "#", src: "https://live.staticflickr.com/65535/51439617447_1334ded85b_c.jpg", },
    { name: "Fashion", href: "#", src: "https://live.staticflickr.com/65535/51439617567_9319681738_c.jpg", },
    { name: "Real State", href: "#", src: "https://live.staticflickr.com/65535/51440617833_62372d9e1a_c.jpg", },
    { name: "Portfolio", href: "#", src: "https://live.staticflickr.com/65535/51439617162_71c73ff00e_c.jpg", },
    { name: "Transport Agency", href: "./websites/tport/index.html", src: "https://live.staticflickr.com/65535/51440618648_2bdc3dacc3_c.jpg", },
    // { name: "", href: "#", src: "", },
  ];
  if (typeof (props) === "number") {
    return data[props];
  }
}


{/**Creating grid new item duplicate */
  function createGridCopy(src = "img/fashion-ui.png", title = "Not pass any name") {
    let srcClone = src;
    let titleClone = title;

    //grid item
    const gridBox = document.querySelector("#app__grid");
    let div = createItem();
    gridBox.appendChild(div);

    function createItem() {
      const div = document.createElement("div");
      div.className = "grid__item";
      let link = createLink();
      let des = createDes(titleClone);
      div.appendChild(link);
      div.appendChild(des);
      console.log(div.outerHTML);
      return div;

      //grid link
      function createLink() {
        const a = document.createElement("a");
        a.className = "grid__link";
        a.target = "_blank";
        a.href = "#";

        a.appendChild(gridTop());
        //console.log(a.outerHTML);
        return a;

        function gridTop() {
          const div = document.createElement("div");
          div.className = "grid__top";

          let img = createImg(srcClone);
          let link = createEffect();
          div.appendChild(img);
          div.appendChild(link);
          return div;

          function createImg() {
            const img = document.createElement("img");
            img.src = srcClone;
            img.alt = "ui-grid-img";
            img.className = "grid__img";
            return img;
          }

          function createEffect() {
            const div = document.createElement("div");
            let link = createLink();
            div.className = "effect";
            div.appendChild(link);
            //console.log(div.outerHTML);
            return div;

            function createLink() {
              const i = document.createElement("i");
              i.className = "fa fa-link";
              return i;
            }
          }
        }
      } createLink();


      // item des
      function createDes(title) {
        const div = document.createElement("div");
        div.className = "grid__des";
        //child called before return
        let child = createTitle(title);
        div.appendChild(child);
        //console.log(div.outerHTML);
        return div;

        function createTitle(text) {
          const h4 = document.createElement("h4");
          h4.className = "grid__title";
          h4.innerHTML = text;
          return h4;
        }
      }
    } createItem();
  } //createGridCopy("img/fashion-ui.png", "Fashion UI");
}
