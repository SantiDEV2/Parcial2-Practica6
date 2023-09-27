function myhour () {
    let seconds = parseInt(this, 10); 
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let sec = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    console.log(hours+':'+minutes+':'+seconds);
}


/* let fecha = new Date();
let hours = fecha.getHours();
let minutes = fecha.getMinutes();
let seconds = fecha.getSeconds();

let hms = `${hours}:${minutes}:${seconds}`;
 */
