/* variabler fra create album page */
const previewImage = document.getElementById("previewImage");
const file = document.querySelector('input[type=file]').files[0];

window.addEventListener('load', ()=> {
    console.log('the page has fully loaded');
    setPageObject();
    getPage();
});

class Page{
    constructor(title, imgURL, imgtext) {
        this.title = title;
        this.imgURL = imgURL;
        this.imgtext = imgtext;
    }

    get getTitle() {
        return this.title;
    }

    get getImgURL() {
        return this.imgURL;
    }

    get getImgtext() {
        return this.imgtext;
    }
}

function setPageObject(){
    const page = new Page("My Birthday", file, "Have fun");
    localStorage.setItem('page',JSON.stringify(page));
}

function getPage() {
    document.getElementById("page_title").innerHTML = JSON.parse(localStorage.getItem(page.getTitle));
    document.getElementById("").innerHTML = JSON.parse(localStorage.getItem(page.getImgURL));
    document.getElementById("").innerHTML = JSON.parse(localStorage.getItem(page.getImgtext));
}

function filePreview(){
    previewImage.src = window.URL.createObjectURL(file);
}

function loadPhoto() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
