// Remplacez 'VOTRE_ID_FEUILLE_CALCUL' par l'ID de votre feuille de calcul
const spreadsheetId = '152OjXcjZhWUeRVFnMmEnh98zNCTfVS_o';

// Fonction pour charger les données depuis Google Sheets
function loadSheet() {
    // Configuration de Tabletop.js
    Tabletop.init({
        key: spreadsheetId,
        callback: processData,
        simpleSheet: true,
        postProcess: processTabletopData
    });
}

// Fonction appelée une fois les données chargées
function processData(data, tabletop) {
    // Vous avez maintenant les données de Google Sheets (data)
    console.log(data);

    // À partir d'ici, vous pouvez traiter les données comme vous le feriez normalement
}

// Fonction appelée après le traitement par Tabletop.js
function processTabletopData(element) {
    // Extrait les données de l'élément
    const data = element.elements[0].raw;

    // Vous pouvez maintenant traiter les données comme vous le feriez normalement
    console.log(data);
}

// Appelez la fonction pour charger les données
loadSheet();
