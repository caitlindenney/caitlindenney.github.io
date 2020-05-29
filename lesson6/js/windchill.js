function windchill() {
    let t = parseFloat(document.getElementById('temp').value);
    let s = parseFloat(document.getElementById('speed').value);
    if(t<=50&&s>=3.0){
    let f = 35.74 + 0.6215 * t - (Math.pow(35.75, 0.16)) + (Math.pow((4275 * t * s), 0.16));
    return "f";
    }
    else{
        document.write("N/A");
    }
}