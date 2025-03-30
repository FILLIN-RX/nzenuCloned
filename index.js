
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
        const response = await fetch('peson.json'); 
        const persons = await response.json();

        const slideContainer = document.querySelector('.carousel-slide');
        slideContainer.innerHTML = ""; // Vider le conteneur avant d'ajouter les cartes

        let index = 0; // Index de la première carte visible

        function renderCarousel() {
            slideContainer.innerHTML = ""; // Effacer l'ancien affichage

            for (let i = 0; i < 2; i++) { // Toujours afficher 2 cartes
                let personIndex = (index + i) % persons.length; // Permet une boucle infinie
                let elementperson = persons[personIndex];

                const personName = document.createElement('h5');
                personName.innerText = elementperson.name;
                personName.style.fontWeight="600"

                const personContent = document.createElement('p');
                personContent.innerText = elementperson.content;
                    

                const personDescription = document.createElement('p');
                personDescription.innerText = elementperson.description;
                personDescription.style.color="blue"
                personDescription.style.fontWeight="600"

                const personImage = document.createElement('img');
                personImage.src = elementperson.image;
                personImage.style.width = "80px";
                personImage.style.borderRadius = "50%";

                const divPerson = document.createElement('div');
                divPerson.classList.add("carousel-card"); // Ajoute une classe spécifique
                divPerson.appendChild(personImage);
                divPerson.appendChild(personName);
                divPerson.appendChild(personDescription);
                divPerson.appendChild(personContent);
                divPerson.style.margin="10px"
                divPerson.style.flexShrink = "0"; // Empêcher le rétrécissement des slides

                slideContainer.appendChild(divPerson);
                
                
                
            }
            
        }
        
        
        

        renderCarousel(); // Affiche les premières cartes

        // Navigation
        const prevBtn = document.querySelector('#prev');
        const nextBtn = document.querySelector('#next');

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % persons.length; // Passer à la carte suivante
            renderCarousel();
            updateCarousel()
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + persons.length) % persons.length; // Revenir à la carte précédente
            renderCarousel();
            updateCarousel()
        });

    } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
    }
}

person();

