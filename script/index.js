"use strict";

const deleteButtonElements = document.querySelectorAll('.deleteButton');

deleteButtonElements.forEach(element => {
   element.addEventListener('click',removeUserCardElement);
});

function removeUserCardElement(listener){
    this.parentElement.remove();
}