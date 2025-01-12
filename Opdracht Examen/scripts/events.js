
import { seriesData, getFilteredSeries } from './data.js'; 
import { renderSeriesList, updateStatistics } from './main.js'; 

export function setupSearchEvent(searchInput) {
  searchInput.addEventListener('input', () => { 
    const searchTerm = searchInput.value; // Haalt de huidige zoekterm op uit het zoekveld
    const filteredSeries = getFilteredSeries(seriesData, searchTerm); // Filtert de series op basis van de zoekterm

    renderSeriesList(filteredSeries); // Toont alleen de gefilterde series

    updateStatistics(seriesData); // Werkt de statistieken bij op basis van ALLE series
  });
}

