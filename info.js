document.querySelectorAll('.switch-btn').forEach(function(element){
    element.addEventListener('click', function(){
        this.classList.toggle('switch-on');
    });
});
const switchBtn = document.querySelector(".switch-btn");
const body = document.querySelector("#body");

switchBtn.addEventListener("click", function () {
    if (body.classList.contains('light-theme')) {
        switchBtn.classList.remove('switch-on');
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        switchBtn.classList.add('switch-on');
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});

function dropdownFunction() {
    let dropdown = document.getElementById("myDropdown");
    
    if (dropdown.classList.contains('show')) {
        dropdown.style.opacity = "0";
        setTimeout(function(){
            dropdown.classList.remove('show');
        }, 300); // wait 300ms (length of the CSS transition), then hide
    } else {    
        dropdown.classList.add('show');
        dropdown.style.opacity = "1";
    }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.style.opacity = "0";
                setTimeout(function(){
                    openDropdown.classList.remove('show');
                }, 300); // wait 300ms (length of the CSS transition), then hide
            }
        }
    }
}
let num2 = 5;
function duble(num2) {
   num2 = num2*2;
   console.log(num2)
};