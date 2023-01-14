function doNothing(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/olikmyjAT/model.json', modelLoaded)
}

function modelLoaded(){
    classifier.classify(getResults);
}

function getResults(error, results){
    if (error){
        console.error(error)
    } else {
        console.log(results[0])
        var rnum = Math.floor(Math.random() * 255) + 1
        var gnum = Math.floor(Math.random() * 255) + 1
        var bnum = Math.floor(Math.random() * 255) + 1

        document.getElementById("disporg").style.color = "rgb(" + rnum + "," + gnum + "," + bnum + ")";
        document.getElementById("sound-type-disp-type").innerText = results[0].label;
        document.getElementById("sound-acc-disp-acc").innerText = (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("progress").value = (results[0].confidence * 100).toFixed(2)

        var i1 = document.getElementById("a1");
        var i2 = document.getElementById("a2");
        var i3 = document.getElementById("a3");
        var i4 = document.getElementById("a4");
        if (results[0].label == "Bell"){
            i1.src = "aliens-01.gif"
            i2.src = "aliens-02.png"
            i3.src = "aliens-03.png"
            i4.src = "aliens-04.png"
        } else if (results[0].label == "Clap"){
            i1.src = "aliens-01.png"
            i2.src = "aliens-02.gif"
            i3.src = "aliens-03.png"
            i4.src = "aliens-04.png"
        } else if (results[0].label == "Snap"){
            i1.src = "aliens-01.png"
            i2.src = "aliens-02.png"
            i3.src = "aliens-03.gif"
            i4.src = "aliens-04.png"
        } else {
            i1.src = "aliens-01.png"
            i2.src = "aliens-02.png"
            i3.src = "aliens-03.png"
            i4.src = "aliens-04.gif"
        }
    }
}