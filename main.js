var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
document.getElementById("tb").innerHTML="";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("tb").innerHTML=content;
    if (content=="take my selfie") {
    console.log("taking selfie --");
    speak();}
}
function speak() {
    var synth=window.speechSynthesis;
    var speak_data="taking selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        takesnapshot();
        save();
    },5000);
}
camera=document.getElementsById("camera");
Webcam.set({
width:360,
height:250,
image_format:"png",
png_quality:90
});
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfieimage" src="'+data_uri+'"/>';
    });
}
function save() {
 link=document.getElementById("link");
 image=document.getElementById("selfieimage").src;
 link.href=image;
 link.click();
}