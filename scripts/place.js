const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

const temperature = 12;
const wind = 3.6;


function calculateWindChill(temperature, wind) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);

}

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && wind > 4.8) {
    const chill = calculateWindChill(temperature, wind);
    windChillElement.textContent = chill.toFixed(1) + "℃";
} else {
    windChillElement.textContent = "N/A"
}