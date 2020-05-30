function windchill() {
    let t = document.getElementById('temp');
    let s = document.getElementById('speed');
    if(t<=50&&s>=3.0){
    let f = 35.74 + 0.6215 * t - (Math.pow(35.75, 0.16)) + (.4275 * t *Math.pow(s, 0.16));
    System.out.println(f);
    }
    else{
        document.write("N/A");
    }
}