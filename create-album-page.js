/* variabler fra create album page */
window.addEventListener('load', ()=> {
    console.log('the page has fully loaded');
});

const previewImage = document.getElementById("previewImage");
let file;
let page;

class Page{
    constructor(title, imgURL, photoText) {
        this.title = title;
        this.imgURL = imgURL;
        this.photoText = photoText;
    }
}

function getTitle() {
    var title = document.getElementById("titleInput").value;
    return title;
}

function getFotoTekst() {
    var FotoTekst = document.getElementById("imgTextInput").value;
    return FotoTekst;
}

function getImg() {


}



function setPageObject(){
    if (file == null){
        page = new Page(getTitle(),null,getFotoTekst());
    }

    else{
        page = new Page("My Birthday", file, "Have fun");
    }
    localStorage.setItem('page',JSON.stringify(page));
}

function getPage() {
    page = JSON.parse(localStorage.getItem('page'));
    document.getElementById("pageTitle").innerHTML = page.title;
    document.getElementById("pagePhoto").innerHTML = page.imgURL;
    document.getElementById("pagePhotoText").innerHTML = page.photoText;
}

function filePreview(){
    file = document.querySelector('input[type=file]').files[0];
    previewImage.src = window.URL.createObjectURL(file);
}

function loadPhoto() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
