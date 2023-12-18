console.log('JS OK');


//Richiamo l'elemento dall'HTML
let pw = document.getElementById('paragraph')
console.log('elemento html: ', pw);

// Dichiaro la variabile per il nome e ne salvo il valore 
const firstName = prompt('Inserisci il tuo nome', 'Emiliano');
console.log('nome: ', firstName);

// Dichiaro la variabile per il cognome e ne salvo il valore
const lastName = prompt('Inserisci il tuo cognome', 'Gastaldo');
console.log('cognome: ', lastName);

// Dichiaro la variabile per il colore e ne salvo il valore
const favoriteColor = prompt('Inserisci il suo colore preferito', 'Giallo');
console.log('colore: ', favoriteColor);

// Dichiaro la variabile per password e la creo
const superSecurePassword = firstName + lastName + favoriteColor + '23';
console.log('password: ', superSecurePassword);

// Modifico l'elemento html così da stamparlo
pw.innerHTML = `La tua password è: <strong>${superSecurePassword}</strong>`;
console.log('codice html:', pw.innerHTML);
console.log('testo pw:', pw.innerText);