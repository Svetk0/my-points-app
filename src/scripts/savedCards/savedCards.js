import { data } from "./savedCardsData";
console.log(data);
// ================= START CODING ===========
function createCardTextElement_byCat(text, className, addText = '') {
    const wrapper = document.createElement("div");
    wrapper.classList.add(className);
    wrapper.textContent = addText + text;
    return wrapper;
}
export default function createInfoCard_byCat(card) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    const divName = createCardTextElement_byCat(card.name, "card-name");
    const divUniverse = createCardTextElement_byCat(card.timezone, "card-timezone", "Local time: ");
    const divAlterego = createCardTextElement_byCat(card.alterego, "alterego", "Альтерэго: ");
    const divOccupation = createCardTextElement_byCat(card.occupation, "occupation", "Деятельность: ");
    const divFriends = createCardTextElement_byCat(card.friends, "friends", "Друзьяшки: ");
    const divSuperpowers = createCardTextElement_byCat(card.superpowers, "superpowers", "Суперсила: ");
    const divInfo = createCardTextElement_byCat(card.info, "info", "Общая инфа: ");

    //Create div url
    const divUrl = document.createElement("div");
    divUrl.classList.add("item-image");
    const arefUrl = document.createElement("img");
    arefUrl.classList.add("image");
    arefUrl.src = card.url;
    //arefUrl.textContent = "Filmography";
    divUrl.appendChild(arefUrl);


    //Make a structure of the data in the INFO CARD box
    const divArray = [divName, divUniverse, divAlterego, divOccupation, divFriends, divSuperpowers, divInfo];
    makeStructure(newCard, divArray);

  

    //Create box for the Card
    const containerItem = document.createElement("div");
    containerItem.classList.add("container-item");
    containerItem.style.background = "linear-gradient(270deg, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.865),rgba(61, 60, 64, 0.865)), url(" + card.url + ")";

    const mainContainer = document.querySelector(".container");
    const containerImageRating = createCardTextElement_byCat('', "containerImageRating");

    containerImageRating.appendChild(divUrl);
    containerImageRating.appendChild(divRating);
    containerItem.appendChild(containerImageRating);
    containerItem.appendChild(newCard);
    mainContainer.appendChild(containerItem);
    return;
}

function makeStructure(parentItem, childArray) {
    for (let i = 0; i < childArray.length; i++) {
        parentItem.appendChild(childArray[i]);
    }
    return;
}

let index = 0;
console.log(data.length);
while (index >= 0 && index < data.length) {
    createInfoCard_byCat(data[index]);
    index++;
}