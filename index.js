
//gestion de la bar de navigation
/*
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
*/

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".collapse-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("collapse button clicked");

            // Ferme tous les autres éléments
            document.querySelectorAll(".collapse-content").forEach(content => {
                content.classList.remove("active");

                const buttonplus = content.previousElementSibling.querySelector(".buttoncontentId");
                buttonplus.innerHTML = "";
                buttonplus.innerText = "+";
            });

            const content = button.nextElementSibling;
            const isActive = content.classList.contains("active");

            if (!isActive) {
                content.classList.add("active");

                // Change l'icône du bouton de cet élément
                const buttonplus = button.querySelector(".buttoncontentId");
                buttonplus.innerHTML = "";
                buttonplus.innerText = "-";
            } else {
                // Réinitialise si l'élément est déjà ouvert
                const buttonplus = button.querySelector(".buttoncontentId");
                buttonplus.innerHTML = "";
                buttonplus.innerText = "+";
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
        const element = forfait[i]//.atribute.slice(0,3);
        const initialAttributes= element.atribute.slice(0,12)
        const fullAttributes =element.atribute
        const forfaitname =document.createElement('h5')
           forfaitname.innerText=element.name
        const forfaitContent= document.createElement('p')
            forfaitContent.innerText=element.content
        const forfaitPrix=document.createElement('h5')
            forfaitPrix.innerText=element.prix

            const forfaitHead=document.createElement('div')
            forfaitHead.appendChild(forfaitname)
            forfaitHead.appendChild(forfaitContent)
            forfaitHead.appendChild(forfaitPrix)
            forfaitHead.style.backgroundColor= "oklch(0.257 0.09 281.288)"
            forfaitHead.style.color="white"
            forfaitHead.style.fontWeight="500"
            forfaitHead.style.borderRadius="10px 10px 0px 0px"
            forfaitHead.style.border="1px solid gray"
            let isExpanded=false
            
    
        const divForfait = document.createElement('div')
        divForfait.classList.add("col-sm-12", "col-md-12", "col-lg-3"); 
        // Créer la liste des attributs
        const forfaitAtributeList = document.createElement('ul');
        forfaitAtributeList.style.width="100"
        forfaitAtributeList.style.listStylePosition="inside"
        forfaitAtributeList.style.margin="0"
        forfaitAtributeList.style.padding="0"
        
        const button=document.createElement('button')
            button.innerText="commander"
            button.style.backgroundColor="aqua"
            button.style.color="blue"
            button.style.border="none"  
            
        
// Fonction pour afficher tous les attributs
const showAllAttributes = () => {
    if (!isExpanded) {
        fullAttributes.slice(15).forEach(attr => {
            const li = document.createElement('li');
            li.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" 
                class="icon w-6 h-6 text-primary-900" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"></path>
                </svg> ${attr}`;
            forfaitAtributeList.appendChild(li);
        });
        isExpanded = true;
    }
};

// Fonction pour masquer les attributs et revenir aux 3 initiaux
const hideExtraAttributes = () => {
    if (isExpanded) {
        while (forfaitAtributeList.children.length > 12) {
            forfaitAtributeList.removeChild(forfaitAtributeList.lastChild);
        }
        isExpanded = false;
    }
};

// Ajouter les 3 attributs de base
initialAttributes.forEach(attr => {
    const li = document.createElement('li');
    li.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" 
        class="icon w-6 h-6 text-primary-900" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"></path>
        </svg> ${attr}`;
    forfaitAtributeList.appendChild(li);
});


// Gérer l'affichage des attributs au survol du forfait
button.addEventListener('mouseenter', showAllAttributes);

// S'assurer que les attributs restent affichés tant que la souris est dessus
forfaitAtributeList.addEventListener('mouseenter', () => {
    isExpanded = true; // Empêche la liste de se cacher
});

// Masquer les attributs quand la souris quitte complètement la section
button.addEventListener('mouseleave', (event) => {
    setTimeout(() => {
        if (!button.matches(':hover') && !forfaitAtributeList.matches(':hover')) {
            hideExtraAttributes();
        }
    }, 200); // Petit délai pour éviter les disparitions instantanées
});
        
        const forfaitButtom=document.createElement("div")
        forfaitButtom.appendChild(forfaitAtributeList)
        forfaitButtom.appendChild(button)
        forfaitButtom.style.borderRadius="0px 0px 10px 10px"
        forfaitButtom.style.border="1px solid gray"
            
            divForfait.appendChild(forfaitHead)
            divForfait.appendChild(forfaitButtom); // Ajout de la liste des attributs
            divForfait.style.borderRadius="10px"
            


const divsectionForfait=  document.querySelector('#forfait')
        divsectionForfait.appendChild(divForfait)
        const sectionForfait= document.querySelector('.forfait')
        sectionForfait.style.backgroundColor="#d1d5db"
   
    }
    
}
genereForfait()


async function loaddomaine() {
    const reponse= await fetch('domaine.json')
    const domaine= await reponse.json()
    const table = document.createElement('table');
    const domainediv = document.getElementById('domaine')
    for (let i = 0; i < domaine.length; i++) {

        const domainelement = domaine[i];
        const row =document.createElement('tr')
        const domainetd = document.createElement('td')
        domainetd.innerText=domainelement.domain
        const newpricetd = document.createElement('td')
        newpricetd.innerText=domainelement.newPrice
        const  oldpriceTd = document.createElement('td')
        oldpriceTd.innerText=domainelement.oldPrice
        oldpriceTd.classList.add('old-price')
        table.classList.add('col-md-12', 'col-lg-12','col-sm-12')
        table.style.margin='0px';
        row.appendChild(domainetd)
        row.appendChild(newpricetd)
        row.appendChild(oldpriceTd)
        table.appendChild(row);
        domainediv.appendChild(table)

        
    }

    
}
loaddomaine()

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



//transferde page

// Sélection des éléments
const displayDiv = document.getElementById("main");
const EnregistrerButton = document.querySelectorAll(".loadPage");

// Ajouter un événement au bouton pour charger le contenu
EnregistrerButton.forEach(button => {
    button.addEventListener("click", (event) => {
    console.log("button clicked");
    event.preventDefault();

    // Utiliser fetch pour récupérer le contenu de l'autre page
    const pageUrl = button.getAttribute("data-page")
    const scriptUrl = button.getAttribute("data-script");
    console.log(pageUrl);
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de chargement de la page");
            }
            return response.text(); // Récupérer le texte de la page
        })
        .then(html => {
            // Créer un élément temporaire pour extraire la section
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;

            // Sélectionner la section à partir de l'autre page
            const sectionToLoad = tempDiv.querySelector("#sectionToLoad");

            if (sectionToLoad) {
                // Remplacer le contenu du main avec la section récupérée
                displayDiv.innerHTML = "";
                displayDiv.appendChild(sectionToLoad);

                // Charger dynamiquement le script associé après l'insertion
                
            } else {
                console.log("Section non trouvée sur l'autre page");
            }
        })
        .catch(error => {
            console.error("Erreur:", error);
        });
});

})

// Fonction pour charger un script JS dynamiquement
function loadScript(url) {
    if (url) {
        
    
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => console.log("Script chargé :", url);
    document.body.appendChild(script);
}
}

