// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let images = [
    ["bmw.jpg",8000],
    ["citroen.jpg",4000]
];

// Etape 2 - Cacher l'erreur
// error.hidden=true;
error.style.display="none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random()*1001);
let nombreImage = Math.floor(Math.random()*2);
nombreAleatoire = images[nombreImage][1];

let img = document.createElement('img');
img.src= images[nombreImage][0];

let block = document.getElementById("image");
block.append(img);

let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier

function verifier(nombre){

    let instruction =document.createElement('div');

    if(nombre<nombreAleatoire){

        instruction.textContent = "#" + coups + "( " + nombre +" ) C'est  plus !";

        instruction.className = "instruction plus";

    }
    else if(nombre>nombreAleatoire)
    {
        instruction.textContent = "#" + coups + "( " + nombre +" ) C'est  moins !";

        instruction.className = "instruction moins";
    }
    else{
        instruction.textContent = "#" + coups + "( " + nombre +" ) félicitation vous avez trouvé le juste prix !";

        instruction.className = "instruction fini";
        input.disabled =true;
    }

    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = "inline";
    }
    else{
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit',(event) => {
    //Annuler l'envoi du formulaire
    event.preventDefault();

    if(isNaN(input.value) || input.value == '')
    {
        input.style.borderColor = "red";
    }
    else
    {   coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});


