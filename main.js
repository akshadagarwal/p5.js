
function preload() {

}

function setup() {
    canvas = createCanvas(800, 500);
    canvas.position(370, 200);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 24, 50, 750, 400);
    tint(tint_color);
    textSize(20);
    fill(50,0,0);
    textFont('Allura');
    text("Snap Filter Web App produced by Akshad Agarwal", 230, 489);

    //Rectangle
    stroke(168, 10, 10);
    fill(50, 168, 82);
    rect(25, 50, 30, 400);
    rect(750, 40, 25, 400);
    rect(63, 440, 674, 25);
    rect(63, 27, 674, 25);

    //Circle
    fill(168, 10, 10);
    circle(40, 40, 50);
    circle(760, 40, 50);
    circle(50, 450, 50);
    circle(750, 450, 50);
    stroke(50, 168, 82);
    

}

function apply_filter() {
    tint_color = document.getElementById("color").value;

    synth = window.speechSynthesis;
    speak = new SpeechSynthesisUtterance("Filter Activated");
    synth.speak(speak);
}

function take_snapshot() {
    synth = window.speechSynthesis;
    speak = new SpeechSynthesisUtterance("Picture Clicked");
    synth.speak(speak);
    save('P5.png')
}