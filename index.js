function element(id){
    return document.getElementById(id);
}

function getDate(){
    var dt = new Date();
    element("datetime").innerHTML = dt.toLocaleString();
}

function loadNextPage(){
    window.location.href = "nextpage.html";
}

function loadLandingPage(){
    window.location.href = "index.html";
}

function loadViewPage(){
    window.location.href = "view.html";
}

function updateimage(){ 
    var img = document.getElementById('meme-image');
    var file = document.querySelector('input[type=file]').files[0];
    img.src = window.URL.createObjectURL(file);
}