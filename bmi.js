function calculateBMI(weight, height){
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5){
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function checkBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (isNaN(weight) || isNaN(height) || weight <=0 || height <= 0) {
        result.textContent = "Please enter valid positive numbers!";
        result.style.color = "red";
        return;
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    result.innerHTML = `Your BMI is <strong> ${bmi.toFixed(2)}
    </strong> - <em>${category}</em>`;
    result.style.color = "#333";
}