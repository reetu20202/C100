var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML=""
    recognition.start()
    
}
recognition.onresult=function(event) {
 console.log(event);
 content=event.results[0][0].transcript
 console.log(content);
 document.getElementById("textbox").innerHTML=content;
 if (content=="Take my selfie.") {
   console.log("take my selfie")
   speak();

   
  }
        
}
function speak (){
    var synth = window.speechSynthesis;
    speak_data = "taking selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach('#camera')
    setTimeout(
      function() {
        take_snapshot();
        save();
      },5000
    )
}
function save() {
  link=document.getElementById("link");
  image=document.getElementById("selfie_img").src;
  link.href=image;
  link.click()
}
Webcam.set({
  width:320,
  height:240,
  image_format:'jpeg',
  jpeg_format:100
});

function take_snapshot() {
  Webcam.snap(function(data_uri){
    console.log(data_uri)
    document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>";
  })
  
}

