function displayTime() {
    let dateTime = new Date()
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    if(hour>12) {
        hour = hour-12;
        document.getElementById('AmPm').innerHTML = 'PM';
    }
    document.getElementById('hours').innerHTML = padZero(hour);
    document.getElementById('minutes').innerHTML = padZero(minute);
    document.getElementById('seconds').innerHTML = padZero(second);
}
function padZero(num) {
    return num >= 10 ? num : '0'+num;
}

setInterval(displayTime,500);