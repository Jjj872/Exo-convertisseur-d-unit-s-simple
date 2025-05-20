function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}



function convertToFoot(meter) {
    return meter * 3.28084;
}



function init() {
    document.getElementById("sendButton").addEventListener('click', function() {
        const selectedValue = document.getElementById("select_unit").value;
        const inputValue = parseFloat(document.getElementById("firstValue").value);
        let result;

        if (selectedValue === "Celsius/Fahrenheit") {
            result = convertToFahrenheit(inputValue);
            document.getElementById("secondValue").innerText = result + " °F";
        } 
        if (selectedValue === "Meter/Foot") {
            result = convertToFoot(inputValue);
            document.getElementById("secondValue").innerText = result.toFixed(2) + " ft.";
        }
    });
}

init()