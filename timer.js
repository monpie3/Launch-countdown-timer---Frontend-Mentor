var target_date = new Date("Jan 1, 2021 00:00:00").getTime();

function countdown()
	{
        var today = new Date().getTime();
        var distance = target_date - today;
		
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days<10) days = "0"+days;
        if (hours<10) hours = "0"+hours;
        if (minutes<10) minutes = "0"+minutes;
        if (seconds<10) seconds = "0"+seconds;
        
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        
		 
        if (distance > 0) {
            setTimeout("countdown()",1000);
        }

        else {
            document.getElementById("zegar").innerHTML = "Goodbye 2020, Hello 2021!"
        }
         
	}