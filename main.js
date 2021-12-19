function preload(){

}


 nosex=0;
 nosey=0
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);


    
}
function modelloaded(){
    console.log('posenet is started');

}
 
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;
        console.log("nose x= "+ nosex);
        console.log("nose y= "+ nosey);
    }
        
    
    
}



function draw(){
    image(video,0,0,300,300);
    fill(0, 255, 255);
    strok(0,0,0);
    circle(nosex,nosey,20);


}



function takesnapshot(){
    save('imgfiltered.jpeg');
}