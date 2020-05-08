function changePage(){
    window.location.href = "nextpage.html";
}

function todaysDate(){
    var d = new Date(); 
    var date = d.getDay() + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
    document.getElementById("dateDisplay").innerHTML = date;
}

function loadNextPage(){
    window.location.href = "nextpage.html";
}

function loadLandingPage(){
    window.location.href = "index.html";
}