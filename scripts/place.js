// Mostrar el año actual
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("theyear");
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Mostrar la última fecha de modificación
const lastModifiedElement = document.getElementById("lastu");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Updated: " + document.lastModified;
}

// Cambiar la imagen al cargar un archivo
const image = document.querySelector("img");
const input = document.querySelector("input[type='file']");

if (input) {
    input.addEventListener("change", () => {
        const file = input.files[0];
        if (file && file.type.startsWith("image/")) {
            image.src = URL.createObjectURL(file);
        } else {
            alert("Por favor, seleccione un archivo de imagen.");
        }
    });
}







// Wind Chill Calculation
const temperature = 8; // Static value (Celsius)
const windspeed = 6; // Static value (km/h)

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windChillOutput = document.querySelector('#wind-chill');
if (temperature <= 10 && windSpeed > 4.8) {
    windChillOutput.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillOutput.textContent = 'N/A';
}
