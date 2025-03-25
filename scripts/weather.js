const apiKey = '8217180150e2807938f85880b949793a'; // Reemplaza con tu API Key
const city = 'Mendoza,AR'; // Ciudad de Mendoza, Argentina

// Función para calcular la sensación térmica (Wind Chill)
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return 'N/A'; // No se aplica si no cumple las condiciones
}

// Llamada a la API para obtener los datos del clima
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=es`)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Para verificar los datos en la consola

        // Obtener los valores del clima
        const temp = Math.round(data.main.temp); // Temperatura en °C
        const windSpeed = data.wind.speed; // Velocidad del viento en km/h
        const description = data.weather[0].description
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '); // Descripción con mayúsculas en cada palabra

        // Calcular y mostrar la sensación térmica (Wind Chill)
        const windChill = calculateWindChill(temp, windSpeed);

        // Mostrar los datos en la página
        document.getElementById('temperature').textContent = `${temp}°C`;
        document.getElementById('description').textContent = description;
        document.getElementById('wind-speed').textContent = `${windSpeed} km/h`;
        document.getElementById('wind-chill').textContent = windChill;
    })
    .catch(error => console.error('Error al obtener los datos del clima:', error));
