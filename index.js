function changePage(){
    window.location.href = "nextpage.html";
}

function todaysDate(){
    let d = new Date(); 
    document.getElementById("dateDisplay").innerHTML = d.toDateString();
}