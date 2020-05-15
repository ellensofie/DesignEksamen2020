window.addEventListener('load', ()=> {
    console.log('the page has fully loaded');
});

class Page{
    constructor(title, imgURL, imgtext) {
        this.title = title;
        this.imgURL = imgURL;
        this.imgtext = imgtext;
    }

    get title() {
        return this.title;
    }

    get imgURL() {
        return this.imgURL;
    }

    get imgtext() {
        return this.imgtext;
    }
}

const pages = [];

function makePageObject(){
    page = new Page(setTitle()), setPhotoText();
    pages.push(page);
}

function setTitle() {
    var title = document.getElementById("title_input");
    return title;
}

function setPhotoText() {
    var photoText = document.getElementById("imgTextInput");
    return photoText;
}


function setImage() {

}

function setPage(){
    var page = new Page(document.getElementById("text_input"),"C:\\Users\\ellen\\WebstormProjects\\DesignEksamen2020\\logo.png" , document.getElementById("imgtext_input"));
    var file = document.querySelector('input[type=file]').files[0];
    img.src = window.URL.createObjectURL(file);
    localStorage.setItem('image',JSON.stringify(img.src));
    localStorage.setItem(page);
}


function getImages(){
    let img = document.getElementById('page-image');
    img.src = JSON.parse(localStorage.getItem('image'));
}

function filePreview(input) {
    return new Promise((resolve, reject) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve(e.target.result);
            };
            reader.onerror = () => {
                reject();
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            reject();
        }
    });
}




///////////////////////////////////////////////////////EKSTRA FRA NETTET



function loadPhoto() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
}
