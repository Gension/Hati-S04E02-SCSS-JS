# Challenge : Memories 

[https://www.youtube.com/watch?v=SlPhMPnQ58k](https://www.youtube.com/watch?v=SlPhMPnQ58k)

## Contexte :
Votre mission si vous l'acceptez (vous avez pas vraiment le choix de toute façon est de réaliser le design d'un jeu Memory. 
Ce jeu consistera en une grille de 6x6 où les joueurs devront trouver des paires correspondantes.

![Memory](memory.png)

## Instructions
1. Commencer par créer les fichiers nécessaires HTML + CSS dans un nouveau dossier de projet 

2. Grille
Créez une grille de 6x6 pour les cartes du jeu.
Pour cet exercice, utilisez des divs pour chaque carte et les propriétés `grid` vu en cours

3. Progress Bar 
Réservez un emplacement pour une barre de progression en haut ou en bas de votre grille. Cette barre représentera le temps. L'implémentation de la fonctionnalité de la barre de progression sera le challenge de demain.

4. Sprites des cartes:
Utilisez le fichier de sprite fourni pour afficher les images sur les cartes.
Si vous le souhaitez, vous pouvez personnaliser ce sprite pour le rendre plus attrayant.

5. Animation de retournement de carte:
Lorsque le joueur passe la souris sur une carte (:hover), elle doit se retourner avec un effet 3D.
Pour réaliser cela, inspirez-vous des propriétés suivantes :
     - `perspective`: pour donner une perspective à l'élément parent.
     - `transform-style`: preserve-3d: pour s'assurer que l'effet 3D est préservé.
     - `transition`: pour animer la rotation.
     - `transform`: avec la valeur rotateY pour effectuer la rotation sur l'axe Y.

Testez votre animation pour vous assurer qu'elle est fluide et sympa.

Conseils:
- Utilisez la flexbox ou grid pour créer la grille de cartes.
- N'hésitez pas à utiliser des classes et des id pour mieux cibler et styliser vos éléments.
- Prenez le temps de bien comprendre les propriétés CSS suggérées, car elles sont essentielles pour donner un effet sympa à votre animation.