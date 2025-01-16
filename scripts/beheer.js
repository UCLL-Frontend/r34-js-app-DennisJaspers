
import { seriesData, addSeries, deleteSeries } from './data.js';

const addSeriesForm = document.getElementById('add-series-form'); // Formulier voor het toevoegen van een serie
const titleInput = document.getElementById('title'); // Invoerveld voor de titel van de serie
const genreInput = document.getElementById('genre'); 
const seasonsInput = document.getElementById('seasons'); 
const manageSeriesList = document.getElementById('manage-series-list'); // Container waarin de lijst van series wordt weergegeven

// Functie om de lijst van series weer te geven
function renderSeriesList() {
    manageSeriesList.innerHTML = ''; 
    seriesData.forEach((serie, index) => { // Doorloop alle series in de data
        const seriesElement = document.createElement('div'); 
        seriesElement.className = 'manage-series'; // Voeg een CSS-klasse toe voor styling
        seriesElement.innerHTML = `
            <div>
                <h3>${serie.title}</h3> 
                <p>Genre: ${serie.genre}</p> 
                <p>Seizoenen: ${serie.seasons}</p> 
            </div>
            <button class="delete" data-index="${index}">Verwijderen</button> 
        `;
        manageSeriesList.appendChild(seriesElement); // Voeg het gemaakte element toe aan de lijst
    });
}

// Functie om een nieuwe serie toe te voegen
function handleAddSeries(event) {
    event.preventDefault(); // Voorkom dat het formulier de pagina herlaadt

    const title = titleInput.value.trim(); 
    const genre = genreInput.value.trim(); 
    const seasons = parseInt(seasonsInput.value.trim(), 10); // Haal het aantal seizoenen op als een geheel getal

    if (title && genre && !isNaN(seasons)) { // Controleer of alle invoervelden correct zijn ingevuld
        addSeries({ title, genre, seasons }); 
        titleInput.value = ''; // Reset het titelveld
        genreInput.value = '';
        seasonsInput.value = '';
        renderSeriesList(); 
    }
}

// Functie om een serie te verwijderen
function handleDeleteSeries(event) {
    if (event.target.classList.contains('delete')) { // Controleer of er op een delete-knop is geklikt
        const index = event.target.dataset.index; // Haal de index van de te verwijderen serie op uit de dataset
        deleteSeries(index); 
        renderSeriesList(); 
    }
}

addSeriesForm.addEventListener('submit', handleAddSeries); // Voeg een event listener toe aan het formulier om nieuwe series toe te voegen
manageSeriesList.addEventListener('click', handleDeleteSeries); 

renderSeriesList(); 
