noseX = 0;
noseY = 0;
filter = "";
function preload() {
  filter = loadImage("https://i.postimg.cc/HxQxRxSK/8307qnalukjalf29z-removebg-preview.png");
}
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110,250);
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
 }
 function modelLoaded() 
 {
   console.log("PoseNet Is Initialized");
 }
function gotPoses(results) 
{
  if(results.length > 0 )
 {
   console.log(results);
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;
   console.log("nose x = " + results[0].pose.nose.x);
   console.log("nose y = " + results[0].pose.nose.y);
 }
}
function draw() {
  image(video, 0, 0, 640, 480);
  image(filter, noseX-100, noseY-50, 200, 150);
}
function take_snapshot() {
  save("woah.png");
}
