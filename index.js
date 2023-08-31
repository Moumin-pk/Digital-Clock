// Function to display and update the digital clock
function showTime(){
    var d = new Date(); // Create a new Date object to get the current time
        var h = d.getHours(); // Get the current hour
        var m = d.getMinutes(); // Get the current minutes
        var s = d.getSeconds(); // Get the current seconds
        var section = 'AM'; // Initialize section (AM or PM)

   // Add leading zeros to single-digit hours, minutes, and seconds
    h = h < 10? "0"+h :h;
    m = m < 10? "0"+m :m;
    s = s < 10? "0"+s :s;

    // Determine whether it's AM or PM

    if (h >= 12){
        section = 'PM'; 
    }
   
     // Convert the hour to 12-hour format
    if(h > 12){
        h = h-12;
        // h = 12 - 13 = 1
    }

    

// Construct the formatted time string
var time = h + " : " + m +" : "+ s + "  " + section;

 // Update the content of the <h1> element with the formatted time
document.getElementsByTagName('h1')[0].innerText = time;

 // Schedule the showTime function to be called again after 1 second (1000 milliseconds)
    setTimeout(showTime,1000);
}

// initial call to start updating the clock 
showTime();