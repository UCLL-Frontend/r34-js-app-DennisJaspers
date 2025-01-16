# Netflix Series Overzicht

Dit project is een interactieve webapplicatie waarmee je een overzicht krijgt van Netflix-series. 
Het biedt de mogelijkheid om series te bekijken, op te zoeken, en te beheren.

## Inhoud
- [Over](#over)
- [Functionaliteiten](#functionaliteiten)
- [Bestandsstructuur](#bestandsstructuur)

## Over
De Netflix Series Overzicht-site stelt gebruikers in staat om de details van verschillende series te bekijken, waaronder:
- Titel
- Genre
- Aantal seizoenen

De site bevat ook statistieken zoals:
- Het totale aantal series
- Het gemiddelde aantal seizoenen van alle series

Daarnaast kun je via de beheerpagina (beheer.html) series toevoegen en verwijderen.

## Functionaliteiten
1. **Indexpagina (index.html)**:
   - Bekijk alle series in een overzicht.
   - Zoek naar een serie via de zoekbalk.
   - Bekijk statistieken zoals het totale aantal series en het gemiddelde aantal seizoenen.
   - Navigatie naar de beheerpagina.

2. **Beheerpagina (beheer.html)**:
   - Voeg nieuwe series toe door het invoeren van de titel, genre en aantal seizoenen.
   - Verwijder bestaande series uit het overzicht.

3. **Stijlen en interactie**:
   - Gebruik van **CSS** voor de visuele vormgeving.
   - Gebruik van **JavaScript** voor dynamische functionaliteiten, zoals zoeken, beheren, en het berekenen van statistieken.


## Bestandsstructuur
/
│
├── index.html        # Hoofdpagina met serie-overzicht
├── beheer.html       # Beheerpagina voor toevoegen/verwijderen van series
├── styles.css        # CSS-bestand voor visuele vormgeving
│
├── scripts/
│   ├── main.js       # Hoofdscript voor de indexpagina
│   ├── beheer.js     # Script voor de beheerpagina
│   ├── data.js       # Beheer van de seriegegevens
│   ├── events.js     # Eventlisteners en interacties
│
└── README.md         # Documentatie (dit bestand)
