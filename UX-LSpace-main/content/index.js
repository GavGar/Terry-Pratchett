// Extra Javascript for 2022 Update to the L-Space Web


var open = false;

function closeMore() {
    if (open) {
        console.log("Closing")
        document.getElementById("dropdown").setAttribute("class", "hidden");
        open = false;
    }
}

function openMore() {
    console.log("Opening")
    open = true;
    document.getElementById("dropdown").classList.toggle("hidden");
}

window.onload = function() {
    document.addEventListener('click', function(event){
        if (!document.getElementById("more-button").contains(event.target) 
                && !document.getElementById("dropdown").contains(event.target)) {
            closeMore();
        }
    });
	document.getElementById("more-button").onclick = openMore;
}