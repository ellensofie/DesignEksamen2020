window.addEventListener('load', ()=> {
    console.log('the page has fully loaded');
});

class Page{
    constructor(title, imgURL, imgtext) {
        this.title = title;
        this.imgURL = imgURL;
        this.imgtext = imgtext;
    }
}

const pages = [];

function setPageObject(){
    page = new Page(document.getElementById("title_input"), document.getElementById(), document.getElementById("imgtext_input"));
    pages.push(page);
}

function loadPhoto() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img_pulpit.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
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