
/* 
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

*/

/* 
strumenti
- array
- let/const
- ciclo while 
- brake
*/

// dichiarazione variabili
const btnAdd = document.querySelector('#add');
const ulEl = document.querySelector('ul');


// creare una lista della spesa 
const shoppingList = [
    "pane",
    'uova',
    'farina',
    'pasta'
]

// creiamo un ciclo while
let s = 0
while (s <  shoppingList.length) {
    itemsList = shoppingList[s];
    let liElMarkup = `<li>${itemsList}</li>`;
    console.log(itemsList);
    ulEl.insertAdjacentHTML('beforeend', liElMarkup);
    s++;

}


btnAdd.addEventListener('click', function(){
    console.log('aggiungi');
    
    let aggiungi = true
    while (aggiungi) {
        const newItems=(prompt('aggiungi nuovo elemento'));
        shoppingList.push(newItems)
        let newMarkup = `<li>${newItems}</li>`
        ulEl.insertAdjacentHTML('beforeend', newMarkup)

        aggiungi = confirm('vuoi aggiungere altre cose?')
    }

    console.log(shoppingList)
})
