(() => {
  'use strict';
  const detailsForm = document.getElementById('destination_details_form');
  const container = document.getElementById('destinations_container');

  const removeDestination = (event) => {
    const card = event.target.parentElement.parentElement;
    card.remove();
  }

  const cardGenerator = (name, location, photoUrl, description) => {

    //card creation
    const card = document.createElement('div');
    card.className = "card";
    //img
    const img = document.createElement('img');
    img.setAttribute('alt', name);
    if(photoUrl.length === 0){
      img.src = "images/signpost.jpg";
    }
    else{
      img.src = photoUrl;
    }
    card.appendChild(img);
    //card-body div
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    //h3-name
    const destName = document.createElement('h3');
    destName.innerHTML = name;
    cardBody.appendChild(destName);
    //h4-location
    const destLoc = document.createElement('h4');
    destLoc.innerHTML = location;
    cardBody.appendChild(destLoc);
    //p .description
    if(description !== 0){
    const destDesc = document.createElement('p');
    destDesc.className = "card-text";
    destDesc.innerHTML = description;
    cardBody.appendChild(destDesc);
    }
    const cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerHTML = "Remove";

    cardDeleteBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(cardDeleteBtn);
    //append card-body to card
    card.appendChild(cardBody);

    return card;
  }






  const handleFormSubmit = (event) => {
    event.preventDefault();
    // get values
    const destinationName = document.getElementById('name').value;
    const destinationLocation = document.getElementById('location').value;
    const destinationPhoto = document.getElementById('photo').value;
    const destinationDesc = document.getElementById('description').value;
    //reset form
    document.getElementById('name').value = "";
    document.getElementById('location').value = "";
    document.getElementById('photo').value = "";
    document.getElementById('description').value = "";



    if(container.children.length === 0){
      document.getElementById('title').innerHTML = "My Wish List";
    }


    container.appendChild(cardGenerator(destinationName, destinationLocation, destinationPhoto, destinationDesc));
  }


    detailsForm.addEventListener('submit', handleFormSubmit);

  })();
