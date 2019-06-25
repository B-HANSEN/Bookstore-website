// fetch json data from remote servers
fetch('https://api.myjson.com/bins/1h3vb3')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        books = json.books;
        console.log(books);
        mapData(books)
    })
    .catch(error => console.error(error))


var flipCard = document.getElementById("container") // access parent ID in html (main container)

// map json data in html
function mapData(anyArray) {
    // Loop through data in the JSON array.
    for (var i = 0; i < anyArray.length; i++) {

        /****************************Card front************************* */
        // create img
        // var flipCardFront = document.createElement('div'); 
        var flipCardFront = document.createElement('a'); // create Front ID a-tag for images (child1)

        flipCardFront.setAttribute('class', 'flip-card-front'); // assign to class
        flipCardFront.setAttribute("href", anyArray[i].portada);
        flipCardFront.setAttribute("data-fancybox", "gallery");



        var image = document.createElement('img'); // create an <img> div-element
        image.src = anyArray[i].portada; // image source from JSON array
        flipCardFront.appendChild(image); // append img to Front ID

        // create Inner ID (intermediate) and append Front to Inner ID
        var flipCardInner = document.createElement('div'); // create Inner ID (intermediate)
        flipCardInner.setAttribute('class', 'flip-card-inner'); // set Attributes




        flipCardInner.appendChild(flipCardFront); // append Front to Inner ID

        /****************************Card back************************* */
        // create title
        var flipCardBack = document.createElement('div'); // create Back ID (child2)
        flipCardBack.setAttribute('class', 'flip-card-back'); // assign to class

        // add title
        var title = document.createElement('p'); // create a <title> p-element
        title.src = anyArray[i].titulo; // title source from JSON array
        console.log(anyArray[3].titulo);
        title.innerHTML = anyArray[i].titulo; // append title to Back ID
        flipCardBack.appendChild(title);

        // add description
        var description = document.createElement('p'); // create a <description> p-element
        description.src = anyArray[i].descripcion; // description source from JSON array
        console.log(anyArray[3].description);
        description.innerHTML = anyArray[i].descripcion; // append description to Back ID
        flipCardBack.appendChild(description);

        // add more info button
        var button = document.createElement('button'); // create a button element
        button.innerHTML = "more info"; // append description to Back ID


        flipCardBack.appendChild(button);


        // append Back to Inner ID
        flipCardInner.appendChild(flipCardBack);


        /****************************Card Inner to Flip-card************************* */
        // append intermediate to parent
        flipCard.appendChild(flipCardInner);
    }
}