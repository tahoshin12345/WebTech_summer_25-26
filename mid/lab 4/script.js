function getAge() {
    const userInput = document.getElementById("dateInput").value;
    const output = document.getElementById("output");

    // Check if the user actually picked a date
    if (!userInput) {
        output.innerText = "Please select a date first!";
        return;
    }

    const birthDate = new Date(userInput);
    const today = new Date();

    // Calculate simple year difference
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // If birthday hasn't happened yet this year, subtract 1 year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    output.innerText = `You are ${age} years old.`;
}