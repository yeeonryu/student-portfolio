let myImage  = document.querySelector('img');
let myh1  = document.querySelector('h1');
myh1.onclick = function() {
      myImage.setAttribute ('src','images/default.png');   
}


let drawingelem = document.querySelector('li.Drawing');
let readingelem = document.querySelector('li.Reading');
let got7elem = document.querySelector('li.GOT7');

drawingelem.onclick = function(ev) {
    myImage.setAttribute ('src', 'images/drawing.jpg');
};

readingelem.onclick = function(ev) {
    myImage.setAttribute ('src', 'images/reading.jpg');
};

got7elem.onclick = function(ev) {
    myImage.setAttribute ('src', 'images/got7.jpg');
};


