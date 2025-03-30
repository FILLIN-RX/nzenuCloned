



function rechercheDomaine() {
    const section=  document.createElement('section')
    const rechercheDomainecontainer = document.createElement('div')
    rechercheDomainecontainer.classList.add('container')
    const rechercheDomaineRow=document.createElement('div')
    rechercheDomaineRow.classList.add('row')
    const rechercheDomaineCol= document.createElement('div')
    rechercheDomaineCol.classList.add('col')
    const rechercheDomaineH4= document.createElement('h4')
    rechercheDomaineH4.textContent='Recherche whois'
    const rechercheDomaineP=document.createElement('p')
    rechercheDomaineP.textContent="L'outil de recherche WHOIS de NzenuHost montre les dernières données enregistrées dans la base de données officielle WHOIS. Vous pouvez l'utiliser pour obtenir des informations sur le titulaire d'un nom de domaine autant de fois que vous le voulez, gratuitement."
    rechercheDomaineCol.appendChild(rechercheDomaineH4)
    rechercheDomaineCol.appendChild(rechercheDomaineP)
    rechercheDomaineRow.appendChild(rechercheDomaineCol)
    rechercheDomainecontainer.appendChild(rechercheDomaineRow)
      const rechercheDomaineRow2 = document.createElement('div')
      rechercheDomaineRow2.classList.add('row')
      const rechercheDomaineCol2=document.createElement('div')
      rechercheDomaineCol2.classList.add('col')
      const rechercheDomaineRow3=document.createElement('div')
      rechercheDomaineRow3.classList.add('row')
      const rechercheDomaineRow3Col1 = document.createElement('div')
      rechercheDomaineRow3Col1.classList.add('col-md-12', 'col-sm-12', 'col-lg-4')
      const rechercheDomaineRow3Col2 = document.createElement('div')
      
      const rechercheDomaineRow3Col1P=document.createElement('p')
      rechercheDomaineRow3Col1P.textContent="Support d'experts 24/7"
      rechercheDomaineRow3Col1.appendChild(rechercheDomaineRow3Col1P)
      rechercheDomaineRow3.appendChild(rechercheDomaineRow3Col1)
      rechercheDomaineCol2.appendChild(rechercheDomaineRow3)
      rechercheDomaineRow2.appendChild(rechercheDomaineCol2)
      rechercheDomaineRow3Col2.classList.add('col-md-12', 'col-sm-12', 'col-lg-4')
      const rechercheDomaineRow3Col2P = document.createElement('p')
      rechercheDomaineRow3Col2P.textContent='Garantie de disponibilité: 99.99%'
      rechercheDomaineRow3Col2.appendChild(rechercheDomaineRow3Col2P)
      rechercheDomaineRow3.appendChild(rechercheDomaineRow3Col2)
      rechercheDomaineCol2.appendChild(rechercheDomaineRow3)
      rechercheDomaineRow2.appendChild(rechercheDomaineCol2)
      section.appendChild(rechercheDomainecontainer)
      section.appendChild(rechercheDomaineRow2)
      const sectionRecherche= document.getElementById("main")
      sectionRecherche.innerHTML=""
      sectionRecherche.appendChild(section)
      
  
  
  
      
  }
  
  const buttonRecherche=document.querySelector(".buttonRecherche")
  buttonRecherche.addEventListener("click",function(event){
    event.preventDefault()
    if (buttonRecherche) {
        console.log('button clicked')
        rechercheDomaine();
        
    }else{
      console.log('button rechercher not clicked')
      
    }
  })
  
  function TransférerDomaine() {
    const body =document.createElement('main')
    
    // Création de la section "Transférer Votre Nom de Domaine"
    const sectionRealiser = document.createElement('section');
    sectionRealiser.id = 'sectionRealiser';
    sectionRealiser.style.backgroundColor = 'rgb(51, 25, 85)';
    sectionRealiser.style.minHeight = '25rem';

    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'Realiser';

    const row1 = document.createElement('div');
    row1.classList.add('row');

    const col1 = document.createElement('div');
    col1.classList.add('col');

    const h4 = document.createElement('h4');
    h4.textContent = 'Transférer Votre Nom de Domaine vers NzenuHost';

    const p1 = document.createElement('p');
    p1.textContent = 'Transférez facilement votre nom de domaine vers NzenuHost. Profitez d\'un processus simple et sans interruption pour continuer à construire votre présence en ligne avec nous.';

    col1.appendChild(h4);
    col1.appendChild(p1);
    row1.appendChild(col1);

    const row2 = document.createElement('div');
    row2.classList.add('row');

    const col2 = document.createElement('div');
    col2.classList.add('col');

    const row3 = document.createElement('div');
    row3.classList.add('row');

    const col3 = document.createElement('div');
    col3.classList.add('col-md-12', 'col-sm-12', 'col-lg-4');
    col3.innerHTML = '<p>Support d\'experts 24/7</p>';

    const col4 = document.createElement('div');
    col4.classList.add('col-md-12', 'col-sm-12', 'col-lg-4');
    col4.innerHTML = '<p>Garantie de disponibilité: 99.99%</p>';

    row3.appendChild(col3);
    row3.appendChild(col4);
    col2.appendChild(row3);
    row2.appendChild(col2);

    container.appendChild(row1);
    container.appendChild(row2);

    sectionRealiser.appendChild(container);
    body.appendChild(sectionRealiser);

    // Création de la section "RESERVER, ENREGISTRER UN NOM DE DOMAINE"
    const sectionResearch = document.createElement('section');
    const researchDiv = document.createElement('div');
    researchDiv.classList.add('research');

    const h4Research = document.createElement('h4');
    h4Research.textContent = 'RESERVER, ENREGISTRER UN NOM DE DOMAINE';

    const form = document.createElement('form');
    const inputSearch = document.createElement('input');
    inputSearch.type = 'search';
    inputSearch.id = '';
    inputSearch.placeholder = 'www';

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Recherche';

    form.appendChild(inputSearch);
    form.appendChild(submitButton);

    researchDiv.appendChild(h4Research);
    researchDiv.appendChild(form);

    sectionResearch.appendChild(researchDiv);
    body.appendChild(sectionResearch);

    // Création de la section "Option inclus gratuitement avec votre nom de domaine"
    const optionInclusSection = document.createElement('section');
    optionInclusSection.classList.add('optionInclus');

    const optionMain = document.createElement('p');
    optionMain.classList.add('optionInclusMain');
    optionMain.textContent = 'Option inclus gratuitement avec votre nom de domaine';

    const rowOptions = document.createElement('div');
    rowOptions.classList.add('row');

    // Exemple de 1er élément option
    const optionCol1 = document.createElement('div');
    optionCol1.classList.add('col-sm-12', 'col-lg-3', 'col-md-12');
    const optionDiv1 = document.createElement('div');
    optionDiv1.innerHTML ='<svg data-v-c3ad5561="" data-v-3f8e8bf9="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T13 9V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zM5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.587 1.413T9 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.587 1.413T9 21z"></path></svg><span>Tableau de Bord intuitif</span>';
    const pOption1 = document.createElement('p');
    pOption1.textContent = 'Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics.';
    optionCol1.appendChild(optionDiv1);
    optionCol1.appendChild(pOption1);
    rowOptions.appendChild(optionCol1);
    
    const optionCol2 = document.createElement('div');
    optionCol2.classList.add('col-sm-12', 'col-lg-3', 'col-md-12');
    const optionDiv2 = document.createElement('div');
    optionDiv2.innerHTML = '<svg data-v-c3ad5561="" data-v-3f8e8bf9="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-5 h-5" width="1em" height="1em" viewBox="0 0 496 512"><path fill="currentColor" d="M248 43.4C130.6 43.4 35.4 138.6 35.4 256S130.6 468.6 248 468.6S460.6 373.4 460.6 256S365.4 43.4 248 43.4m-97.4 132.9c0-53.7 43.7-97.4 97.4-97.4s97.4 43.7 97.4 97.4v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6c0-82.1-124-82.1-124 0v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6zM389.7 380c0 9.7-8 17.7-17.7 17.7H124c-9.7 0-17.7-8-17.7-17.7V238.3c0-9.7 8-17.7 17.7-17.7h248c9.7 0 17.7 8 17.7 17.7zm-248-137.3v132.9c0 2.5-1.9 4.4-4.4 4.4h-8.9c-2.5 0-4.4-1.9-4.4-4.4V242.7c0-2.5 1.9-4.4 4.4-4.4h8.9c2.5 0 4.4 1.9 4.4 4.4m141.7 48.7c0 13-7.2 24.4-17.7 30.4v31.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-31.6c-10.5-6.1-17.7-17.4-17.7-30.4c0-19.7 15.8-35.4 35.4-35.4s35.5 15.8 35.5 35.4M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 478.3C121 486.3 17.7 383 17.7 256S121 25.7 248 25.7S478.3 129 478.3 256S375 486.3 248 486.3"></path></svg><span>Tableau de Bord intuitif</span>';
    const pOption2 = document.createElement('p');
    pOption2.textContent = 'Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics.';
    optionCol2.appendChild(optionDiv2);
    optionCol2.appendChild(pOption2);
    rowOptions.appendChild(optionCol2);
    
    const optionCol3 = document.createElement('div');
    optionCol3.classList.add('col-sm-12', 'col-lg-3', 'col-md-12');
    const optionDiv3 = document.createElement('div');
    optionDiv3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21z"></path></svg><span>Tableau de Bord intuitif</span>';
    const pOption3 = document.createElement('p');
    pOption3.textContent = 'Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics.';
    optionCol3.appendChild(optionDiv3);
    optionCol3.appendChild(pOption3);
    rowOptions.appendChild(optionCol3);

    const optionCol4 = document.createElement('div');
    optionCol4.classList.add('col-sm-12', 'col-lg-3', 'col-md-12');
    const optionDiv4 = document.createElement('div');
    optionDiv4.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21z"></path></svg><span>Tableau de Bord intuitif</span>';
    const pOption4 = document.createElement('p');
    pOption4.textContent = 'Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics.';
    optionCol4.appendChild(optionDiv4);
    optionCol4.appendChild(pOption4);
    rowOptions.appendChild(optionCol4);

    const optionCol5 = document.createElement('div');
    optionCol5.classList.add('col-sm-12', 'col-lg-3', 'col-md-12');
    const optionDiv5 = document.createElement('div');
    optionDiv5.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21z"></path></svg><span>Tableau de Bord intuitif</span>';
    const pOption5 = document.createElement('p');
    pOption5.textContent = 'Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics.';
    optionCol5.appendChild(optionDiv5);
    optionCol5.appendChild(pOption5);
    rowOptions.appendChild(optionCol5);

    const optionCol6 = document.createElement('div');
    optionCol6.classList.add('col-sm-12', 'col-lg-3', 'col-md-12');
    const optionDiv6 = document.createElement('div');
    optionDiv6.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21z"></path></svg><span>Tableau de Bord intuitif</span>';
    const pOption6 = document.createElement('p');
    pOption6.textContent = 'Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics.';
    optionCol6.appendChild(optionDiv6);
    optionCol6.appendChild(pOption6);
    rowOptions.appendChild(optionCol6);

    // Ajoute ici d'autres options de la même manière

    optionInclusSection.appendChild(optionMain);
    optionInclusSection.appendChild(rowOptions);
    body.appendChild(optionInclusSection);

    // Ajout de la section des extensions de domaine
    const domainSelectionSection = document.createElement('section');
    const domainRow = document.createElement('div');
    domainRow.classList.add('row');
    domainRow.id = 'domainetable';

    const domainCol1 = document.createElement('div');
    domainCol1.classList.add('col-lg-6', 'col-md-12', 'col-sm-12');
    const h5Domain = document.createElement('h5');
    h5Domain.textContent = 'Notre sélection d\'extensions';

    const pDomain = document.createElement('p');
    pDomain.textContent = 'Découvrez notre sélection d\'extensions de domaine soigneusement choisies pour vous. Chaque domaine est disponible à partir de 8000 FCFA par an, garantissant une présence en ligne durable et professionnelle. Choisissez parmi une variété d\'options telles que .com, .tech, .store et bien d\'autres. Créez une identité numérique forte dès aujourd\'hui.';

    domainCol1.appendChild(h5Domain);
    domainCol1.appendChild(pDomain);

    const domainCol2 = document.createElement('div');
    domainCol2.classList.add('col');
    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    const searchButton = document.createElement('input');
    searchButton.type = 'button';
    searchButton.value = 'search';

    const refreshButton = document.createElement('button');
    refreshButton.id = 'buttonactualiser';
    refreshButton.textContent = 'actualiser';

    domainCol2.appendChild(searchInput);
    domainCol2.appendChild(searchButton);
    domainCol2.appendChild(refreshButton);

    domainRow.appendChild(domainCol1);
    domainRow.appendChild(domainCol2);
    domainSelectionSection.appendChild(domainRow);

    const domainExtensionsRow = document.createElement('div');
    domainExtensionsRow.classList.add('row', 'justify-content-center');
    domainExtensionsRow.id = 'domaine';

    domainSelectionSection.appendChild(domainExtensionsRow);

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'charger plus d\'extension';

    domainSelectionSection.appendChild(loadMoreButton);
    body.appendChild(domainSelectionSection);
    const sectionRecherche= document.getElementById("main")
   sectionRecherche.innerHTML=""
    sectionRecherche.appendChild(body);

  }

const buttonTransferer=document.querySelector(".buttontransferer")
  buttonTransferer.addEventListener("click",function(event){
    event.preventDefault()
    if (buttonTransferer) {
        console.log('button clicked')
        TransférerDomaine()
        
    }else{
      console.log('button rechercher not clicked')
      
    }
  })