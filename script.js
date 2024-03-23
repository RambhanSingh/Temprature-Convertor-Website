function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var selectUnit = document.getElementById("selectUnit").value;
    
    if(selectUnit === "celsius") {
      var celsius = inputTemperature;
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("result").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
    } else {
      var fahrenheit = inputTemperature;
      var celsius = (fahrenheit - 32) * 5/9;
      document.getElementById("result").innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
    }
  }