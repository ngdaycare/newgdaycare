//fecth a https://docs.google.com/spreadsheets/d/1oC4CwQlHiR9JVoLPB3rVksrt12BHp4TxxrGN2GGOnZU/edit#gid=12596863
// Carga la biblioteca de Google API Client
// gapi.load('client', initClient);

// // Inicializa el cliente de Google API
// function initClient() {
//   gapi.client.init({
//     apiKey: 'AIzaSyArt2ylixRt7rGcElbvDOh5aYfc9xfj7ig',
//     clientId: '1010016720101-jluckanf801itjakics3e0a145bl4gub.apps.googleusercontent.com',
//     discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//     scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
//   }).then(function() {
//     // Autenticación exitosa
//     // Ahora puedes hacer llamadas a la API de Google Sheets
//     fetchData();
//   }, function(error) {
//     // Error al inicializar el cliente
//     console.error('Error al inicializar el cliente de Google API:', error);
//   });
// }

// // Obtén los datos de la hoja de cálculo
// function fetchData() {
//   gapi.client.sheets.spreadsheets.values.get({
//     spreadsheetId: '1oC4CwQlHiR9JVoLPB3rVksrt12BHp4TxxrGN2GGOnZU',
//     range: 'NOMBRE_DE_RANGO'
//   }).then(function(response) {
//     var values = response.result.values;
//     if (values && values.length > 0) {
//       console.log('Nombre, Especialidad:');
//       values.forEach(function(row) {
//         console.log(row[0] + ', ' + row[4]);
//       });
//     } else {
//       console.log('No se encontraron datos en la hoja de cálculo.');
//     }
//   }, function(error) {
//     console.error('Error al obtener los datos de la hoja de cálculo:', error);
//   });
// }

//AIzaSyBszbJFaFeyL6baAfXZLwn9fJ1poNsdxGQ
//637920236611-ffbrk0rup8mcbijpqfgoinb3qjia37ck.apps.googleusercontent.com
//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