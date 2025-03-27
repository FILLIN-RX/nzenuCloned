
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
