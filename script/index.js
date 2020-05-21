"use strict";

const deleteButtonElements = document.querySelectorAll('.deleteButton');

deleteButtonElements.forEach(element => {
   element.addEventListener('click',removeUserCardElement);
});

function removeUserCardElement(listener){
    let approving = confirm('Do you really want to remove this card?');
    if(approving){
        this.parentElement.remove();
    }
}