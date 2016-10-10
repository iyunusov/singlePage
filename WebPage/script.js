var ul = document.getElementById("home-nav").firstElementChild,
    li = ul.children,
    active = ul.firstElementChild,
    checkbox = document.getElementById("top-checkbox"),
    topHeader = document.getElementById("section-top"),
    play = document.getElementById("play-btn"),
    windowWidth = window.innerWidth;
//run through all list elements.
for (var values in li){
    if(li.hasOwnProperty(values)){
        li[values].onmouseover = function(){
            active.classList.remove("active")
        }
        li[values].onmouseleave = function(){
            active.classList.add("active")
        }
        li[values].addEventListener("click", function(){
                checkbox.checked = false;
                topHeader.classList.remove("checked")
        });
    }
}
//display menu if menu button is clicked.
checkbox.addEventListener("change", function(){
    this.checked ? topHeader.classList.add("checked") : topHeader.classList.remove("checked");
});

play.addEventListener("click", function(){
    play.style.display = "none";
});
//check whether window size is below the limit.
window.addEventListener("load", function(){
    windowWidth < 560 ? document.getElementById("text-first").innerHTML = ("Lorem ipsum dolor sit amet,"+ 
    "consectetuer adipiscing elit, sed do eisumod tempor incididunt ut laore et dolore magna aliqua."+ 
    "Ut enim ad minim veniam, quis nostrud.") : document.getElementById("text-first").innerHTML;
});
