/* variabler fra create album page */
window.addEventListener('load', ()=> {
    console.log('the page has fully loaded');
});

const previewImage = document.getElementById("previewImage");
let file;
let page;
let img;

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

function getPhotoText() {
    var photoText = document.getElementById("imgTextInput").value;
    return photoText;
}

function setPageObject(){
    if (file == null){
        page = new Page(getTitle(),null,getPhotoText());
    }else if(title == null){
        page = new Page(null, img, getPhotoText());
    }else if (photoText == null){
        page = new Page(getTitle(), img, null);
    }else{
        page = new Page(getTitle(), img, getPhotoText());
    }
    localStorage.setItem('page',JSON.stringify(page));
}

function getPage() {
    page = JSON.parse(localStorage.getItem('page'));
    document.getElementById("pageTitle").innerHTML = page.title;
    document.getElementById("pagePhoto").innerHTML = page.imgURL;
    console.log(page.imgURL);
    document.getElementById("pagePhotoText").innerHTML = page.photoText;
}



function filePreview(){
    file = document.querySelector('input[type=file]').files[0];
    previewImage.src = window.URL.createObjectURL(file);
    img = previewImage.src;

}

function loadPhoto() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
