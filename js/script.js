function init() {

    let emailArray = [];

    window.addEventListener("scroll", yScroll);
    let header, yPos, weightCont, alertCont, muscleCont, hidden;
    topButton = document.getElementById("myBtn");

    function yScroll() {
        header = document.getElementById("header")
        weightCont = document.getElementById("weight-cont")
        alertCont = document.getElementById("alert-cont")
        muscleCont = document.getElementById("muscle-cont")
        hidden = document.getElementById("hidden")
        yPos = window.pageYOffset;
        if (yPos > 60) {
            header.style.backgroundColor = "rgba(255,255,255,1)";
            header.style.boxShadow = " 0 2px 2px -2px rgba(0,0,0,.2)";
            topButton.style.display = "block";
        }
        else {
            header.style.backgroundColor = "";
            header.style.boxShadow = "none";
            topButton.style.display = "none";
        }
        if (yPos > 1000) {
            weightCont.style.marginLeft = "0"
        }
        if (yPos > 1600) {
            alertCont.style.marginLeft = "0"
        }
        if (yPos > 2100) {
            muscleCont.style.marginLeft = "0"
        }
        if (yPos > 2900) {
            hidden.style.opacity = "1";
        }
    }
    document.getElementById("subsc-button").addEventListener("click", function () {
        let email = document.getElementById("email-input").value;
        document.getElementById("form").style = "opacity:0;"
        emailArray.push(email)
        console.log(emailArray)
    });
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 14);
        }
    };
    topButton.addEventListener("click", function () {
        scrollToTop();
    });
};
