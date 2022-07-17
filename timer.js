const target_year = new Date().getFullYear() + 1;  
const target_date = new Date(`Jan 1, ${target_year} 00:00:00`);


function countDown() {
    const today = new Date().getTime();
    const distance = target_date - today;
		
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days<10) days = "0" + days;
    if (hours<10) hours = "0" + hours;
    if (minutes<10) minutes = "0" + minutes;
    if (seconds<10) seconds = "0" + seconds;

    document.getElementById("seconds").setAttribute("data-content", seconds);
    document.getElementById("minutes").setAttribute("data-content", minutes);
    document.getElementById("hours").setAttribute("data-content", hours);
    document.getElementById("days").setAttribute("data-content", days);
        

    if (distance > 0) {
        document.getElementById("seconds").className = "counter__card counter__card--flipped split-color";
        document.getElementById("minutes").className = "counter__card";
        document.getElementById("hours").className = "counter__card";
        document.getElementById("days").className = "counter__card";

        setTimeout("flipCard()",800);
        setTimeout("countDown()",1000);    
    }

    else {
        document.getElementsByClassName("wrapper")[0].innerHTML = `<h1> Goodbye ${target_year-1}, Hello ${target_year}! </h1>`;
    }     
}
    
function flipCard() {
    if (seconds.getAttribute("data-content") == "00") {
        minutes.className = "counter__card counter__card--flipped";
    }

    if (minutes.getAttribute("data-content") == "00" && seconds.getAttribute("data-content") == "00") {
        hours.className = "counter__card counter__card--flipped";
    }

    if (hours.getAttribute("data-content") == "00" && minutes.getAttribute("data-content") == "00" && seconds.getAttribute("data-content") == "00") {
        days.className = "counter__card counter__card--flipped";
    }

    seconds.className = "counter__card split-color";
}

