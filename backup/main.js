// fetch json data from remote servers
fetch('https://api.myjson.com/bins/1h3vb3')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        books = json.books;
        console.log(books);
        mapData(books);
        // myFunction(books);
    })
    .catch(error => console.error(error))


var flipCard = document.getElementById("container") // access parent ID in html (main container)

// map json data in html
function mapData(anyArray) {
    // Loop through data in the JSON array.
    for (var i = 0; i < anyArray.length; i++) {

        /**************************************Card front*********************************** */
        // create front image
        var flipCardFront = document.createElement('div'); // 

        flipCardFront.setAttribute('class', 'flip-card-front'); // assign to class

        var image = document.createElement('img'); // create an <img> element
        image.src = anyArray[i].portada; // from JSON array
        flipCardFront.appendChild(image); // append img to Front ID

        // create Inner ID (intermediate) and append Front to Inner ID
        var flipCardInner = document.createElement('div'); // create Inner ID (intermediate)
        flipCardInner.setAttribute('class', 'flip-card-inner'); // set Attributes

        flipCardInner.appendChild(flipCardFront); // append Front to Inner ID

        /*************************************Card back*********************************** */
        // create title
        var flipCardBack = document.createElement('div'); // create Back ID (child2)
        flipCardBack.setAttribute('class', 'flip-card-back'); // assign to class

        // add title
        var title = document.createElement('div'); // create h5-element
        title.src = anyArray[i].titulo; // from JSON array
        title.innerHTML = anyArray[i].titulo; // append title to Back ID
        flipCardBack.appendChild(title);

        // add description
        var description = document.createElement('p'); // create a <description> p-element
        description.src = anyArray[i].descripcion; // from JSON array
        description.innerHTML = anyArray[i].descripcion; // append description to Back ID
        flipCardBack.appendChild(description);

        // add more info button
        var button = document.createElement('button'); // create a button element
        button.setAttribute("class", "click-btn");
        button.setAttribute("href", anyArray[i].detalle);
        button.setAttribute("data-fancybox", "gallery")
        button.innerHTML = "more info"; // append description to Back ID
        flipCardBack.appendChild(button);

        // append Back to Inner ID
        flipCardInner.appendChild(flipCardBack);

        /****************************Card Inner to Flip-card************************* */
        // append Inner to Intermediate
        var flipCardIntermediate = document.createElement('div'); // create Intermediate ID
        flipCardIntermediate.setAttribute('class', 'flip-card-inner'); // assign to class
        flipCardIntermediate.appendChild(flipCardInner);

        // append Intermediate to parent
        flipCard.appendChild(flipCardIntermediate);
    }
}


/* *************************** SEARCH ENGINE ************************* */
// function myFunction() {
//     var input, filter, parentCard, titulo, i;

//     input = document.getElementById("searchfield");
//     filter = input.value.toLowerCase();

//     parentCard = document.getElementsByClassName("flip-cart");

//     for (var i = 0; i < parentCard.length; i++) {
//         titulo = parentCard.getElementsByTagName("h5")[0];
//         if (titulo.innerHTML.toLowerCase().indexOf(filter) > -1) {
//             parentCard[i].style.display = "";
//         } else {
//             parentCard[i].style.display = "none";
//         }
//     }
// }