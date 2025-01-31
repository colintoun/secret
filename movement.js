document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".home, .calendar, .modal, .home-content, .home-img, .social-icons, #clock-container");

    elements.forEach(element => {
        element.classList.add("slow-fade-in");
    });

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetUrl = this.getAttribute("href");

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); 
        });
    });

    document.body.classList.add("fade-in");
});

function moveValentinesText() {
    var valentinesText = document.getElementById("valentines-text");
    var dropdownContent = document.getElementsByClassName("dropdown");
    var dropdown = document.getElementsByClassName("dropdown-content");
    valentinesText.style.position = "fixed";
    valentinesText.style.top = "10px";
    valentinesText.style.left = "50%";
    valentinesText.style.transform = "translateX(-50%)";
    valentinesText.style.backgroundColor = "pink";
    valentinesText.style.color = "black"; 
    valentinesText.style.padding = "10px";
    valentinesText.style.borderRadius = "10px";
    valentinesText.style.zIndex = "1000";
    valentinesText.textContent = "THANK YOU BBY <33333";
    dropdownContent.style.display = "none"; 
    dropdown.style.display = "none"; 
}

var or = document.getElementById("or");
var no = document.getElementById("btn2");

var messages = ["NO", "STAWPPP", "Try againnnnn", "NAURRR STOP IT", "I LOVE U", "Last chance!!!!!", "WHYYYYY", "WHy no tho :c"];

var messageIndex = 0;

no.addEventListener("click", change);
function change() {
    no.classList.add("shake");
    setTimeout(() => {
        no.classList.remove("shake");
    }, 500);

    messageIndex = (messageIndex + 1) % messages.length;
    no.textContent = messages[messageIndex];

    if (messageIndex === 0) {
        no.remove();
        or.remove();
    }
}

function clock() {
    var now = new Date();
    var valentine = new Date(now.getFullYear(), 1, 14); // Valentine's Day (February 14)
    if (now > valentine) {
        valentine.setFullYear(valentine.getFullYear() + 1);
    }

    var diff = valentine - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    var Time = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";

    document.getElementById("clock").innerHTML = Time;
}

setInterval(clock, 1000);

var images = ["sitting.jpeg", "N+C.jpeg", "window.jpeg"];
var currentIndex = 0;

function cycleImages() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("carousel-image").src = images[currentIndex];
}

setInterval(cycleImages, 3000);

document.getElementById("congi-logo").addEventListener("click", function() {
    var message = document.getElementById("message");
    message.style.position = "absolute";
    message.style.fontFamily = 'Poppins','sans-serif';
    message.style.top = "100px";
    message.style.left = "60%";
    message.style.transform = "translateX(-50%)";
    message.style.backgroundColor = "pink";
    message.style.color = "black";
    message.style.padding = "20px";
    message.style.borderRadius = "10px";
    message.style.zIndex = "1000";
    message.textContent = "Will you be my Valentines?";
    message.style.fontSize = "1.8rem"; 
    message.style.display = "block";
});