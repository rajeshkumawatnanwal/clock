
function updateClock() {
    const now = new Date(); 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    
   
    hours = hours % 12 || 12;
    
    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    
    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById('clock').textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();
