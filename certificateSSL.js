async function genereForfaitSSL() {

    const reponse= await fetch('forfaitSSL.json')
    forfait= await reponse.json()
    for (let i = 0; i < forfait.length; i++) {
        const element = forfait[i]//.atribute.slice(0,3);
        const forfaitname =document.createElement('h2')
           forfaitname.innerText=element.name
        const forfaitContent= document.createElement('p')
            forfaitContent.innerText=element.description
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
            forfaitHead.classList.add("forfaitHead")
            
    
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
            button.style.margin="5px"
            button.style.backgroundColor="aqua"
            button.style.color="blue"
            button.style.border="none"  
            
        
// Fonction pour afficher tous les attributs
        element.attribute.forEach(attr => {
            const li = document.createElement('li');
            li.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" 
                class="icon w-6 h-6 text-primary-900" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"></path>
                </svg> ${attr}`;
            forfaitAtributeList.appendChild(li);
    

});
        forfaitAtributeList.style.flexGrow = "1"; 
        

        
        const forfaitButtom=document.createElement("div")
        forfaitButtom.appendChild(forfaitAtributeList)
        forfaitButtom.appendChild(button)
        forfaitButtom.style.borderRadius="0px 0px 10px 10px"
        forfaitButtom.style.border="1px solid gray"
            
            divForfait.appendChild(forfaitHead)
            divForfait.appendChild(forfaitButtom); // Ajout de la liste des attributs
            divForfait.style.borderRadius="10px"
         // Ajuste la hauteur selon tes besoins
            divForfait.style.display = "flex";
            divForfait.style.flexDirection = "column";
            divForfait.style.display = "flex";
            divForfait.style.flexDirection = "column";
            divForfait.style.alignItems = "stretch";



            


const divsectionForfait=  document.querySelector('#forfait')
        divsectionForfait.appendChild(divForfait)
        const sectionForfait= document.querySelector('.forfait')
        sectionForfait.style.backgroundColor="#d1d5db"
   
    }
    
}
genereForfaitSSL()