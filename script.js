/* Exercice 1 */ 

let chaine = "merci";

if(chaine == ""){
    console.log("la chaine est vide");
}else {
    console.log("la chaine n'ai pas vide ");
}

/* Exercice 2*/


function abbrevName(character) {

    let abbrevTab = character.toString().split(" ");

    if(abbrevTab.length > 1) {

        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;

    }

    return character;
}
abbrevName("Robin Singh");


/* Exercice 3 */

function swapCase(character) {

    /**
     * @description : cette fonction permet de remplacer toutes les majuscules par des 
     * miniscules et vice verca
     * @param  : character -> chaine sur laquelle on travail
     * @param : wordTable -> tableau qui contient les mots de notre chaine
     * @param : neWordTableFormated -> tableau contenant les mots reformatter
     */

    let wordTable = character.split(" ");
    let neWordTableFormated = [];

    for(let word of wordTable) {
        if(word.charAt(0) == word.charAt(0).toUpperCase()) {

            word = word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
            neWordTableFormated.push(word);

        }
        else {

            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            neWordTableFormated.push(word);

        }
    }

    console.log(neWordTableFormated.join(" "));

}


/* Exercice 4*/

function isOmnipresent(array, number) {

    /**
     * @description : cette fonction permet de vérifier si un chiffre est présente
     * dans un tableau composé de sous tableau
     * @param : array -> tableau de sous tableau
     * @param : number -> nombre à vérifier dans le tableau
     * @param : found -> le nombre de fois ou on trouve le nombre dans le tableau
     */
    
    let found = 0;

    for(let item of array) {
        
        for(let i of item) {
            
            if(i == number) {
                found++;
            }
        }
    }

    if(found >= array.length) {
        return true;
    }
    return false;

}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);