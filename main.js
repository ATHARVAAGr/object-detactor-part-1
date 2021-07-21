img="";
status="";

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status -detecting objects";  
}

function preload()
{
    img=loadImage('sbj3Y757EZpEFw4adsVVs8-768-80.jpg');
}

function draw()
{
    image(img, 0, 0, 600, 500);
    fill("red");
    text("chair", 6, 245);
    noFill();
    stroke("cyan");
    rect(2, 230, 150, 150);

    fill("yellow");
    text("Bed", 240, 185);
    noFill();
    stroke("lime");
    rect(230, 170, 330, 260);

    fill("yellow");
    text("lamp", 6, 185);
    noFill();
    stroke("lime");
    rect(230, 170, 90, 260);
}

function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}