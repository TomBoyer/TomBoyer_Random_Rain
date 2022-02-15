const body = document.body;

setInterval(rainFall, 10);

function rainFall() {
    const waterDrop = document.createElement('i');

    //creation de la goute (fontAwsome)
    waterDrop.classList.add('fas');
    waterDrop.classList.add('fa-tint');

    //délais random entre chaque goutes
    waterDrop.style.fontSize = Math.random() * 7 + 'px';

    //durée de l'animation
    waterDrop.style.animationDuration = Math.random() * 2 + 's';

    //opacité des gouttes
    waterDrop.style.opacity = Math.random() + .3;

    //répartir distribution des gouttes sur la page
    waterDrop.style.left = Math.random() * window.innerWidth + 'px';

    //création d'un enfant waterDrope dans la balise body 
    body.appendChild(waterDrop)

    //tuer les éléments créés au fur et a mesure
    setTimeout(() => {
        waterDrop.remove();
    }, 3000)
}


//vérification que le chiffre de la taille de la goutte est ok
console.log(Math.random());