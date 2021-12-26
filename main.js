var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 
function start(){
    document.getElementById("text_box").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content); 
    document.getElementById("text_box").innerHTML = content; 
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    text =document.getElementById("text_box").value;
    var utterthis = new SpeechSynthesisUtterance(text);

    synth.speak(utterthis); 
    Webcam.attach(camera);
}

Webcam.set({
    width:365,
height:243.899, 
image_format: 'jpeg',
jpeg_quality:99.99999999999999999999999999999999999999999991
});
camera = document.getElementById("output"); 