
function toggleDiv(divID) {
    var box = document.getElementById(divID);
    if(box.classList.contains("hidden")){
        box.classList.remove("hidden");
    }else{
        box.classList.add("hidden");
    }
}

function setupToggleDiv(divID, contolID) {
    var el = document.getElementById(contolID);
    el.onclick = function (){ toggleDiv(divID); };
}

