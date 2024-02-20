//Create group of buttons//
let buttonsGroup = document.getElementById("buttonsGroup");
let create = function (userLength) {
    for (var i = 0; i < userLength; i++) {

        let card = document.createElement("button");
        buttonsGroup.appendChild(card);
        card.setAttribute("class", "card hide");
        card.setAttribute("id", "card-" + i)
        card.textContent = "Match Any Two!";
    }
};

const numberForm = document.getElementById("numberForm");
let userCardCount = document.querySelector("#userCardCount")
numberForm.addEventListener("submit", function(event){
    event.preventDefault();
    let userCardCountText = parseInt(userCardCount.value);
    create(userCardCountText);
});



//Rotate card
// cardTest.addEventListener("click", function () {
//     if (cardTest.getAttribute("class") === "card hide") {
//         cardTest.setAttribute("class", "card show")
//         cardTest.textContent = ""
//     } else if (cardTest.getAttribute("class") === "card show") {
//         cardTest.setAttribute("class", "card hide")
//         cardTest.textContent = "Match Any Two!"
//     }
// });

//Generate card
