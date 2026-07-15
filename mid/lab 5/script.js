function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("themeBtn");
    
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.innerText = "Dark Mode";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.innerText = "Light Mode";
    }
}

function setGreeting() {
    const hours = new Date().getHours();
    let text = "🌙 Good Evening"; 
    
    if (hours >= 5 && hours < 12) {
        text = "☀️ Good Morning";
    } else if (hours >= 12 && hours < 17) {
        text = "🌤️ Good Afternoon";
    }
    
    document.getElementById("greeting").innerText = text;
}

function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    
    document.getElementById(id).classList.add('active');
}

function validateForm(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (message.length < 10) {
        document.getElementById("messageError").style.display = "inline";
        isValid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    if (isValid) {
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("successMsg").style.display = "none";
    }
}

window.onload = setGreeting;