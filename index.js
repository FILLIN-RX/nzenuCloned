
//gestion de la bar de navigation




document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".divlink").forEach((button, index) => {
        button.addEventListener("click", function() {
            let content = document.querySelectorAll(".collapse")[index];

            // Toggle l'affichage du contenu
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll('.navlink').forEach((button,index)=>{
    button.addEventListener("click",()=>{
        console.log('link clicked')
        let contentnav = document.querySelectorAll('.linkContent')[index];

        if (contentnav.style.display === "block") {
            contentnav.style.display ='none'
            console.log('found')
            
        }else{
            contentnav.style.display = "block";
            console.log('find')
        }
    })
})
});

//gestion des button dans la section quesion posee

async function genereForfait() {

    const reponse= await fetch('forfait.json')
    forfait= await reponse.json()
    for (let i = 0; i < forfait.length; i++) {
        const element = forfait[i];
        const forfaitname =document.createElement('h5')
           forfaitname.innerText=element.name
        const forfaitContent= document.createElement('p')
            forfaitContent.innerText=element.content
        const forfaitPrix=document.createElement('h5')
            forfaitPrix.innerText=element.prix
    
        const divForfait = document.createElement('div')
        divForfait.classList.add("col-sm-12", "col-md-6", "col-lg-3");
        divForfait.style.border = "1px solid #ddd"; // Ajoute un style simple
        divForfait.style.padding = "10px";
        divForfait.style.margin = "10px 0";
        // Créer la liste des attributs
        const forfaitAtributeList = document.createElement('ul');
        element.atribute.forEach(attr => {
            const li = document.createElement('li');
            li.innerText = attr;
            forfaitAtributeList.appendChild(li);
        });
            divForfait.appendChild(forfaitname)
            divForfait.appendChild(forfaitContent)
            divForfait.appendChild(forfaitPrix)
            divForfait.appendChild(forfaitAtributeList); // Ajout de la liste des attributs

const sectionForfait=  document.querySelector('#forfait')
        sectionForfait.appendChild(divForfait)
   
    }
    
}
genereForfait()

async function person() {
    try {
        const response = await fetch('peson.json'); // Correction du nom du fichier
        const persons = await response.json();

        const slideContainer = document.querySelector('.carousel-slide');
        slideContainer.innerHTML = ""; // On vide le conteneur avant d'ajouter du contenu

        let index = 0;

        persons.forEach((elementperson) => {
            // Création des éléments
            const personName = document.createElement('h5');
            personName.innerText = elementperson.name;

            const personContent = document.createElement('p');
            personContent.innerText = elementperson.content;

            const personDescription = document.createElement('p');
            personDescription.innerText = elementperson.description;

            const personImage = document.createElement('img');
            personImage.src = elementperson.image;
            personImage.style.width = "50%";
            personImage.style.borderRadius = "50%";

            const divPerson = document.createElement('div');
            divPerson.appendChild(personImage);
            divPerson.appendChild(personName);
            divPerson.appendChild(personDescription);
            divPerson.appendChild(personContent);

            // Appliquer du style
            divPerson.style.borderRadius = "10px";
            divPerson.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            divPerson.style.padding = "10px";
            divPerson.style.overflow = "hidden";
            divPerson.style.position = "relative";
            divPerson.style.backgroundColor = "#f9f9f9";
            divPerson.style.objectFit = "cover";
            divPerson.style.margin = "10px";
            divPerson.style.width = "600px"; // S'assurer que les slides ont la même taille
            divPerson.style.flexShrink = "0"; // Empêcher le rétrécissement des slides

            slideContainer.appendChild(divPerson);
        });

        // Navigation
        const prevBtn = document.querySelector('#prev');
        const nextBtn = document.querySelector('#next');

        function updateCarousel() {
            slideContainer.style.transform = `translateX(${-index * 600}px)`;
            slideContainer.style.transition = "transform 0.5s ease-in-out";
        }

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % persons.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + persons.length) % persons.length;
            updateCarousel();
        });

    } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
    }
}

person();
