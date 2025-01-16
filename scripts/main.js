
import { seriesData, calculateStatistics } from './data.js'; 
import { setupSearchEvent } from './events.js'; 

// HTML-elementen ophalen om ermee te werken
const seriesListElement = document.getElementById('series-list'); // Element waar de lijst van series wordt weergegeven
const totalSeriesElement = document.getElementById('total-series'); 
const averageSeasonsElement = document.getElementById('average-seasons'); 
const searchInput = document.getElementById('search'); // Input-element voor zoekfunctionaliteit

// Functie om de lijst van series weer te geven
export function renderSeriesList(series) {
    seriesListElement.innerHTML = ''; 
    series.forEach(serie => { 
        const seriesElement = document.createElement('div'); 
        seriesElement.className = 'series'; // Voegt een CSS-klasse toe voor styling
        seriesElement.innerHTML = ` 
            <div> 
                <h3>${serie.title}</h3> 
                <p>Genre: ${serie.genre}</p> 
                <p>Seizoenen: ${serie.seasons}</p> 
            </div>
        `;
        seriesListElement.appendChild(seriesElement); // Voegt de serie toe aan de lijst in de DOM
    });
}

export function updateStatistics(series) {
    const stats = calculateStatistics(series); // Berekening van statistieken op basis van de series
    totalSeriesElement.textContent = stats.totalSeries; 
    averageSeasonsElement.textContent = stats.averageSeasons; 
}

// Functie om de series uit localStorage te laden en te tonen
function loadSeries() {
    const storedSeries = JSON.parse(localStorage.getItem('seriesData')); // Haalt de seriesdata op uit localStorage
    if (storedSeries && Array.isArray(storedSeries)) { // Controleert of er geldige seriesdata aanwezig is
        renderSeriesList(storedSeries); 
        updateStatistics(storedSeries); 
    } else {
        renderSeriesList(seriesData); 
        updateStatistics(seriesData); 
    }
}


loadSeries(); 

// Functie om zoekfunctionaliteit op te zetten
setupSearchEvent(searchInput); 
