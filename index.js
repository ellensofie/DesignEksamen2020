
function getDate(){
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

function loadNextPage(){
    window.location.href = "nextpage.html";
}

function loadLandingPage(){
    window.location.href = "index.html";
}