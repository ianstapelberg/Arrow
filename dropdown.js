// var abc = document.getElementsByClassName("main-butt");

// abc.addEventListener("click", openDropdown);

window.$ = window.jQuery = require("jquery");

var msgname = document.getElementById("msg-men");
        
// msgname.getElementsByClassName("main-butt")[0].addEventListener('click', function(){
//     msgname.classList.toggle("active");
    
// }, true);

// $(document).ready(function () {
//     $("msg-men.main-butt").click(function () {
//         $("main-nav-ul").ready(function () {
//             $("li.has-sub").toggleClass("active");
//             $(".msgdropdown").slideDown();
//             console.log("working!");
//         });
//     });
// });

msgname.getElementsByClassName("main-butt")[0].addEventListener('click', function(){
    msgname.classList.toggle("active");

    $(document).ready(function () {
        if ($("#msg-men").hasClass("active")) {
            $("#msgdropdown").slideDown(100);
        }
        if (!$("#msg-men").hasClass("active")) {
            $("#msgdropdown").slideUp(100);
        }
    });
}, true);

var filename = document.getElementById("file-men");
        
filename.getElementsByClassName("main-butt")[0].addEventListener('click', function(){
    console.log("working!");
    filename.classList.toggle("active");

    $(document).ready(function () {
        if ($("#file-men").hasClass("active")) {
            $("#filedropdown").slideDown(100);
        }
        if (!$("#file-men").hasClass("active")) {
            $("#filedropdown").slideUp(100);
        }
    });
}, true);

var jobname = document.getElementById("job-men");
        
jobname.getElementsByClassName("main-butt")[0].addEventListener('click', function(){
    console.log("working!");
    jobname.classList.toggle("active");

    $(document).ready(function () {
        if ($("#job-men").hasClass("active")) {
            $("#jobdropdown").slideDown(100);
        }
        if (!$("#job-men").hasClass("active")) {
            $("#jobdropdown").slideUp(100);
        }
    });
}, true);

var payname = document.getElementById("pay-men");
        
payname.getElementsByClassName("main-butt")[0].addEventListener('click', function(){
    console.log("working!");
    payname.classList.toggle("active");

    $(document).ready(function () {
        if ($("#pay-men").hasClass("active")) {
            $("#paydropdown").slideDown(100);
        }
        if (!$("#pay-men").hasClass("active")) {
            $("#paydropdown").slideUp(100);
        }
    });
}, true);

var infoname = document.getElementById("info-men");

infoname.getElementsByClassName("main-butt")[0].addEventListener('click', function(){
    console.log("working!");
    infoname.classList.toggle("active");

    $(document).ready(function () {
        if ($("#info-men").hasClass("active")) {
            $("#infodropdown").slideDown(100);
        }
        if (!$("#info-men").hasClass("active")) {
            $("#infodropdown").slideUp(100);
        }
    });
}, true);

var setname = document.getElementById("set-men");

setname.getElementsByClassName("main-butt")[0].addEventListener('click', function(){
    console.log("working!");
    setname.classList.toggle("active");

    $(document).ready(function () {
        if ($("#set-men").hasClass("active")) {
            $("#setdropdown").slideDown(100);
        }
        if (!$("#set-men").hasClass("active")) {
            $("#setdropdown").slideUp(100);
        }
    });
}, true);

document.getElementById("ex-but").addEventListener('click', function(){
    console.log("working!");
    msgname.classList.add("active");
    $(document).ready(function () {
        if ($("#msg-men").hasClass("active")) {
            $("#msgdropdown").slideDown(100);
        }
    });
    filename.classList.add("active");
    $(document).ready(function () {
        if ($("#file-men").hasClass("active")) {
            $("#filedropdown").slideDown(100);
        }
    });
    jobname.classList.add("active");
    $(document).ready(function () {
        if ($("#job-men").hasClass("active")) {
            $("#jobdropdown").slideDown(100);
        }
    });
    payname.classList.add("active");
    $(document).ready(function () {
        if ($("#pay-men").hasClass("active")) {
            $("#paydropdown").slideDown(100);
        }
    });
    infoname.classList.add("active");
    $(document).ready(function () {
        if ($("#info-men").hasClass("active")) {
            $("#infodropdown").slideDown(100);
        }
    });
    setname.classList.add("active");
    $(document).ready(function () {
        if ($("#set-men").hasClass("active")) {
            $("#setdropdown").slideDown(100);
        }
    });
}, true);

document.getElementById("col-but").addEventListener('click', function(){
    console.log("working!");
    msgname.classList.remove("active");
    $(document).ready(function () {
        if (!$("#msg-men").hasClass("active")) {
            $("#msgdropdown").slideUp(100);
        }
    });
    filename.classList.remove("active");
    $(document).ready(function () {
        if (!$("#file-men").hasClass("active")) {
            $("#filedropdown").slideUp(100);
        }
    });
    jobname.classList.remove("active");
    $(document).ready(function () {
        if (!$("#job-men").hasClass("active")) {
            $("#jobdropdown").slideUp(100);
        }
    });
    payname.classList.remove("active");
    $(document).ready(function () {
        if (!$("#pay-men").hasClass("active")) {
            $("#paydropdown").slideUp(100);
        }
    });
    infoname.classList.remove("active");
    $(document).ready(function () {
        if (!$("#info-men").hasClass("active")) {
            $("#infodropdown").slideUp(100);
        }
    });
    setname.classList.remove("active");
    $(document).ready(function () {
        if (!$("#set-men").hasClass("active")) {
            $("#setdropdown").slideUp(100);
        }
    });
}, true);

$( "#clickme" ).click(function() {
    $( "#book" ).slideDown( "slow", function() {
      // Animation complete.
    });
});

// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };

    // for (var i = 0; i < classname.length; i++) {
    //     var currentclass = classname[i];
    //     var currentparent = currentclass.parentNode;
        
    //     currentclass.addEventListener('click', function(){
    //         console.log("working!");
    //         currentparent.classList.toggle("active");
    //     }, true);
    // }

