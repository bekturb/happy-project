// HERO

function displayDate (){
    const dateTime = new Date();
    let days = dateTime.getDay();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (days < 10){
        days = '0' + days
    }

    if (hrs < 10){
        hrs = '0' + hrs
    }

    if (min < 10){
        min = '0' + min
    }

    if (sec < 10){
        sec = '0' + sec
    }



    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayDate,10)
// HERO

