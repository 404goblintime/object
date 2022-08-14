img = "";
status = "";

function preload() {
  img = loadImage("catanddog.webp");
}

function setup() {
  canvas = createCanvas(700, 500);
  canvas.center();
  objectDetector = ml5.objectDetector("cocossid", modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
console.log("Model is loaded!")
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
  if (error){
    console.error(error);
  }
  else {
    console.log(results);
  }
}

function draw() {
  image(img, 0, 0, 700, 500);
  fill("darkcyan");
  text("Dog", 300, 110);
  textSize(30);
  noFill();
  stroke("cadetblue");
  strokeWeight(3);
  rect(250, 70, 300, 600);

  fill("pink");
  text("Cat", 100, 400);
  textSize(30);
  noFill();
  stroke("pink");
  strokeWeight(3);
  rect(100, 200, 200, 300);

}