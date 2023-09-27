const a = 10 ;

for(let i = 0; i < 10; i++)
{
    console.log(i * 10);
}

// Pour utiliser le DOM

console.log(document);

let bob = document.getElementById('bob');
bob.innerText = "Wesh ! Wesh ! Salameche !";

console.log(bob.innerText);

for(let i = 0; i < 10; i++)
{
    // DANGEREUX !!! NE PAS FAIRE, SOUS PEINE D'AVOIR AFFAIRE A H4CKERM4N 
    bob.innerHTML += `
    <div class="item-${i}">
        <p>Bonjour ${i}</p>
    </div>
    `
}

// alert pour afficher une alerte
// prompt pour demander une information à l'utilisateur
// confirm pour demander une confirmation à l'utilisateur

// let confirmation = confirm("Voulez vous continuer ?"); // retourne un boolean

// let prenom = prompt("Quel est ton prénom ?"); // retourne un string
// bob.innerText = `Bonjour ${prenom} !`;

// document : l'accès à tout le document
// window : l'accés à tout l'écran
// document.body : l'accés à la zone de texte du body

// document.body.innerText = "La fenetre fait " + window.innerWidth + "px de large";

// Créer un petit projet avec index et fichier js
// Demander à l'utilisateur son prénom
// Demander son age
// Demander ce qu'il aime faire
// L'afficher sur la page dans un div
// Ex : Bonjour User ! Vous avez X années et vous aimez : Y

// let prenom = prompt("Quel est ton prénom ?");

// let age = prompt("Quel est ton age ?");
// let liked = prompt("Qu'est que tu aimes faire ?");

// let prenomElm = document.getElementById('prenom');
// prenomElm.innerText = `Bonjour ${prenom} !`;

// let ageElm = document.getElementById('age');
// ageElm.innerText = `Vous avez ${age}ans`;

// let likedElm = document.getElementById('liked');
// likedElm.innerText = `Vous aimez : ${liked}`;

// ----------- POUR RECUPERER DES ELEMENTS DU DOM ----------------

// getElementById : Permet de récupérer un élement avec son id
// getElementsByClassName : Permet de récupérer tous les élements avec leur class | Attention il retourne un tableau
// querySelector : Permet de récupérer UN (le premier qui match) élement avec un selecteur CSS - 
        // - Un selecteur CSS c'est : # pour un id, . pour une classe ou n'importe quel selecteur pouvant être utilisé en CSS
// querySelectorAll : Permet de récupérer tous les élements qui matchent avec un selecteur CSS sous forme de tableau

// On peut les utiliser sur n'importe quel objet du DOM
        // La racine étant document

// Quand j'utilise un template je dois récupérer celui-ci du DOM
const itemTemplate = document.getElementById('item-template');
console.log(itemTemplate);

for(let i = 0; i < 36; i++)
{
    // Puis le cloner afin de l'exploiter
    let clone = document.importNode(itemTemplate.content, true);

    // Je peux récupérer les élements enfant de mon objet clone
    // querySelector me permet de récupérer la div avec la classe item dans mon template cloné

    let itemElm = clone.querySelector('.item');
    // Je peux utiliser la propriété classList d'un élement du DOM pour ajouter ou supprimer une class

    itemElm.classList.add(`item-${i}`);
    itemElm.innerText = i;

    // Puis je l'ajoute à mon body (dans le document HTML lui même)
    document.body.appendChild(clone);

}

// Permet de faire un compte à rebours
setTimeout(() => {
    // Quand le delai est écoulé
    // Je récupérer tous les élements avec la classe item
    const items = document.querySelectorAll('.item');

    // Pour chaucun des élements...
    for(let i = 0; i < items.length; i++)
    {
        // Si celui si est un élement pair 
        // % : modulo
        if(i % 2 === 0) {
            // J'ajoute la classe item-modified
            items[i].classList.add('item-modified');
        }
    }
},2000); // le compte a rebours dure 2 secondes aka 2000 millisecondes