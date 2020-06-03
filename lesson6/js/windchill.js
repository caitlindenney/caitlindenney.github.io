    let t = document.getElementById('temp').innerHTML;

    let s = document.getElementById('speed').innerHTML;
    if(t<=50&&s>=3.0){
    let f = 35.74 + (0.6215 * t) - (35.75*Math.pow(s, 0.16)) + (.4275 * t *Math.pow(s, 0.16));
    document.getElementById("chill").innerHTML=f;
    }
    else{
        document.getElementById("chill").innerHTML="N/A";
    }