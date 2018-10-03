// var abc = document.getElementsByClassName("main-butt");

// abc.addEventListener("click", openDropdown);

var classname = document.getElementsByClassName("main-butt");

// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };

for (var i = 0; i < classname.length; i++) {
    var currentclass = classname[i];
    
    currentclass.addEventListener('click', function(){
        console.log("working!");
        $(this).parent().classList.toggle("active");
    }, false);
}