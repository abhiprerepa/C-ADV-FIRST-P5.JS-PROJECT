function preload() {
}



function setup() {
    canvas = createCanvas(499, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    circle(30, 90, 20);
    ellipse(111, 190, 59, 27);
    rect(15, 219, 11, 55, 90);
    rect(30, 100, 50, 20);
    circle(110, 10, 20);
    circle(98, 70, 20);
    ellipse(191, 290, 19, 57);
    rect(35, 199, 31, 15, 99);
    rect(39, 150, 227, 20);
    circle(100, 10, 90);
}

function draw() {
    image(video, 0, 0, 499, 400);
}

function take_snapshot(){
    save('my first p5 project');
}

function Water() {
    document.getElementById("clowed").innerHTML = "Nothing happens and please reload the page";
}