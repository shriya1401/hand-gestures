Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:'90'
    });

    camera=document.getElementById("camera");

    Webcam.attach("#camera");

function capture (){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML=`<img id="snap" src=${pic}>`
}
)}


console.log("ml5 version=", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Zc8hao5Il/model.json", modelloaded);

function modelloaded(){
    console.log("modelloaded");
    
}

function identify() {
img=document.getElementById("snap");
classifier.classify(img,getresults);
}

function getresults(error,results){
    if(error){
        console.log(error);
    }
        
        else {
            console.log(results);
            document.getElementById("emotion1_name").innerHTML=results[0].label;
            document.getElementById('emotion2_name').innerHTML=results[1].label;
            if(results[0].label=="Thumbs up"){
                document.getElementById("emoji_1").innerHTML="&#x1F44D";
               
            }

            if(results[0].label=="Thumbs down"){
                document.getElementById("emoji_1").innerHTML="&#x1F44E";
               
            }
            if(results[0].label=="Call Me"){
                document.getElementById("emoji_1").innerHTML="&#x1F919";
            }
            if(results[0].label=="Perfect"){
                document.getElementById("emoji_1").innerHTML="&#x1F44C;";
            }
            if(results[0].label=="yo"){
                document.getElementById("emoji_1").innerHTML="&#x1F918";
            }
            if(results[0].label=="Fingers crossed"){
                document.getElementById("emoji_1").innerHTML="&#x1F91E";
            }
            if(results[1].label=="Thumbs up"){
                document.getElementById("emoji_2").innerHTML="&#x1F44D";
               
            }

            if(results[1].label=="Thumbs down"){
                document.getElementById("emoji_2").innerHTML="&#x1F44E";
               
            }
            if(results[1].label=="Call Me"){
                document.getElementById("emoji_2").innerHTML="&#x1F919";
            }
            if(results[1].label=="Perfect"){
                document.getElementById("emoji_2").innerHTML="&#x1F44C";
            }
            if(results[1].label=="yo"){
                document.getElementById("emoji_2").innerHTML="&#x1F918";
            }
            if(results[1].label=="Fingers crossed"){
                document.getElementById("emoji_2").innerHTML="&#x1F91E";
            }




            

    }
}
