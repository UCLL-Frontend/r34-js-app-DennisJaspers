
export const seriesData = JSON.parse(localStorage.getItem('seriesData')) || [
    { title: "Breaking Bad", genre: "Crime", seasons: 5 }, 
    { title: "Prison Break", genre: "Thriller", seasons: 5 },
    { title: "The Walking Dead", genre: "Horror", seasons: 11 },
    { title: "Vikings", genre: "Action", seasons: 6 },
    { title: "Peaky Blinders", genre: "Crime", seasons: 6 },
    { title: "Black Mirror", genre: "Science Fiction", seasons: 5 },
    { title: "Suits", genre: "Drama", seasons: 9 },
];

// Functie om series op te slaan in localStorage
function saveSeriesToLocalStorage() {
    localStorage.setItem('seriesData', JSON.stringify(seriesData)); 
}

// Functie om een serie toe te voegen
export function addSeries(serie) {
    seriesData.push(serie); // Voegt een nieuwe serie toe aan de lijst
    saveSeriesToLocalStorage(); // Slaat de bijgewerkte lijst op in localStorage
}

// Functie om een serie te verwijderen
export function deleteSeries(index) {
    seriesData.splice(index, 1); 
    saveSeriesToLocalStorage(); 
}

// Functie om een serie bij te werken
export function updateSeries(index, updatedSerie) {
    seriesData[index] = updatedSerie;
    saveSeriesToLocalStorage(); 
}

// Functie om series te filteren op basis van een zoekterm
export function getFilteredSeries(series, searchTerm) {
    return series.filter(serie => 
        serie.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) // Controleert of de titel de zoekterm bevat
    );
}

// Functie om statistieken te berekenen
export function calculateStatistics(series) {
    const totalSeries = series.length; 
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0); 
    const averageSeasons = totalSeries > 0 ? (totalSeasons / totalSeries).toFixed(1) : 0; 

    return { totalSeries, averageSeasons }; 
}
